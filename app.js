const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server opened on port 3000");
});

app.get("/shop/:tags", async (req, res) => {
  await res.render("main", { checkPath: req.params.tags });
});

/* 
// const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://tuwanon:Q4lyU7QGdtRdtLwG@cluster0.qew2hux.mongodb.net/shop?retryWrites=true&w=majority"
);

mongoose
  .model("product", new Schema({ id: Number, tags: String }), "product")
  .find({ tags: "romance novels" }, (err, query) => {
    console.log(query);
  }); */
