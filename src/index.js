const express = require("express");
const route = require("./route/route.js");
const mongoose = require("mongoose");
const app = express();
const multer=require("multer")
app.use(multer().any())

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://cmchetan:Lk8rj5j01DdIvYyn@cluster0.qmqnj3v.mongodb.net/project5(productmanagement)",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
})