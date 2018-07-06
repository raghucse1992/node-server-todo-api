const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

Todo.remove().then((result)=>{
    console.log(result);
});

//remove by conditional query
Todo.findOneAndRemove({_id:'5b3ee8fc316bfa2a5a2113b9'}).then((doc)=>{
    console.log(doc);
})

//remove by passing id
Todo.findByIdAndRemove('5b3ee8fc316bfa2a5a2113b9').then((doc)=>{
    console.log(doc);
})