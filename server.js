// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

//router
require("./public/routes/apiRoutes")(app);
require("./public/routes/htmlRoutes")(app);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//server is listening
app.listen(PORT, function() {
  console.log(`App listening on PORT http://localhost:${PORT}`);
});
