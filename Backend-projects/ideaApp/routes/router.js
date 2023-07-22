
const ideaController = require("../controller/controllers");

module.exports = (app) => {
    app.get("/ideaApp/v1/ideas",ideaController.fetchallidea);

    //post call
    app.post("/ideaApp/v1/ideas",ideaController.createIdea);
}