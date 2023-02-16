const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://tuwanon:<password>@cluster0.qew2hux.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test");
  const product = collection.databaseName;
  console.log(product);
  // perform actions on the collection object
  client.close();
});
