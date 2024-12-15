const pgp = require("pg-promise")();

const dbConf = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
};

const db = pgp(dbConf);

db.batch = function (sql, data) {
  return new Promise((resolve, reject) => {
    db.tx((t) => data.map((d) => t.none(sql, d)))
      .then(() => resolve())
      .catch((e) => reject(e));
  });
};

module.exports = db;
