const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI);

const connection = async (crudFunc, ...args) => {
  try {
    await client.connect();
    const db = client.db("movies");
    const collection = db.collection("movie");
    await crudFunc(collection, ...args);
    client.close();
  } catch (error) {
    if (error) console.log(error);
  }
};

module.exports = connection;
