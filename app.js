/** ExternalImports */
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const cors = require("cors");

/**Internal Imports*/
dotenv.config();
const connectDatabase = require("./api/config/dbConnection.js");
/***app and other variable initializations */
const app = express();

// Alternatively, for testing, allow all origins
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
const path = require("path");

app.use(express.static(path.join(__dirname, "../client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// });
// Your routes here
// app.get("/api/products", (req, res) => {
//   console.log("insidecdc");
//   res.json({ message: "This is your product list." });
// });

const port = 4000;

/***Middlewares */

app.use(bodyParser.json({ limit: "100mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productRoute = require("./api/routes/product.js");

app.use("/api", productRoute);

/* Error handler middleware */

app.use(async (req, res, next) => {
  console.log("inside not found");
  next(createError.NotFound());
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = app;
