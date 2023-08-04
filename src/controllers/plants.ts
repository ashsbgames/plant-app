const { query } = require("express");
const { redirect, get } = require("express/lib/response");
const getDb = require("../services/db");

exports.createPlant = async (req, res) => {
  const db = await getDb();
  const { name, type } = req.body;

  try {
    await db.query(`INSERT INTO Plants (name, type) VALUES (?, ?)`, [
      name,
      type,
    ]);

    res.status(201); //.json(req.body);
    res.send(
      `Plant "${req.body.name}" has been added to the database under "${req.body.type}" type`
    );
  } catch (err) {
    res.status(500).json(err);
    //res.send('Entry must be a string in JSON format');
  }

  db.close();
};

exports.readPlants = async (req, res) => {
  const db = await getDb();

  try {
    const [plants] = await db.query("SELECT * FROM Plants");
    res.status(201).json({ plants });
  } catch (err) {
    res.status(500).json(err);
  }

  db.close();
};

exports.singlePlant = async (req, res) => {
  const db = await getDb();

  const { plantId } = req.params;
  const [[plants]] = await db.query("SELECT * FROM Plants");

  const [[plantById]] = await db.query("SELECT * FROM Plants WHERE id = ?", [
    plantId,
  ]);

  try {
    if (!plantById) {
      res.status(404);
      res.send(
        ` Plant ID no: ${plantId} does not exist 😔! Please choose between 1 - ${plants.length}.`
      );
    } else {
      res.status(200).json(plantById);
    }
  } catch (err) {
    res.status(500).json(err);
  }

  db.close();
};

exports.updateDetails = async (req, res) => {
  const db = await getDb();
  const details = req.body;
  const { plantId } = req.params;

  let updatedName;
  let updatedType;

  if (req.body.name && req.body.type) {
    updatedName = `The plant name has been updated to '${req.body.name}' 🎤.`;
    updatedType = `The type has been updated to '${req.body.type}'`;
  } else if (!req.body.name) {
    updatedName = `The plant name has not changed.`;
    updatedType = `The type has been updated to '${req.body.type}'`;
  } else if (!req.body.type) {
    updatedName = `The plant name has been updated to '${req.body.name}'.`;
    updatedType = `The type has not changed`;
  }

  try {
    const [[existingPlant]] = await db.query(
      "SELECT * FROM Plants WHERE id = ?",
      [plantId]
    );

    if (existingPlant) {
      await db.query("UPDATE Plants SET ? WHERE id = ?", [details, plantId]);
      res.status(200);
      res.send(
        `Plant no:${plantId} has been updated! ${updatedName} ${updatedType}.`
      );
    } else {
      res.status(404);
    }
  } catch (err) {
    res.status(500);
  }

  db.close();
};

exports.deletePlant = async (req, res) => {
  const db = await getDb();
  const plantId = req.params.plantIdent;

  try {
    const [[plant]] = await db.query("SELECT * FROM Plants WHERE id = ?", [
      plantId,
    ]);
    if (!plant) {
      res.status(404);
      res.send(`${plantId} is not in the database.`);
    } else {
      await db.query("DELETE FROM Plants WHERE id = ?", [plantId]);
      res.status(200);
      res.send(`Plant no:${plantId} has been deleted! Bye ${req.body.name}`);
    }
  } catch (err) {
    res.status(500).json(err);
  }

  db.close();
};
