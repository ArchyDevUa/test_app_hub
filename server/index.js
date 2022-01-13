const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json({}));
app.use(express.urlencoded({
    extended : true
}))

const routes = require('./routes/index')(app)

app.set('port', process.env.PORT || 3001)

const server = app.listen(app.get('port'), 
    function(err){
        if(err) throw err;
        let message = 'Server is running on http://localhost:' + server.address().port;
        console.log(message);
    })
