const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port=process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.get("/",(req,res)=>{
    res.send({message:"Tere samajh se bahar hai"});
});

app.listen(port, function (err, serve) {
    if (err) {
        console.log("Error in serve");
    }
    else {
        console.log("App is running successfully.");
    }
})