const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("hlw ki khobor");
});

app.listen(port, () => {
  console.log("listen to port", port);
});

// midleware
// app.use(cors());
// app.use(express.json());
