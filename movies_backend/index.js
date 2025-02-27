const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const movieRouter = require("./router/movies");
const userRouter = require("./router/user");

// Express Object
const app = express();
app.use(express.json());
app.use(cors());

// mongodb connection
mongoose
  .connect("mongodb://127.0.0.1:27017/movie-flics") 
  .then(() => {
    console.log("Conection to mongo Successfull");
  })
  .catch((err) => {
    console.log(err);
  });

// Movie request
app.use("/movies", movieRouter);

// user request
app.use("/user", userRouter);



app.listen(8001, () => {
  console.log("Server is up and running");
});
