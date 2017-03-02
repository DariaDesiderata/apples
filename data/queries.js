var database = require("../data/connection");

module.exports = {
    getBooks,
    getBook,
    addBook
};

function getBooks(){
    return database("book").select("*");
}

function getBook(id){
    return database("book").select("*").where("id", id);
}
function addBook(book){
    return database("book").insert(book);
}
