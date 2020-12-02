const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());

app.get("/world/:worldId", (req, res) => {
  res.sendFile(path.resolve(__dirname, `${req.params.worldId}.json`));
});

app.post("/save/:worldId", (req, res) => {
  fs.writeFile(
    path.resolve(__dirname, `${req.params.worldId}.json`),
    JSON.stringify(req.body),
    (err) => {
      if (err) res.sendStatus(400);
      else res.sendStatus(200);
    }
  );
});

const host = "localhost"; //"127.0.0.1";
const port = 3000;

app.listen(port, host, () => {
  console.log(`Listening to http://${host}:${port}...`);
});
