const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')
  db.collection('Users').findOneAndUpdate(
    { _id: new ObjectID('5c09eff5c18dab6f5cbb0119') },
    { $set: { name: 'thanh test' } },
    { returnOriginal: false },
  ).then(result => {
    console.log('===============>', result);
  })



  client.close();
});
