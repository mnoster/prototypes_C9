var app = angular.module('sgtApp', []);

app.provider('sgtData', function () {
    console.log("provider");
    this.self = this;
    var api_url = "http://s-apis.learningfuze.com/sgt/get";
    this.$get = function ($http, $q, $log) {
        console.log("$get");
        return {
            callApi: function () {
                var data = $.param({'api_key': 'k487InnY4f'});
                var defer = $q.defer();
                $http({
                    url: api_url,
                    method: "POST",
                    data: data,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function success(response) {
                    console.log('success response.data: ', response.data.data);
                    defer.resolve(response)
                }), function error(response) {
                    $log.error("$http fail: ", response);
                    defer.reject("Error msg here");
                };
                return defer.promise;
            }
        }

    };


});

//Config your provider here to set the api_key and the api_url
// app.config(function ($httpProvider){
//    $httpProvider.defaults.headers.post =  {'Content-Type': 'application/x-www-form-urlencoded'};
//     // $httpProvider.defaults.
//
// });
//Include your service in the function parameter list along with any other services you may want to use
app.controller('ioController', function (sgtData, $scope) {
    //Create a variable to hold this, DO NOT use the same name you used in your provider
    var new_self = this;
    //Add an empty data object to your controller, make sure to call it 'data'
    $scope.data = {};
    //Add a function called getData to your controller to call the SGT API
    this.getData = function (){
        console.log("get data fn");
        sgtData.callApi($scope)
            .then(function success(response){
                new_self.data = response.data;
                // console.log("this is $scope.data", $scope.data);
                // console.log("this is data : " , $scope.data);

            })
    };

});