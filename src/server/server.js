// var tools = require('./get-trips.js');
var dbData = require('./db-data.js').dbData;
// var dbBookedTrips = require('./db-bookedtrips.js').bookedtrips;

// const getTrips = tools.getTrips;

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

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

app.route('/api/trips/:source/:destination').get((req, res) => {
  const trips = dbData;

  const source = parseInt(req.params['source']);
  const destination = parseInt(req.params['destination']);

  const trip = trips.filter(data => {
    return (data.source === source && data.destination === destination);
  });
  res.status(200).json(
    trip
  );
});

app.use(bodyParser.json());

app.route('/api/savebooking').post((req, res) => {
  // const bookedtrips = dbBookedTrips;
  const bookedTrip = req.body;

  // const source = parseInt(req.params['source']);
  // const destination = parseInt(req.params['destination']);

  // const trip = trips.filter(data => {
  //     return ( data.source === source && data.destination === destination);
  // });

  // -------------------------------------------
  fs.readFile("db-bookedtrips.json", "utf8", function (err, data) {
    if (err)
      return next(err);

    var allData;
    try {
      allData = JSON.parse(data);
    } catch (err) {
      return next(err);
    }

    // find index of element in allData
    // var i = allData.reduce(function(iRes, e, iCurr) {
    //      return (e.id == userData.id) ? iCurr : iRes
    // }, -1);

    // if (i == -1 && (operation == 'update' || operation == 'delete'))
    //     return next(new Error(operation + ': Bad id'));


    // if (operation == 'update') 
    //     allData[i] = userData;

    // if (operation == 'delete') 
    //     allData.splice(i, 1);

    // if (operation == 'insert') 
    allData.push(bookedTrip);

    fs.writeFile("db-bookedtrips.json", JSON.stringify(allData), 'utf8', function (err) {
      if (err)
        return next(err);

      res.end();
    })
  }); // end of readFile
  // -------------------------------------------


  res.send(200).send(bookedTrip);
});

app.listen(8010, () => {
  console.log('Server started at port 8010!');
});