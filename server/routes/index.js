const controller = require('../controller/postController')
module.exports = function(app){

    app.get('/posts',controller.posts);
    app.get('/posts/:id',controller.getPost)
    app.post('/posts',controller.create);
    app.put('/posts/:id',controller.update);
    app.delete('/posts/:id', controller.delete);
}