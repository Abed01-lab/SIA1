import express from "express";
import bodyParser from "body-parser";
import { getGender } from ".";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ name: "abed" });
});

app.post("/getgender", async (req, res) => {
  const { name, country, ip } = req.body;
  const gender = await getGender(name, country, ip);
  res.json({ name, gender });
});

app.listen(8080, () => {
  console.log("Server started");
});
