import express from "express";

const router = express.Router();

const Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  // bearer_token: process.env.TWITTER_BEARER_TOKEN
});
 

router.post("/newcommit", (req:express.Request, res:express.Response) => {
  if (!req.headers['x-hub-signature']) {
    res.send({error: 'Invalid Response'}).status(400)
    console.log('Invalid Response')
  } else {
    if (req.body.commits) {
      const commits = req.body.commits 
      const repository = req.body.repository
      const newTweet = `new commit: ${commits[0].message} \nrepository: ${repository.name} \n\n${repository.html_url}`
      client.post('statuses/update', {status: newTweet}, function(error:any, tweet:any) {
        if (!error) {
          console.log(tweet);
        } else {
          console.log(error)
        }
      });
      console.log(newTweet)
    } else {
      res.send({success: true}).status(200)
    }
  }
});

module.exports = router;
