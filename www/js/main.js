
var app = angular.module("PadiDashboardMain", ["ngRoute","ngMaterial"]);
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    //$locationProvider.hashPrefix('!');
    $routeProvider
    .when("/",{templateUrl:"pages/main.html"})
    .when("/tickets",{templateUrl:"./pages/tickets.html",controller: 'AppCtrl'})
    .when("/installs",{templateUrl:"pages/installs.html"})
    .when("/sales",{templateUrl:"pages/sales.html"})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    .when("/troubleshoots",{templateUrl:"pages/troubleshoots.html"})
    .when("/bts",{templateUrl:"pages/bts.html"})
    .when("/surveys",{templateUrl:"pages/surveys.html"})
    .when("/test",{templateUrl:"pages/test.html"})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    .when("/appsettings",{templateUrl:"pages/appsettings.html"})
    .when("/surveyDetails/:period/:category",{templateUrl:"pages/surveys/detail.html"})
    ;
}]);
app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
app.constant('appconfig',{'SERVER':'192.168.0.117','PORT':'1945'});
app.controller("AppCtrl", function ($scope, $route, $routeParams, $location, $mdSidenav,$window) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.modulename = "";
    $scope.toggleLeft = buildToggler("left");
    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        };
    }
    $scope.showpage = function(location){
        $location.path(location);
        $scope.modulename = " ("+location+")";
    }
});