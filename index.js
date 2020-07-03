// index.js
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIp } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  makePassTimesLegible(passTimes);
});


const makePassTimesLegible = function(passTimes) {
  for (const object of passTimes) {
    let time = object.duration;
    let date = new Date(object.risetime * 1000)
    console.log('Next pass at ' + date.toString() + ' for ' + time + ' seconds.')
  }
}