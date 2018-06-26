const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=> {
    if(err){
     return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDb Server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find().toArray().then((data)=>{

    //     console.log('Todos');
    //     console.log(JSON.stringify(data,undefined,2));

    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });    
    
    //count of collection
    // db.collection('Todos').find({}).count().then((count)=>{
    //     console.log(`Number of users ${count}`);
    // },(err)=>{
    //     console.log('Unable to get the count');
    // });

    db.collection('Users').find({name:'Raghavendra'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    });

   // client.close();
});