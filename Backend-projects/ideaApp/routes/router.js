
const ideaController = require("../controller/controllers");

module.exports = (app) => {
    app.get("/ideaApp/v1/ideas",ideaController.fetchallidea);

    //post call
    app.post("/ideaApp/v1/ideas",ideaController.createIdea);

    //put call
    app.put("/ideaApp/v1/ideas/:id",ideaController.updateIdea);

    //delete call
    app.delete("/ideaApp/v1/ideas/:id",ideaController.deleteIdea);
}