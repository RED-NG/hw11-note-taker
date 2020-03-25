"use strict";

const notesDB = require("../db/db.json");
const fs = require("fs");
const path = require("path");

module.exports = function(app) {
  app.get("/api/notes", (req, res) => {
    res.json(notesDB);
  });
};
