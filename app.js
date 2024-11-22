const dotenv = require("dotenv");
const express = require("express");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const router = express.Router();
const insumosRouter = require("./routes/insumosRouter");

app.use(express.static("src"));
app.use(express.json());

router.use("/insumos", insumosRouter);

app.use("/api", router);

app.listen(3000, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
