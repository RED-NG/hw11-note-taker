const notesDB = require("../db/notes.json");
const fs = require("fs");

module.exports = function(app) {
  app.get("/api/notesDB", (req, res) => {
    res.json(notesDB);
  });

  app.post("/api/notesDB", (req, res) => {
    notesDB.push(req.body);
    // res.send("Your note has been saved into the database.");
    res.json(notesDB);
  });

  app.delete("/api/notesDB/:id", (req, res) => {});
};
