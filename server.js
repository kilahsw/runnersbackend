//enviromental variable imports//

//environment 
require("dotenv").config();
const { PORT = 3000, NODE_ENV = "development" } = process.env;

//mongo
const mongoose = require("./db/connection");

//cors
const cors = require("cors");
const corsOptions = require("./configs/cors.js");

//express
const express = require("express");
const app = express();

//morgan
const morgan = require("morgan");

//misc
const runnerRouter = require('./controllers/runner.js')


const shoeRouter = require('./controllers/shoes.js')


//middleware
app.use(express.json());
app.use(morgan("tiny")); //logging
app.use(cors());

//routes and routers
app.get("/", (req, res) => {
    res.json({ hello: "Hello world" });
});

//Runner routes to send to run router
app.use("/runners", runnerRouter)
app.use("/shoes", shoeRouter)

//Listener
app.listen(PORT, () => {
    console.log(`You are listening on port ${PORT}`);
});
