app.controller('AppsettingsCtrl', ['appconfig','$scope',function(appconfig,$scope) {
  $scope.project = {
    server: appconfig.SERVER,
    port:appconfig.PORT
  };
  $scope.saveSetting = function(){
    appconfig.SERVER = $scope.project.server;
    appconfig.PORT = $scope.project.port;
    console.log("appconfig wrotes");
  }
  console.log(appconfig);
}]);