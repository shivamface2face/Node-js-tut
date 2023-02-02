const dbCoonect = require('./MongoDb')

const insert = async () => {
    const db = await dbCoonect();
    const result = db.insert(
        
            [
                {
                name: "note-5",
                brand: 'vivo',
                    price: 2322
                },
               {
                name: "ote-5",
                brand: 'ivo',
                    price: 22 
                }
            ]
           
        
    )
    // console.log(db);
    // console.log("insert");
}

insert();