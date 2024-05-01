const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

router.get("/", (req, res) => {
    res.redirect("/blogs");
});

router.get("/blogs", (req, res) => {
    Blog.find().sort({ title: 1 })
        .then((result) => {
            res.render("blog", { title: "Uptodate Academy | Free Blog", blog: result });
        })
        .catch((err) => console.log(err));

});

//Get a specific blog when a user clicks on the url
router.get("/blogs/:id", (req, res) => {
    const params = req.params.id;
    Blog.findById(params)
        .then((result) => {
            Blog.find().sort({ title: 1 })
                .then((data) => {
                    res.render("read-blog", { title: result.title, blog: data, readData: result });
                }).catch((err) => console.log(err));

        })
        .catch((err) => {
            Blog.find().sort({ title: 1 })
                .then((data) => {
                    res.status(404).render("404", { title: "404", blog: data });
                }).catch((err) => console.log(err));
        });
});

//Get a all blogs from a single tag clicked
router.get("/blogs/search/:query", (req, res) => {
    const query = req.params.query;
    Blog.find({ tag: query })
        .then((result) => {
            Blog.find().sort({ title: 1 })
                .then((data) => {
                    res.render("search", { title: "Uptodate Academy | Free Blog", blog: data, searchResult: result, query });
                }).catch((err) => console.log(err));
        })
        .catch((err) => console.log(err))
});

router.get("/about-us", (req, res) => {
    res.render("about-us", { title: "Uptodate Academy | About Us" });
});


module.exports = router;