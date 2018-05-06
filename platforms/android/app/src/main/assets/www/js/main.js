
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
    .when("/test",{templateUrl:"pages/test.html"});
}]);
app.config(['$httpProvider', function($httpProvider) {
  
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
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
  