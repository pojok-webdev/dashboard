app.controller('AppsettingsCtrl', ['appconfig','$scope',function(appconfig,$scope) {
  $scope.project = {
    server: appconfig.SERVER,
    port:appconfig.PORT
  };
  $scope.saveSetting = function(){
    //app.constant('appconfig',{'SERVER':'192.168.0.117','PORT':'1946'});
    appconfig.SERVER = $scope.project.server;//'192.168.0.118';
    appconfig.PORT = $scope.project.port;//'1946';
    console.log("appconfig wrotes");
  }
  console.log(appconfig);
}]);