const notesDB = require("../db/db.json");
const fs = require("fs");
const shortid = require("shortid");

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
    const newNote = req.body;
    const id = shortid.generate();
    newNote.id = id;

    notesDB.push(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(notesDB), (err) => {
      if (err) throw err;
    });
    console.log("Your note has been saved!");
    res.json(true);
  });

  app.delete("/api/notes/:id", (req, res) => {
    const noteID = req.params.id;

    var index = notesDB.findIndex((item) => item.id == noteID);
    notesDB.splice(index, 1);
    var stringDB = JSON.stringify(notesDB);

    fs.writeFile("db/db.json", stringDB, (err) => {
      if (err) throw err;
      res.json(notesDB);
    });
  });
};
