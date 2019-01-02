const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  bearer_token: process.env.BEARER_TOKEN
});

/*
Number of dependencies:
$ npm ls --parseable | wc

Number of lines of code of the app and all dependencies:
$ find . -name '*.php' | xargs wc -l

List 

*/

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