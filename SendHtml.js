const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');
console.log(publicPath);
// app.use(express.static(publicPath));

app.get('/about', (req, resp) => {
    resp.sendFile(`${publicPath}/about.html`);
})

app.get('/contact', (req, resp) => {
    resp.sendFile(`${publicPath}/contact.html`);
})

app.get('*', (req, resp) => {
    resp.sendFile(`${publicPath}/Error.html`);
})




app.listen(3000);