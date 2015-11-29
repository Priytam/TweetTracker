'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication', 'tweetQuery','$timeout',
  function ($scope, Authentication, tweetQuery,$timeout) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

      $scope.tweets = [];
      function dataCtrl() {
          (function tick() {
              tweetQuery.query(function(data){
                   console.log('.........' + data);
                   $scope.tweets = data;
                   console.log($scope.data);
                   $timeout(tick, 1000);
              });
          })();
      }
      dataCtrl();
  }
]);
