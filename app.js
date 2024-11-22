const dotenv = require("dotenv");
const express = require("express");
const pgp = require("pg-promise")();

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const dbConf = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
};

const db = pgp(dbConf);

app.use(express.static("src"));

app.listen(3000, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
