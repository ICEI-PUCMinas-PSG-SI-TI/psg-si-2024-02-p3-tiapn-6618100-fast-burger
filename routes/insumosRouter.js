const { Router } = require("express");
const db = require("../db");

const insumosRouter = Router();

insumosRouter.get("/", (req, res) => {
  db.any("SELECT * FROM insumo").then((data) => {
    res.send({ data });
  });
});

insumosRouter.post("/", (req, res) => {
  const { nome, categoria } = req.body;

  db.one("INSERT INTO insumo (nome, categoria) VALUES ($1, $2) RETURNING id", [
    nome,
    categoria,
  ])
    .then(({ id }) => {
      res.status(201).send({ id });
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
    });
});

insumosRouter.delete("/:id", (req, res) => {
  const id = req.params.id;

  db.none("DELETE FROM insumo WHERE id = $1", [id])
    .then(() => {
      res.status(200).send();
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send();
    });
});

module.exports = insumosRouter;
