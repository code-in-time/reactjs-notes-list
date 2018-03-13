/**
 * This is simple Node server
 * using https://stormpath.com/blog/tutorial-build-rest-api-mobile-apps-using-node-js
 * to run it use node server.js
 */

const express = require('express');

const app = express();

app.get('/notes', (req, res) => {
  res.json({
    notes: 'This is your notebook. Edit this to start saving your notes!',
  });
});

app.get('/notes1', (req, res) => {
  res.json({
    notes1: 'This is your notebook. Edit this to start saving your notes!',
  });
});

app.get('/notes2', (req, res) => {
  res.json({
    notes2: 'This is your notebook. Edit this to start saving your notes!',
  });
});

app.listen(3001);
