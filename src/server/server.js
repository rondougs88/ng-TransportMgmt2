// var tools = require('./get-trips.js');
var dbData = require('./db-data.js').dbData;

// const getTrips = tools.getTrips;

const express = require('express');

const app = express();

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.route('/api/trips').get((req, res) => {
  const trips = dbData;

  const trip = dbData.find(data => {
      return ( data.source === 2 && data.destination === 5);
  });
  res.status(200).json(
      trip
  //     {
  //     'id': course.id,
  //     'url': course.url,
  //     'description': course.description
  // }
);
});

app.listen(8010, () => {
    console.log('Server started at port 8010!');
  });