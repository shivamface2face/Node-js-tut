const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
const publicPath = path.join(__dirname, 'public');

app.get('/profile', (req, resp) => {
    const user = {
        name: "shivam",
        email: "shivamfacejee@gmail.com",
        skil:['javascript','react','java']
    }
    resp.render('profile', { user });
})
app.listen(3000);