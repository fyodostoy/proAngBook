'use strict';
angular.module('myApp').
service('composerService', function(){
            console.log('composer service loaded'); 
            var loadCompModel = function() {
                var model = {
                    composerList: localStorage['myApp.composerList'] ? 
                        JSON.parse(localStorage['myApp.composerList']) : [],
                    nextId: localStorage['myApp.nextId'] ?
                        parseInt(localStorage['myApp.nextId']) : 0
                };
                console.log('model');
                console.log(model);
                return model;
            };
            var compModel = loadCompModel();
            this.getCompList = function() {
                console.log('compModel.composerList');
                console.log(compModel.composerList);
                return compModel.composerList;
            };   
            this.saveComposer = function(compObj) {
                compModel.composerList.push(compObj);
                saveCompModel();
            };
            var saveCompModel = function() {
                localStorage['myApp.composerList'] = JSON.stringify(compModel.composerList);
            };
});