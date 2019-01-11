const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const registerRoute = require('./controllers');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", registerRoute)

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  let error = {
    error: {
      message: err.message,
      httpCode: err.httpCode || err.code,
      name: err.name || ''
    }
  };

  res.json(error);
});

const PORT = process.env.PORT || '3000';
app.listen(PORT, () => console.log("server run port ", PORT));
