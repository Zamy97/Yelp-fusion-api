'use strict';

const yelp = require('yelp-fusion');

const client = yelp.client('Ttm9T3jW7ItGLfoEF1IaUztpCbCc5BVHFgzNjAbKgz2iyEP9JTBsjYJFxYz-HBux6r4GGROqZb8AWno1CvxmretUb7l7L79FUOByZGk9s2SX9kWEXF2X3BNPcuPlW3Yx');

client.search({
  term:'La Burrita',
  location: 'san francisco, ca',
  pritce: '1,2,3'
}).then(response => {
  console.log(response.jsonBody.businesses[0].price);
  console.log(response.jsonBody.businesses[0].name);
  console.log(response.jsonBody.businesses[0].location.display_address);

}).catch(e => {
  console.log(e);
});
