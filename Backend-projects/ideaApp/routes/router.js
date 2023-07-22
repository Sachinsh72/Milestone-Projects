
const ideaController = require("../controller/controllers");

module.exports = (app) => {
    app.get("/ideaApp/v1/ideas",ideaController.fetchallidea)
}