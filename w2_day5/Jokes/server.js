const express = require("express");

const app = express()

// middleware=json
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
require('./config/mongoose.config')

const jokeRoutes = require('./routes/jokes.route')
jokeRoutes(app)
//require('./routes/jokes.route')(app)



// run the server

app.listen(8000, ()=>{console.log( "server is running on port 8000");})