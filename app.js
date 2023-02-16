const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
const Schema = mongoose.Schema;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server opened on port 3000");
});

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://tuwanon:Q4lyU7QGdtRdtLwG@cluster0.qew2hux.mongodb.net/shop?retryWrites=true&w=majority"
);

mongoose
  .model("product", new Schema({ id: Number, tags: String }), "product")
  .find({ tags: "romance novels" }, (err, query) => {
    console.log(query);
  });
