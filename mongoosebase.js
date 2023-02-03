
const mongooes = require('mongoose');

const main = async()=> {
    await mongooes.connect("mongodb://127.0.0.1:27017/e-comm");
    const productsSchema = new mongooes.Schema({
        name: String,
        price:Number
    });

    const productsModel = mongooes.model('products', productsSchema);
    let data = new productsModel({ name: "iphone 17",price:20000 });
    let result = await data.save();
    console.log(result);

}

main();