const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let app = express();
let date = new Date();
let port = process.env.port || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<meta charset="UTF-8">');
    res.write('<title>API SERVER</title>');
    res.write('<body style="background-color: black;"></body>');
    res.write('<h1 style="color: gray; text-align: center; margin: 50px;"> Services are active... </h1>');
    res.write('<div style="text-align: center; margin: 50px;"><img width="700px" height="350px" src="img/index.gif" /></div>');
    res.end();
});


/********** Routers **********/
require('./api/routes/UsersRoutes')(app);
require('./api/routes/FollowsRoutes')(app);
require('./api/routes/PostsRoutes')(app);
require('./api/routes/LikesRoutes')(app);
require('./api/routes/CommentsRoutes')(app);

app.listen(port, () => {
    console.log(date.toLocaleString() + ' : Cafe Ketab Restful API server started on port ' + port);
});