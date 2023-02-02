const {MongoClient} = require('mongodb')
const url= 'mongodb://127.0.0.1:27017';
const database = 'code-step';
const client = new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    db= result.db(database);
  return  collection = db.collection('node-tut');
  
}

module.exports = getData;