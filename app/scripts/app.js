'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).
directive('cmpComposerPanel', function (composerService){
    return {
      templateUrl: 'views/templates/composers.html',
      restrict: 'E',
      scope: {},
      link: function($scope) {
          $scope.composer = {};
          $scope.composerList = composerService.getCompList();
          $scope.addComposer = function() {
              composerService.saveComposer($scope.composer);
              $scope.composer = {};
          };
      }
    };
}).
controller('composerController', function($scope, composerService){
    $scope.answerObj=composerService;
    console.log($scope.answerObj.answer);
}).        
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

console.log('app');
