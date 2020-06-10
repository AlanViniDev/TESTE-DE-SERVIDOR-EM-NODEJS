//app.js 

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});


module.exports = app;

app.listen ( 8000 , () => { console .log ( "Aplicativo de exemplo ouvindo na porta 8000!" ); });

const request = require("supertest");

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});
