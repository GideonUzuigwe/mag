const express = require("express");
const app = express();
const router = require("./routes/blogRoute");
const dbURI = "mongodb+srv://userAccess:user123@cluster0.nodzpc5.mongodb.net/blogTuts?retryWrites=true&w=majority&appName=Cluster0";
const mongoose = require("mongoose");


//Middleware and Static files
app.use(router);
app.use(express.static("public"));

//Set the app view engine
app.set("view engine", "ejs");

//Connect to database
mongoose.connect(dbURI)
    .then((result) => {
        //Listens to port 3000
        app.listen(3000, console.log(`App is live at localhost:${3000}`));
    })
    .catch((err) => {
        console.log("Unable to connect to database", err)
    })



app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});