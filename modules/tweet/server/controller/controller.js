/**
 * Created by pjpandey on 11/29/2015.
 */
'use strict';
var  Tweet = require('../models/Tweet');

module.exports = {

  getSavedTweet : function(req, res) {
      console.log('I am here ');
    // Call static model method to get tweets in the db
    Tweet.getTweets(0,0, function(tweets) {
        // Render as JSON
        res.json(tweets);

    });
  },

  getActiveTweet : function(req, res) {
    // Fetch tweets by page via param
    Tweet.getTweets(req.params.page, req.params.skip, function(tweets) {
      // Render as JSON
      res.send(tweets);

    });
  }
};
