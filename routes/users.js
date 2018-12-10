const express = require('express');
const fs = require('fs');
const router = express.Router();
let data = require('./mockdata')


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(data);
});

router.post('/', (req, res, next) => {
  const { name, location } = req.body;
  // console.log('===============>', data.users.push({ id: 3, name, location }));
  data.users.push({ id: 3, name, location });
  console.log('===============>', __dirname);
  // fs.writeFileSync(`${__dirname}/test.json`, JSON.stringify(data));
  // let test = fs.readFileSync(`${__dirname}/test.json`);
  // console.log('===============>', JSON.parse(test));
  res.json(data.users);
})





module.exports = router;
