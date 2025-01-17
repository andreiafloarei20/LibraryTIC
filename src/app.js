const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/books", bookRoutes);

module.exports = app;