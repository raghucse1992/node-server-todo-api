const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=> {
    if(err){
     return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDb Server');
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false
    // },(err,result)=>{
    //     if(err){
    //         return Console.log('Unable to insert todo'+err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    //Insert document into collection user
    // db.collection('Users').insertOne({
    //     name:'Raghavendra',
    //     age:25,
    //     location:'Udupi'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert into Users');
    //     }
    //     console.log(JSON.stringify(result.ops));
    // })

    client.close();
});
