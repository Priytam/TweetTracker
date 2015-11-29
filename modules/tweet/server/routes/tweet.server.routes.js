'use strict';

/**
 * Module dependencies.
 */
var  tweets = require('../controller/controller');

module.exports = function (app) {
    // Articles collection routes
    app.route('/api/tweets')
        .get(tweets.getSavedTweet);
};
