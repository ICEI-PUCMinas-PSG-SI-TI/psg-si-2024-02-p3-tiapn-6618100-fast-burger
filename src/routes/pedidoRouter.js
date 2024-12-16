const { Router } = require("express");
const db = require("../db");

const router = Router();

router.get("/", (req, res) => {
  db.any(
    `SELECT p.id,
            p.data_hora,
            p.status,
            p.mesa,
            p.forma_pagamento,
            SUM(pc.quantidade * pc.valor) AS valor_total
      FROM pedido p
      LEFT JOIN pedido_cardapio pc ON pc.id_pedido = p.id
      GROUP BY 1,2,3,4
      ORDER BY p.status, p.data_hora`
  ).then((data) => {
    res.send({ data });
  });
});

router.post("/", async (req, res) => {
  const { mesa, opcoes } = req.body;

  db.one("INSERT INTO pedido (mesa) VALUES ($1) RETURNING id", [mesa])
    .then(({ id: pedido }) => {
      db.batch(
        "INSERT INTO pedido_cardapio (id_pedido, id_cardapio, valor, quantidade) " +
          "  VALUES (${pedido}, ${opcao}, ${valor}, ${quantidade}); " +
          "UPDATE insumo i " +
          " SET quantidade = i.quantidade - (${quantidade} * oi.quantidade) " +
          " FROM opcao_insumo oi " +
          " WHERE oi.id_insumo = i.id " +
          " AND oi.id_cardapio = ${opcao};",
        opcoes.map(({ opcao, quantidade, valor }) => ({
          pedido,
          opcao,
          valor,
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

router.post("/:id/pagar", (req, res) => {
  const { id } = req.params;
  const { forma_pagamento } = req.body;

  db.none(
    "UPDATE pedido SET status = 'Pago', forma_pagamento = $2 WHERE id = $1",
    [id, forma_pagamento]
  )
    .then(() => {
      res.status(200).send();
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send();
    });
});

module.exports = router;
