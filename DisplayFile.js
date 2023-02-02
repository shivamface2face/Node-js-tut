
const fs = require('fs');

// fs.writeFileSync('shivam.txt', "hey hows u");
const path = require('path');

const pathdir = path.join(__dirname, 'Files');
console.log(pathdir);

// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(pathdir+`/hello ${i}.txt`, "simple one");
// }

fs.readdir(pathdir, (err, Files) => {
    Files.forEach((iteam) => {
        console.log(iteam);
    })
})

