"use strict";

const notesDB = require("../db/db.json");
const fs = require("fs");
const path = require("path");
const id = require("shortid");

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", function (err, db) {
      if (err) {
        console.log("get request for notes has failed" + err);
        return;
      }
      var db = JSON.parse(db);
      res.json(db);
    });
  });

  app.post("/api/notes", (req, res) => {
    var newNote = req.body;
    for (let i = 0; i < notesDB.length; i++) {
      newNote.id = i + 1;
    }
    console.log(newNote);
    notesDB.push(newNote);
    console.log(notesDB);

    fs.writeFile("./db/db.json", JSON.stringify(notesDB), (err) => {
      if (err) throw err;
    });
    console.log("Your note has been saved!");
    res.json(true);
  });

  app.delete("/api/delete/:id", (req, res) => {
    for (let i = 0; i < notesDB.length; i++) {
      if (req.params.id == notesDB[i].id) {
        notesDB.splice(i, 1);
      }
    }
    res.json(notesDB);
  });
};
