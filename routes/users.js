const express = require('express');
const fs = require('fs');
const router = express.Router();
let data = require('./mockdata');

const mockup = [
  { text: 'learn node js', completed: true, completedAt: Date.now() },
  { text: 'learn Vode js', completed: true, completedAt: Date.now() },
  { text: 'learn Rode js', completed: true, completedAt: Date.now() },
  { text: 'learn webpack', completed: true, completedAt: Date.now() },
  { text: 'learn babel core', completed: true, completedAt: Date.now() }
]


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(data);
});

router.post('/', (req, res, next) => {
  // console.log('===============>', data.users.push({ id: 3, name, location }));
  mockup.push(req.body);
  // fs.writeFileSync(`${__dirname}/test.json`, JSON.stringify(data));
  // let test = fs.readFileSync(`${__dirname}/test.json`);
  // console.log('===============>', JSON.parse(test));
  console.log('===============>', mockup);
  res.json(mockup);
})





module.exports = router;
