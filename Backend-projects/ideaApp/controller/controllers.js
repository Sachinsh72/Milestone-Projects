const ideas = require("../model/userModel")
// search idea

exports.fetchallidea = (req,res)=>{
    res.status(200).send(ideas);
}

// create idea 

exports.createIdea =(req,res)=>{
    //read the request body

    //need to generate the next idea id

    //save it in the list of existing id

    //return the response
}

// update idea 

// delete idea 