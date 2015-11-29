/**
 * Created by pjpandey on 11/29/2015.
 */
'use strict';

var Tweet = require('../models/Tweet');

module.exports = function(stream, io){
  // got tweet
  stream.on('data', function( data) {
    console.log('got tweet !!!!!!!!!!!!!! yey');
    // Construct a new tweet object
    if(data.user) {
        var tweet = {
            twid: data.id,
            active: false,
            author: data.user.name,
            avatar: data.user.profile_image_url,
            body: data.text,
            date: data.created_at,
            screenname: data.user.screen_name
        };

        // Create a new model instance with our object
        var tweetEntry = new Tweet(tweet);

        // Save 'er to the database
        tweetEntry.save(function(err) {
            if (!err) {
                io.emit('tweet', tweet);
            }
        });
    }

  });

  stream.on('error', function(err) {
     console.log('got and error ...May be extensive use !!');
      console.log(err);
  });
};