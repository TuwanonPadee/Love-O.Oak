const express = require("express");
const Book = require("./models/book");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server opened on port 3000");
});

app.get("/shop/:tags", async (req, res) => {
  const tag = req.params.tags,
    tagConvert = {
      "romance-story": "romance novels",
      "love-story": "love story",
      "boylove-story": "y-boylove",
    };
  const response = await Book.find({ tags: tagConvert[tag] });
  res.render("main", {
    checkPath: tag,
    bookProduct: response,
    tagMock: tagConvert[tag]
  });
});
