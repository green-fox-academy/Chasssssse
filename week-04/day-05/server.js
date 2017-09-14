'use strict'
var mongodb = require('mongodb');
var bodyParser = require('body-Parser');
// var MongoClient = mongodb.MongoClient;
// var url = 'mongodb://localhost:27017/epam';

var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/hello', function(req, res) {
    var response = 'Hello World!';
    res.send(response);
});

app.get('/posts', function(req, res) {
    var response; 
    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/epam'; 
    MongoClient.connect(url, function (err, db) {
        var collection = db.collection('reddit');
        collection.find({}).toArray(function(err, result) {
            if (err) throw err;
            else {
                response = result;
                var obj = {posts: result};
                res.json(obj); 
            }
        });
        db.close();
    });  
    
});

app.use(bodyParser.json());
app.post('/posts', function(req, res) {
    var response; 
    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/epam'; 
    MongoClient.connect(url, function (err, db) {
        var collection = db.collection('reddit');
        collection.insert(createNewPost(req.body));
        response = createNewPost(req.body);
        db.close();
        res.send(response);
    });  
    
    
});

app.put('/posts/:id/upvote', function(req, res) {
    var _id = parseInt(req.params.id);
    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/epam'; 
    MongoClient.connect(url, function (err, db) {
        var collection = db.collection('reddit');
        var score;
        
        collection.findOne({'id': _id}, function(err, result) {
            result.score++;
            collection.update({'id':_id}, {$set: {'score': result.score}}, function(err, object) {
                if (err){}
                else{
                    db.close();
                }
            });
            res.send();
        });   
    }); 
})

app.put('/posts/:id/downvote', function(req, res) {
    var _id = parseInt(req.params.id);
    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/epam'; 
    MongoClient.connect(url, function (err, db) {
        var collection = db.collection('reddit');
        var score;
        
        collection.findOne({'id': _id}, function(err, result) {
            result.score--;
            collection.update({'id':_id}, {$set: {'score': result.score}}, function(err, object) {
                if (err) {}
                else {
                    db.close();
                }
            });
            res.send();
        });   
    }); 
})

app.delete('/posts/:id', function(req, res) {
    var _id = parseInt(req.params.id);
    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/epam'; 
    MongoClient.connect(url, function (err, db) {
        var collection = db.collection('reddit');        
        collection.remove({'id': _id});
        db.close();
        res.send();
    });        
})

app.put('/posts/:id', function(req, res) {
    var _id = parseInt(req.params.id);
    console.log(req.params.id);
    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/epam'; 
    MongoClient.connect(url, function (err, db) {
        var collection = db.collection('reddit');
        collection.update({'id':_id}, {$set: {'title': req.body.title}});
        collection.update({'id':_id}, {$set: {'href': req.body.href}}, function(err, obj) {
            if (err) {}
            else {
                db.close();
            }
        });
        res.send();
    });  
    
    
});


app.listen(3000, function() {
    console.log('Sever established');
});


function createNewPost(info) {
    var newPost = {};
    var time = new Date();
    newPost.title = info.title;
    newPost.href = info.href;
    newPost.timestamp = time.getTime();
    newPost.owner = null;
    newPost.id = 1;
    newPost.score = 0;
    newPost.vote = 0;
    return newPost;
}

// function findMaxID() {
//     var mongodb = require('mongodb');
//     var MongoClient = mongodb.MongoClient;
//     var url = 'mongodb://localhost:27017/epam';
//     MongoClient.connect(url, function(err, db) {
//         var collection = db.collection('reddit');
//         var id_array = [];
//         collection.find({}, {'_id': 0, 'id': 1}).toArray(function(err, result) {
//             if (err) {}
//             else {
//                 result.forEach(function(element, index) {
//                     id_array.push(element.id);
//                 });
//                 db.close();
//                 console.log(Math.max.apply(null, id_array));
//                 return Math.max.apply(null, id_array);
//             }
//         });
//     })
// }



