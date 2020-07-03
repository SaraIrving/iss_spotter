const { fetchMyIP } = require('./iss_promised');
const { fetchCoordsByIp } = require('./iss_promised');
const { fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');

// fetchMyIP()
//   .then(fetchCoordsByIp)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body))
  
const makePassTimesLegible = function(passTimes) {
  for (const object of passTimes) {
    let time = object.duration;
    let date = new Date(object.risetime * 1000)
    console.log('Next pass at ' + date.toString() + ' for ' + time + ' seconds.')
  }
}

nextISSTimesForMyLocation()
  .then((flyoverTimes) => {
    makePassTimesLegible(flyoverTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });