const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.get("/",(req,res)=>{
    res.send({message:"Smaroh is running"})
});

app.listen(3000, function (err, serve) {
    if (err) {
        console.log("Error in serve");
    }
    else {
        console.log("App is running successfully.")
    }
})