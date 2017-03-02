exports.up = function(knex, Promise) {
    return knex.schema.createTable("author", function(author){
        author.increments();
        author.string("name");
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("author");
};
