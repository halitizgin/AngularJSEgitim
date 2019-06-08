var app = angular.module('App', []);
app.controller('Controller', $scope => {
    $scope.kisiler = [
        { isim: 'Halit', konu: 'JS' }, 
        { isim: 'Yasin', konu: 'PHP' }, 
        { isim: 'Burak', konu: 'Arduino' }, 
        { isim: 'Mert', konu: 'Unity' },
        { isim: 'Ali', konu: 'JS' }, 
        { isim: 'Veli', konu: 'PHP' }, 
        { isim: 'Mehmet', konu: 'Arduino' }, 
        { isim: 'Ahmet', konu: 'Unity' }
    ];
    $scope.order = 'isim';
    $scope.reverse = false;

    $scope.isim = () => {
        $scope.order = 'isim';
        $scope.reverse = !$scope.reverse;
    }

    $scope.konu = () => {
        $scope.order = 'konu';
        $scope.reverse = !$scope.reverse;
    }
});