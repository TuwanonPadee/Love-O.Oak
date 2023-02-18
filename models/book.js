const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://tuwanon:Q4lyU7QGdtRdtLwG@cluster0.qew2hux.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected MongoDB database");
  });

module.exports = mongoose.model(
  "product",
  new Schema({ id: Number, name: String, tags: String, price: Number }),
  "product"
);
