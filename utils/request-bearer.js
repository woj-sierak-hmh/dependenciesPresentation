const http = require('https');

const postData = "grant_type=client_credentials";

const TEMP_CONSUMER_KEY = process.env.CONSUMER_KEY;
const TEMP_CONSUMER_SECRET = process.env.CONSUMER_SECRET;

const bearerTokenCredentials = `${TEMP_CONSUMER_KEY}:${TEMP_CONSUMER_SECRET}`;

const tokenCredentials = Buffer.from(bearerTokenCredentials).toString('base64');

console.log(tokenCredentials);

const opts = {
  host: 'api.twitter.com',
  port: '443',
  path: '/oauth2/token',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Content-Length': Buffer.byteLength(postData),
    'Authorization': `Basic ${tokenCredentials}`
  }
};

const postReq = http.request(opts, res => {
  res.setEncoding('utf8');
  res.on('data', chunk => {
    console.log('Response-->', chunk);
  })
});

postReq.on('error', err => {
  console.error('Oops, error-->', err);
})

postReq.write(postData);
postReq.end();