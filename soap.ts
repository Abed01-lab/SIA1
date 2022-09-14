import express from "express";
import bodyParser from "body-parser";
import { listen } from "soap";

const myService = {
  MyService: {
    MyPort: {
      GetPrice: function (name: String) {
        return { name };
      },
    },
  },
};

const app = express();
var xml = require("fs").readFileSync("myservice.wsdl", "utf8");

app.use(
  bodyParser.raw({
    type: function () {
      return true;
    },
    limit: "5mb",
  })
);

app.listen(8081, () => {
  console.log("SOAP server started!");
  listen(app, "/wsdl", myService, xml, () => {
    console.log("server initialized");
  });
});
