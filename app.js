const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send({ msg: "Hello, world!" });
});

app.listen(3000, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
