import mysql from "mysql2/promise";

const { DB_PASSWORD, DB_USER, DB_NAME, DB_HOST, DB_PORT } = process.env;

module.exports = async () => {
  try {
    const connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      port: parseInt(DB_PORT), // Convert DB_PORT to a number
      database: DB_NAME,
    });

    return connection;
  } catch (error) {
    // Handle the error here
    console.error("Error connecting to the database:", error);
    // You can choose to throw the error to be handled by the caller
    // throw error;
    // Or return a rejected promise to propagate the error
    return Promise.reject(error);
  }
};
