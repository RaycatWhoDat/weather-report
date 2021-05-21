'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const weather = require('./weather.json');

app.use('/', express.static('public'));

app.get('/weather/:zipCode', (req, res) => {
  const { zipCode } = req.params || {};
  const localWeather = weather[zipCode] || {};

  if (!Object.keys(localWeather).length) {
    console.warn(`Failed to retrieve weather for ${zipCode}.`);
  }
  
  return res.send(localWeather);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}.`);
});
