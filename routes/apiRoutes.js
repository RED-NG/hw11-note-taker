"use strict";

const notesDB = require("../db/db.json");
const fs = require("fs");
const path = require("path");

module.exports = function(app) {
  app.get("/api/notes", (req, res) => {
    res.json(notesDB);
  });

  app.post("/api/notes", (req, res) => {
    notesDB.push(req.body);
    console.log(notesDB);
    for (let i = 0; i < notesDB.length; i++) {
      notesDB[i].id = i + 1;
    }

    fs.writeFile("./db/db.json", JSON.stringify(notesDB), err => {
      if (err) throw err;
      console.log("Your note has been saved!");
    });
    res.json(true);
  });
};
