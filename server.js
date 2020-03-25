// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//server is listening
app.listen(PORT, function() {
  console.log(`App listening on PORT http://localhost:${PORT}`);
});
