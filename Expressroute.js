
// console.log("shivam");
const express = require('express');
const app = express();

app.get('', (req, resp) => {
    resp.send("hey this is home page");
})

app.get('/about', (req, resp) => {
    resp.send("hey this is about page");
})

app.get('/contact', (req, resp) => {
    resp.send({
        name: "shivam",
        email:"shivam@gmail.com"
    });
})


app.listen(3000);