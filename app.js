const express = require("express");
const Book = require("./models/book");
const app = express();

const tagConvert = {
  "romance-story": "romance novels",
  "love-story": "love story",
  "boylove-story": "y-boylove",
};

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server opened on port 3000");
});

app.get("/shop/:tags", async (req, res) => {
  const tag = req.params.tags;

  const response = await Book.find({ tags: tagConvert[tag] });
  res.render("main", {
    checkPath: tag,
    bookProduct: {},
    bookProductList: response,
    tagMock: tagConvert[tag],
  });
});

app.get("/shop/:tag/detail/:id", async (req, res) => {
  const paramTag = req.params.tag,
    paramId = req.params.id;

  const response = await Book.findOne({
    id: paramId,
    tags: tagConvert[paramTag],
  });
  res.render("main", {
    checkPath: "detail",
    bookProduct: response,
    bookProductList: [],
    tagMock: "",
  });
});
