/**
 * Created by pjpandey on 11/29/2015.
 */
'use strict';

angular.module('core').
    factory('tweetQuery', function ($resource) {
        return $resource('api/tweets', {}, {
            query: { method: 'GET', params: {}, isArray: true }
        });
});
