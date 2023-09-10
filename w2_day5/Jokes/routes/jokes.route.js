const jokeController = require('../controllers/joke.controller')

module.exports = app => {
    app.get("/api/jokes", jokeController.findAllJokes),
    app.post("/api/jokes/new", jokeController.createJoke),
    app.get("/api/jokes/:id", jokeController.findOneJoke)
}
// ! go to server.js