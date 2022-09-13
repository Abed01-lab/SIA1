import express from "express";

const app = express();
const port = 3131;

app.get("/", (req, res) => {
  res.send("This is a API for finding genders.");
});

app.post("/getgender", (req, res) => {
  console.log();
  res.send("ok");
});

app.listen(port, () => {
  console.log("Rest API listining on port 3131");
});
