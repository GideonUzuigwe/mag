const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    tag: {
        type: String,
        require: true
    },
    publishAt: {
        type: String,
        require: true
    },
    urlToImage: {
        type: String,
        require: true
    },
    sources: {
        type: String,
        require: true
    },
}, { timestamps: true });

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;