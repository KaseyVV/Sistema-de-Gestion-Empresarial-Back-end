require("dotenv").config();
const app = require("./src/app");
const conectarDB = require("./src/config/db");

const PORT = process.env.PORT || 3000;

conectarDB();

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
