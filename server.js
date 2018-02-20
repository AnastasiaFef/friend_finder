// 2. Your `server.js` file should require the basic npm packages 
// we've used in class: `express`, `body-parser` and `path`.

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// require('./app/routing/apiRoutes.js')(app);
// require('./app/routing/htmlRoutes.html')(app);

app.listen(PORT, function(){
    console.log('App listens on PORT: ', PORT);
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './app/public/home.html'));
})