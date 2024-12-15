const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const router = express.Router();
const insumosRouter = require("./routes/insumosRouter");
const cardapioRouter = require("./routes/cardapioRouter");

app.use(cors());
app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));

router.use("/insumos", insumosRouter);
router.use("/cardapio", cardapioRouter);

app.use("/api", router);

app.listen(3000, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
