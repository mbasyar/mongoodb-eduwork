const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url);

(async () => {
  try {
    await client.connect();
    console.log("Konek ke MongoDB berhasil");
  } catch (error) {
    console.log(error);
  }
})();

const db = client.db("express-mongodb");

module.exports = db;