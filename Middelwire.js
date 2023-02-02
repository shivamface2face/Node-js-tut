const express = require('express');
const path = require('path');

const app = express();

const reqFilters = (req, resp, next) => {

    if (!req.query.age) {
        resp.send("provide ur age");
    } else {
        next();
    }

    console.log("reqFilter");
}

app.use(reqFilters);

app.get('/', (req,resp) => {
    resp.send('hello world');
})
app.listen(3000);