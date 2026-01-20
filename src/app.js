const express = require("express");
const cors = require("cors");
const verificarToken = require("./middleware/authMiddleware");

const app = express();
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API GesEm funcionando");
});

app.get("/api/protegido", verificarToken, (req, res) => {
  res.json({
    msg: "Acceso autorizado",
    usuario: req.usuario,
  });
});


module.exports = app;
