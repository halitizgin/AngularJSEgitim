var app = angular.module('App', []);
app.controller('Controller', $scope => {
    $scope.style = 'siyah';
    $scope.style1 = {
        'background-color': 'black', 
        'color': 'white'
    }
    $scope.style2 = {
        'background-color': 'gray', 
        'color': 'blue'
    }
});