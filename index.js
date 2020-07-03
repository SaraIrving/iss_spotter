// index.js
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIp } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIp('172.103.226.92', (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned Coords are:", coords);
// });



// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };
// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
  
//   console.log("It worked! The returned flyover times are: ", passTimes);
// })


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  makePassTimesLegible(passTimes);
});

//passTimes is an array of objects 
//need to filter the time and date to a more readable form 
//put this logic in a function so you can call it within the flow
//first loop through the 5 responses 

const makePassTimesLegible = function(passTimes) {
  for (const object of passTimes) {
    let time = object.duration;
    let date = new Date(object.risetime * 1000)
    console.log('Next pass at ' + date.toString() + ' for ' + time + ' seconds.')
  }
}