
  exports.up = knex=> knex.schema.createTable('posts', table=>{
    table.increments('id')
    table.text('value')
    table.text('userName').notNullable()
    table.timestamp('createdAt').defaultTo(knex.fn.now())
    table.timestamp('updatedAt').defaultTo(knex.fn.now())

})

exports.down = knex => knex.schema.dropTable('posts')
