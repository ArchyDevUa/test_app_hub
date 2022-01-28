module.exports = {
    client: 'mysql2',
    connection:{
        host: 'localhost',
        user: 'user',
        password : 'password',
        database: 'TutorialDB',
        charset: 'utf8'
    },
    migrations: {
        directory: `./migrations`
      },
      seeds: {
        directory: './seeds'
      }
}