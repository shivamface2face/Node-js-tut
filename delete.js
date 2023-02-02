const dbCoonect = require('./MongoDb');

const deleteData = async () => {
    const db = await dbCoonect();

    const result = await db.deleteMany(
        { name: 'note-5' }
    );
    console.log(result);
}

deleteData();