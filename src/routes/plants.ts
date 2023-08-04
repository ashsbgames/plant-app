const express = require("express");
const router = express.Router();
const plantController = require("../controllers/plants");

router.post("/", plantController.createPlant);
router.get("/", plantController.readPlants);
router.get("/:plantId", plantController.singlePlant);
router.patch("/:plantId", plantController.updateDetails);
router.delete("/:plantIdent", plantController.deletePlant);

module.exports = router;
