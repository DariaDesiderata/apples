var express = require("express");
var router = express.Router();
var queries = require("../data/queries");

/* GET users listing. */
router.get("/", function(request, response) {
    queries.getBooks().then(function(books){
        response.render("books", {books});
    })
});

module.exports = router;
