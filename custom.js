var app = angular.module('App', []);
app.controller('Controller', $scope => {
    $scope.showFirst = false;
    $scope.showLast = false;
    $scope.textFirst = "Göster";
    $scope.textLast = "Göster";
    $scope.toggleFirst = () => {
        $scope.showFirst = !$scope.showFirst;
        if ($scope.textFirst === "Göster"){
            $scope.textFirst = "Gizle";
        }
        else
        {
            $scope.textFirst = "Göster";
        }
    }
    $scope.toggleLast = () => {
        $scope.showLast = !$scope.showLast;
        if ($scope.textLast === "Göster"){
            $scope.textLast = "Gizle";
        }
        else
        {
            $scope.textLast = "Göster";
        }
    }
});