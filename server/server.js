//var express = require('express');
//var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {article} = require('./models/articleModel');
//var {customModel} = require('./models/customModel');

//var app = express();

//app.use(bodyParser.json());

// app.post('/sai', (req, res) => {
//   var art = new articleModel1({
//     text: req.body.text
//   });
// console.log(req.body);
//   art.save().then((doc) => {
//     res.send(doc);
//   }, (e) => {
//     res.status(400).send(e);
//   });
// });
 
// app.get('/sai',(req,res)=>{
// 	articleModel1.find().then(()=>{
// 		res.send({sai});
// 	},(e)=>{
// 		res.status(400).send(e);
// 	})
// });
var art = new article({
    title:"ArticleReader",
    tags:["Article","ReaderBook","LatestArticles"],
    body:"some body content",
    author:'sainath',
    creationdate:12-11-2011,
    updateDate:13-12-2012 
  });

  art.save().then((doc) => {
  	console.log(doc);
    
  }, (e) => {
    console.log(e);
  });
// app.listen(3001, () => {
//   console.log('Started on port 3000');
// });

// module.exports={app};