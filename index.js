const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const port = process.env.PORT || 4000;
const app = express();

// midleware
app.use(cors());
app.use(express.json());

// redpositive1
// 0LezrBHxs9HFjDjs

const uri =
  "mongodb+srv://redpositive1:0LezrBHxs9HFjDjs@cluster0.zdt5s4o.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  console.log("connect");
  // perform actions on the collection object
  client.close();
});

app.get("/", (req, res) => {
  res.send("hlw ki khobor");
});

app.listen(port, () => {
  console.log("listen to port", port);
});

// midleware
// app.use(cors());
// app.use(express.json());
