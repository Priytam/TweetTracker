'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('users')
	.directive('timeline',function() {
    return {
        templateUrl:'/modules/users/directives/timeline.html',
        restrict: 'E',
        scope: {
            news: '='
        },
        replace: true,
        controller : function ($scope) {
            $scope.pushTags = function(tag) {
                $scope.selectedTags.push(tag);
            };
        }
    };
    });
