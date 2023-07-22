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
exports.updateIdea =(req,res)=>{
    //need to read the id passed in the path

    // http://localhost:8080/ideaApp/v1/ideas/1
    const ideaId = req.params.id;

    //if the idea is present - modify else retrun
    if(ideas[ideaId]){
        ideas[ideaId] = req.body;
        res.status(200).send(ideas[ideaId]);
    }else{
        res.status(400).send({
            message : "idea id passed was not correct"
        })
    }
}
// delete idea 

exports.deleteIdea = (req,res)=>{
    //check if present - yes delete, no return err message
    if(ideas[req.params.id]){
        delete ideas[req.params.id];
        res.status(200).send({
            message :"successfully deleted"
        })
    }else{
        res.status(400).send({
            message: "wrong idea id"
        })
    }
}
