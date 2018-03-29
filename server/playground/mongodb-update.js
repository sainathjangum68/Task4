
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://nodemongo:node2018@ds121189.mlab.com:21189/nodemongo',
  (err,client)=>{
  if(err){
    return console.log(err);
  }
  console.log('connected to MongoDB server');
  const db=client.db('nodemongo');
  
  
  db.collection('articleModel').findOneAndUpdate({
    _id:new ObjectID("5abcebb7207a3f4f9abe060b")
  },{
    $set:{
      title:"articleReader"
    }

  }).then((result)=>{
    console.log("==sf"+JSON.stringify(result));
    
  },(err)=>{
    console.log("===>"+err);
  });
  
});