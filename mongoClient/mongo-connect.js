const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('===============>un Mongo DB server');
  }

  const db = client.db('TodoApp');
  db.collection('todos').findOneAndUpdate(
   
    { 
      _id: new ObjectID('5c1e4ae54bebfad3cf9395b4'),

    },
    { 
      $set: { 
        text: 'thanh test' 
      } 
    },
    { 
      returnOriginal: false 
    },
  ).then(result => {
    console.log('===============>', result);
  })
})

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//   if (err) {
//     return console.log('Unable to connect to MongoDB server');
//   }
//   console.log('Connected to MongoDB server');
//   const db = client.db('TodoApp')
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)
  // let data = [
  //   {
  //     name: 'test' + Date.now(),
  //     age: 25,
  //     location: 'Philadelphia'
  //   },
  //   {
  //     name: 'test' + Date.now(),
  //     age: 26,
  //     location: 'Philadelphia'
  //   },
  //   {
  //     name: 'test' + Date.now(),
  //     age: 27,
  //     location: 'Philadelphia'
  //   },

  // ]

  // db.collection('Users').insertMany(data, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }

  //   console.log(result.ops);
  // });

//   client.close();
// });
