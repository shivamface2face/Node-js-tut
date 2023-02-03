
const mongooes = require('mongoose');



  mongooes.connect("mongodb://127.0.0.1:27017/e-comm");

    const productsSchema = new mongooes.Schema({
        name: String,
        price: Number,
        brand: String,
        category: String
    });

const saveData = async()=> {

    const productsModel = mongooes.model('products', productsSchema);
      
        let data = new productsModel({ name: "redmi note 7s",price:10000,brand:"mi",category:"mobile" });
        let result = await data.save();
        console.log(result);
    
}

// saveData();


      
      

  
const updateData = async () => {
    const productsModel = mongooes.model('products', productsSchema);
    let data = await productsModel.updateOne(
        { name: "iphone 17" }, { $set: { price: 100 } }
    );
    console.log(data);
};
// updateData();


const deleteData = async () => {
    const products = mongooes.model('products', productsSchema);
    let data = await products.deleteOne({ name: "iphone 17" });
    console.log(data);

};
// deleteData();


const findData = async () => {
    const products = mongooes.model('products', productsSchema);
    let data = await products.find({ });
    console.log(data);

};
findData();
    


    

   

  



     



// main();