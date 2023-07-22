const express = require("express");

const app = express();

require("./routes/router")(app);

app.listen(8080,()=>{
    console.log("Server started");
})