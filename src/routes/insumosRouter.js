const { Router } = require("express");
const db = require("../db");

const router = Router();

router.get("/", (req, res) => {
  db.any("SELECT * FROM insumo ORDER BY nome").then((data) => {
    res.send({ data });
  });
});

router.post("/", async (req, res) => {
  const { nome, categoria, imagem } = req.body;

  const formdata = new FormData();

  formdata.append("image", imagem);
  formdata.append("type", "base64");

  const response = await fetch("https://api.imgur.com/3/image", {
    method: "POST",
    headers: {
      Authorization: "Client-ID " + process.env.IMGUR_CLIENT_ID,
    },
    body: formdata,
  });
  const json = await response.json();

  if (!response.status.toString().startsWith("2")) {
    res.status(500).send({ msg: "Erro ao fazer upload da imagem." });
    console.log(json);
    return;
  }

  const imagemURL = json.data.link;

  db.one(
    "INSERT INTO insumo (nome, categoria, imagem) VALUES ($1, $2, $3) RETURNING id",
    [nome, categoria, imagemURL]
  )
    .then(({ id }) => {
      res.status(201).send({ id });
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
    });
});

router.get("/:id/aumentar", (req, res) => {
  const { id } = req.params;

  db.none("UPDATE insumo SET quantidade = quantidade + 1 WHERE id = $1", [id])
    .then(() => {
      res.status(200).send();
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send;
    });
});

router.get("/:id/diminuir", async (req, res) => {
  const { id } = req.params;

  const { quantidade } = await db.one(
    "SELECT quantidade FROM insumo  WHERE id = $1",
    [id]
  );

  if (quantidade == 0) {
    res.status(400).send();
    return;
  }

  db.none("UPDATE insumo SET quantidade = quantidade - 1 WHERE id = $1", [id])
    .then(() => {
      res.status(200).send();
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send;
    });
});

router.delete("/:id", (req, res) => {
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

module.exports = router;
