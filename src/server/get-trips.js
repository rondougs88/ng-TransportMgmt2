
var dbData = require('./db-data.js').dbData;

module.exports = {
    getTrips: function (req, res) {
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
    }
  };

// export function getTrips(req, res) {

//     const trips = dbData;

//     const trip = dbData.find(data => {
//         return ( data.source === 2 && data.destination === 5);
//     });

//     res.status(200).json(
//         trip
//     //     {
//     //     'id': course.id,
//     //     'url': course.url,
//     //     'description': course.description
//     // }
// );
// }
