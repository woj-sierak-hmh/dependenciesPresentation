/*
Number of dependencies (50):
$ npm ls --parseable | wc

Number of lines of code in the app and its all dependencies (50779):
$ find . -name '*.js' | xargs wc -l

List of licenses in all depencies of the project (6/7):
$ npx license-checker --summary
*/

const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  bearer_token: process.env.BEARER_TOKEN
});

async function getTweets(q) {
  const query = {
    q,
    count: 2,
    result_type: 'recent'
  };
  
  try {
    const res = await client.get('search/tweets.json', query);
    res.statuses.forEach(tweet => console.log(tweet.text));
  } catch (err) {
    console.log('Error getting tweets:', err);
  }
}

getTweets('#hmhco');