var app = angular.module("itunesApp", []);

app.factory("itunesData", function($http, $q) {
    var service = {};
    var baseUrl = "https://itunes.apple.com/search?term=";
    var url = '';
    var searchTerm = '';
    service.data = {};
    service.error = false;

    service.results = function() {
        return service.data.results;
    }

    var makeUrl = function() {
        url = baseUrl + searchTerm + "&callback=JSON_CALLBACK"; //the JSON_CALLBACK value is found in the ang documentation online 
        //the &callback= can be found on the itunes api documentation
        return url;
    };

    service.setSearch = function(s) {
        searchTerm = s;
        makeUrl();
    };

    service.callItunes = function() {
        var deffer = $q.defer();
        console.log('$q: ' , $q);
        $http({
            url: url,
            method: "jsonp",
        }).then(function(response) {
            service.data = response.data;
            deffer.resolve(); //defer has a method that
        }), (function(data) {
            service.data = data;
            service.error = true;
            deffer.reject();
        });
        console.log("defer.promise: ", deffer.promise, "deffer:", deffer);
        return deffer.promise;
    }
    return service;
});

app.controller('ioController', function(itunesData) {
    self = this;

    self.results = itunesData.results;

    this.updateSearch = function() {
        itunesData.setSearch(this.searchTerm);
    };

    this.searchItunes = function() {
        this.updateSearch();
        itunesData.callItunes()
            .then(function() {}, function() {
                console.log(self.data);
            });
    };
});