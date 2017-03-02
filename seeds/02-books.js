exports.seed = function(knex, Promise) {
    return knex("book").del()
        .then(function(){
            return knex("author").select("id");
        }).then(function(authorIds){
            return knex("book").insert([{
                title: "News",
                author_id: authorIds[0].id
            },{
                title: "Music",
                author_id: authorIds[0].id
            }]);
        });
};

