
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-comm';

async function getData() {
     let result = await client.connect();
      db = result.db(database);
      collection = db.collection('products');
     let resonse = await collection.find().toArray();
     console.log(resonse);
     
}

getData();

