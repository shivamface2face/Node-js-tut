const dbConnect = require('./MongoDb')

const update =async () => {
    let db = await dbConnect();
    let res = await db.update(
        { name: 'note-5' }, {
        name: 'iphone11'
    }
    );
    
}

update();