const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDb Server');
    const db = client.db('TodoApp');
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b3a0f5a17776663ba4259c3')
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Customers').findOneAndUpdate({
        _id: new ObjectID('5b3af5c0316bfa2a5a20b6bc')
    }, {
        $set: {
            address: 'Udupi, Karnataka'
        },
        $inc:{
            latitude : -1,
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

    // client.close();
});