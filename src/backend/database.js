const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://srAdrover:1234@cluster0.wlvhj.mongodb.net/myFirstDataBase?retryWrites=true&w=majority";

const database = new MongoClient(uri);

function run() {
  try {
    database.connect();

  } finally {
    database.close();
  }
}
run();

module.exports.database = database.db("eventcoin");