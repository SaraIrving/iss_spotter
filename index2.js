const { fetchMyIP } = require('./iss_promised');
const { fetchCoordsByIp } = require('./iss_promised');
const { fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');

fetchMyIP()
  .then(fetchCoordsByIp)
  .then(body => console.log(body));
  