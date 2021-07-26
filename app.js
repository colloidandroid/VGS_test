require('dotenv').config();
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/post-feedback', function (req, res) {
  res.redirect(307, 'https://'+process.env.VAULT_ID+'.SANDBOX.verygoodproxy.com/post');
    });

app.post('/post', function (req, res) {
       dbConn.then(function(db) {
        delete req.body._id; // for safety reasons
         db.collection('feedbacks').insertOne(req.body);});
  res.send('Data received:\n' + JSON.stringify(req.body))
});

app.get('/post',  function(req, res) {
    dbConn.then(function(db) {
        db.collection('feedbacks').find({}).toArray().then(function(feedbacks) {
            res.status(200).json(feedbacks);
        });
    });
});

app.get('/post-tokens',function(req,res){
    res.sendFile(path.join(__dirname+'/public/tokens.html'));
});

app.post('/post-tokens-reveal',function(req,res){
  res.redirect(307, 'https://echo.apps.verygood.systems/post')
});


app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );
