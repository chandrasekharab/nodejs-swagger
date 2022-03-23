const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
const port = 3020;

const jsonParser = bodyParser.json();

// app.use(bodyParser.json);

app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.post("/sayHello", jsonParser, (req, res) => {
  console.dir(req.body);
  res.send("Hello friend");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
