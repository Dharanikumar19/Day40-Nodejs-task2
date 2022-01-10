const fs = require('fs');
const path = require('path');
const express = require('express')
const app = express();


app.get("/create", (req,res) =>{
var date = new Date();
var currentTime = date.getTime();
var timestamp = currentTime.toString();
var dateAndTime = `${date.getDate()}-${(date.getMonth()+1)}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}`;
var finalTime = (`${dateAndTime} ${".txt"}`);
  fs.writeFile(`./textfiles/${finalTime}`, timestamp, function (err){
    if(err) throw err;
    console.log("file created succesfully")
})
})


app.get("/files", (req,res) =>{
    fs.readdir("./textfiles", function(err, files) {
        if(err) throw err;
        res.json({files})
        console.log(files)
    })
})

app.listen(3000)
