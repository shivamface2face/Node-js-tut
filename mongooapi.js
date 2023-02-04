
const express = require('express');
require('./mongooconfig');
const product = require('./productmongoo');
const app = express();
app.use(express.json());




// app.post('/cat', async(req, resp) => {
//     let data = await new product(req.body);
//     let result =await data.save();
//     console.log(result);
//     // console.log(req.body);
//     // resp.send("done");
// })

// app.get('/let', async (req, resp) => {

//     let data = await product.find();
//     resp.send(data);
    
// });

// app.delete('/del/:_id', async (req, resp) => {
//     console.log(req.params);
//     let data = await product.deleteOne(req.params);
//     resp.send(data);
    
// });

// app.put('/upd/:_id', async (req, resp) => {
//     let data = await product.updateOne(
//         // console.log(req.params);
//         req.params,
//         {
//             $set: req.body
//         }
    
//     );
//     resp.send(data);

// });



 // search api

app.get('/srch/:key', async(req, resp) => {
    let data = await product.find({
        "$or": [
            { "name": { $regex: req.params.key } }
        ]
    });
    resp.send(data);
  })





app.listen(3000);