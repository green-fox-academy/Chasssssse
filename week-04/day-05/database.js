'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/epam';

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the MongoDB server. Error:', err);
  }
  console.log('Connection established to ' + url);
  var posts = [
    {
      "id": 25,
      "title": "Does anyone know JavaScript?",
      "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "timestamp": 1505399272955,
      "score": 791,
      "owner": null,
      "vote": 1
    },
    {
      "id": 27,
      "title": "What the hell is software develop?",
      "href": "https://en.wikipedia.org/wiki/Software_developer",
      "timestamp": 1505399272955,
      "score": 567,
      "owner": null,
      "vote": -1
    },
    {
      "id": 29,
      "title": "TGIF!!!",
      "href": "http://www.lovethispic.com/image/212434/thank-god-its-friday",
      "timestamp": 1505399272955,
      "score": 2232,
      "owner": "Chase",
      "vote": -1
    },
    {
      "id": 30,
      "title": "Big foodie into take aways",
      "href": "http://waimai.meituan.com/",
      "timestamp": 1505404999126,
      "score": 764,
      "owner": "Chase",
      "vote": 0
    },
    {
      "id": 31,
      "title": "JCrew Denim",
      "href": "https://www.jcrew.com/cn/mens_category/Denim.jsp?sidecar=true",
      "timestamp": 1505404999126,
      "score": 1252,
      "owner": "Chase",
      "vote": 0
    },         
    ]

  var collection = db.collection('reddit');
  collection.remove();
  collection.insert(posts);
  
  collection.find({'id': 29}).toArray(function(err, result) {
    if (err) throw err;
    else console.log(result);
  });

  db.close();
});