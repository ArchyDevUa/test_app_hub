const bookshelf = require('../bookshelf')

const Post = bookshelf.Model.extend({
    tableName: "posts"
})

module.exports = Post