const express = require('express');
const dbCoonect = require('./MongoDb');
const mongodb = require('mongodb');

const app = express();

app.use(express.json());
app.get('/', async(req, resp) => {
    
    let data = await dbCoonect();
    data = await data.find().toArray();
    console.log(data);
    resp.send(data);
    
});

app.post('/', async (req, resp) => {
    // resp.send({ name: "shivam" });
    // console.log(req.body);
    let data =await dbCoonect();
    let result = await data.insert(req.body);
    resp.send(result);
});


app.put('/', async (req, resp) => {
    // console.log(req.body);
    // resp.send({ name: "shivam" });
    let data = await dbCoonect();
    let result = await data.updateOne(
        { name: "iphone15" },
        { $set: { price: 12111 } }
    );
    resp.send({ result: "updated" });
});


app.delete('/:id', async (req, resp) => {
    console.log(req.params.id);
    const data = await dbCoonect();
    let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    resp.send(result);

})




app.listen(3000);

