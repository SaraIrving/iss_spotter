/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');
const ipURL = 'https://api.ipify.org/?format=json';

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request(ipURL, (error, response, body) => {
    
    console.log("IP = ", ipAddress);
    if (error) {
      return callback(error, null);
    }
    
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const ipAddress = JSON.parse(body).ip;
    callback(null, ipAddress);
  });

};


const fetchCoordsByIp = function(ip, callback) {
  request(`https://ipvigilante.com/json/${ip}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
      return;
    }
    const { latitude, longitude } = JSON.parse(body).data;
    callback(null, { latitude, longitude});
  });
};

module.exports = { fetchMyIP, fetchCoordsByIp };
