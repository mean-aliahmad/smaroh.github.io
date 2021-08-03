import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://smaroh:smarohapp@786@smaroh-staging.kqhkg.mongodb.net/smaroh-staging?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    console.log(err);
//   const collection = client.db("smaroh-staging").collection("devices");
  // perform actions on the collection object
  client.close();
});