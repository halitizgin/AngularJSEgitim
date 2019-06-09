var app = angular.module('App', []);
app.controller('Controller', ($scope, $http, $httpParamSerializerJQLike) => {
    $http({
        method: "POST",
        url: "rest/api.php",
        data: $httpParamSerializerJQLike({
            param: 'Kod Evreni'
        }),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(function(response){
        alert(response.data);
    });
});