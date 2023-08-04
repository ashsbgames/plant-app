// src/index.ts
//import mysql from "mysql2/promise";
const app = require("./src/app");
require("dotenv").config(); // Load environment variables from .env file

const APP_PORT = process.env.PORT || 5000;

// const dbConfig = {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// };

// const pool = mysql.createPool(dbConfig);
// app.locals.db = pool;

app.listen(APP_PORT, () => {
  console.log(`The robots are working on port ${APP_PORT}`);
});
