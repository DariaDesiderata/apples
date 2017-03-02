exports.up = function(knex, Promise) {
    return knex.schema.createTable("book", function(book){
        book.increments();
        book.string("title");
        book.integer("author_id").references("id").inTable("author");
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("book"); 
};
