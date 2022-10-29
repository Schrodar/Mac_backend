const app = require('./index.js');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require("path")
const express = require("express")


dotenv.config({path: './config.env' });
const port = process.env.PORT || 3000;

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
    )

mongoose.connect(DB,{

}).then(()=> console.log("it worked"))
.catch((err) =>  console.log(err))

app.listen(port, ()=> {
    console.log(`apps runs on port ${port}`);
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, './frontend/build')))
    console.log("in prod")
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, './', 'frontend', 'build', 'index.html')));
    
}