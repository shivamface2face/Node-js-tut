// console.log('shivam');
const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname, 'crud');
const filepath = `${dirpath}/apple.txt`;

// create file


// fs.writeFileSync(filepath, 'shivam is here');


//  read file 

// fs.readFile(filepath, 'utf8',(err, data) => {
//     console.log(data);
// })


// update file

// fs.appendFile(filepath, 'how good u are', (err) => {
//     if (!err) {
//         console.log('file updated');
//     }
// })

// rename file

// fs.rename(filepath, `${dirpath}/app.txt`, (err) => {
//     if (!err) {
//         console.log('renamed file');
//      }
//  })

// delte file

fs.unlinkSync(`${dirpath}/app.txt`);



