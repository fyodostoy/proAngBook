angular.module('myApp').
    controller('composerController', function($scope, composerService){
        $scope.answerObj=composerService;
        console.log('controller: ' );
        console.log($scope.answerObj);
    });