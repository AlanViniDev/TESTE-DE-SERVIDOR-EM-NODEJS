//requisições
const express = require("express");
const app = express();
const request = require("supertest");

// bate na rota do servidor
app.get("/", (req, res) => {
  res.status(200).send("status");
});


//inicia e define o servidor para o teste
app.listen(3000, () => {
  console.log("Servidor iniciado na porta 8000");
});


//testa o servidor 
describe("Testa o caminho raiz", () => {
  test("Deve responder o metodo GET", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

module.exports = app;

