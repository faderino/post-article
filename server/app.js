"use strict";
const express = require("express");
const cors = require("cors");
const Controller = require("./controllers");

const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post("/article", Controller.create);
app.get("/article/:limit/:offset", Controller.getAll);
app.get("/article/:id", Controller.getById);
app.put("/article/:id", Controller.edit);
app.patch("/article/:id", Controller.updateStatus);
app.delete("/article/:id", Controller.delete);

app.use((error, req, res, next) => {
  switch (error.name) {
    case "NotFound":
      res.status(404).json({ message: "Data not found" });
      break;
    case "SequelizeValidationError":
      res
        .status(400)
        .json(error.errors.map((e) => ({ path: e.path, message: e.message })));
      break;
    default:
      console.log(error);
      res.status(500).json(error);
  }
});

app.listen(port, () => {
  console.log(`App listening to port: ${port}.`);
});
