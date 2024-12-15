const { Router } = require("express");
const db = require("../db");

const router = Router();

router.get("/", (req, res) => {
  db.any(
    `SELECT c.id, c.nome, c.valor, c.imagem, 
            jsonb_agg(
              jsonb_build_object('nome', i.nome, 'quantidade', oi.quantidade)
            ) AS insumos
      FROM cardapio c
      LEFT JOIN opcao_insumo oi ON oi.id_cardapio = c.id
      LEFT JOIN insumo i ON i.id = oi.id_insumo
      GROUP BY 1,2,3,4
      ORDER BY nome`
  ).then((data) => {
    res.send({ data });
  });
});

router.post("/", async (req, res) => {
  const { nome, valor, imagem, insumos } = req.body;

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
    "INSERT INTO cardapio (nome, valor, imagem) VALUES ($1, $2, $3) RETURNING id",
    [nome, valor, imagemURL]
  )
    .then(({ id: opcao }) => {
      db.batch(
        "INSERT INTO opcao_insumo (id_cardapio, id_insumo, quantidade) " +
          "VALUES (${opcao}, ${insumo}, ${quantidade})",
        insumos.map(({ id: insumo, quantidade }) => ({
          opcao,
          insumo,
          quantidade,
        }))
      )
        .then(() => {
          res.status(201).send();
        })
        .catch((error) => {
          console.log(error);
          res.status(500);
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db.none("DELETE FROM cardapio WHERE id = $1", [id])
    .then(() => {
      res.status(200).send();
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send();
    });
});

module.exports = router;
