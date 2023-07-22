const express = require("express");

const app = express();

app.use(express.json())

app.use(middleware);

function middleware(req,res,next){
    console.log('Inside the middleware i created');
    next(); // it will pass on the channel to next step
};

require("./routes/router")(app);

app.listen(8080,()=>{
    console.log("Server started");
})