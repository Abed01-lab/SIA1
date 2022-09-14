import { listen } from "soap";
import express from "express";
import bodyParser from "body-parser";

interface Person {
  name: String;
  ip: String;
  mail: String;
}

interface IGetName {
  Person: Person[];
}

const app = express();
const myService = {
  NameService: {
    NameServiceSOAP: {
      GetName: function ({ Person }: IGetName) {
        console.log(Person);

        const People = Person.map((person: any) => {
          person["gender"] = "male";
          return person;
        });
        return { People };
      },
    },
  },
};
const xml = require("fs").readFileSync("soap.wsdl", "utf8");
app.use(
  bodyParser.raw({
    type: function () {
      return true;
    },
    limit: "5mb",
  })
);
app.listen(8001, function () {
  //Note: /wsdl route will be handled by soap module
  //and all other routes & middleware will continue to work
  listen(app, "/wsdl", myService, xml);
  console.log("Server started");
});
