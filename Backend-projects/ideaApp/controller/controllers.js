const ideas = require("../model/userModel")
// search idea

exports.fetchallidea = (req,res)=>{
    res.status(200).send(ideas);
}

let idCount = 1;

// create idea 

exports.createIdea =(req,res)=>{
    //read the request body
    const idea = req.body;
    //need to generate the next idea id
    idea.id = ++idCount;
    //save it in the list of existing id
    ideas[idCount] = idea;
    //return the response
    res.status(200).send(ideas[idCount]);
}

// update idea 

// delete idea 