import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

db.on(
  "error",
  console.error.bind(console, "Erro de conexão com o banco de dados")
);

db.once("open", () => {
  console.log("Banco de dados conectado");
});

const app = express();

app.use(express.json());

routes(app);

function removerNome(nome) {
  livros.splice(buscaLivro(nome), 1);
}

export default app;