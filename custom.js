var app = angular.module('App', []);
app.controller('Controller', $scope => {
    $scope.init = function(){
        console.log("Merhaba Kod Evreni");
    }
});