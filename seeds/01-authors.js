exports.seed = function(knex, Promise) {
    return knex("author").del()
        .then(function(){
            return knex("author").insert([{
                name: "Kyle"
            },{
                name: "Elana"
            },{
                name: "Isaac"
            }]);
        });
};
