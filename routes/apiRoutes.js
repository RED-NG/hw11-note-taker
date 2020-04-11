const notesDB = require("../db/db.json");
const fs = require("fs");

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

    notesDB.push(newNote);

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
