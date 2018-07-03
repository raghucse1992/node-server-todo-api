const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=> {
    if(err){
     return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDb Server');
    const db = client.db('TodoApp');
    //deleteMany
    // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });
    //db.collection('Customers').deleteMany({firstName:'posh'});
    db.collection('Customers').findOneAndDelete({_id:new ObjectID("5b3a127b17776663ba425c03")}).then((result)=>{
        console.log(JSON.stringify(result,undefined,2))
    });
   // client.close();
});