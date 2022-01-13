
exports.seed = function(knex) {
    return knex('posts').del()
      .then(function () {
        return knex('posts').insert([
          {id:1,value:"Text of the post",userName:"user"},
          {id:2,value:"Text of the post",userName:"user"},
          {id:3,value:"Text of the post",userName:"user"}
        ]);
      });
  };
  