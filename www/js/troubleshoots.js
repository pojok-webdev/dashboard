app.controller('TroubleshootCtrl',  function($http,$scope,appconfig) {
    var imagePath = 'img/logo_nontext.png',
    dummysales = [];
    $scope.widebuttonstyle = {
      "min-width":"500px"
    }
    $scope.swipeTab = function(selectedtab){
      console.log("Geser ",selectedtab);
      $scope.apptab.selected = selectedtab;
    }
    loadData = function(_url,callback){
      var _scope;
      $http({
        method:'GET',
        url:_url,
      })
      .then(function(res){
        console.log("Res",res);
        callback(res.data);  
      },function(err){
        console.log("Err",err);
        callback(dummytroubleshoots);  
      })
    }
    var _SERVER = appconfig.SERVER+':'+appconfig.PORT;
      loadData('http://'+_SERVER+'/troubleshootdaily',function(out){
        $scope.daily = out;
      });
      loadData('http://'+_SERVER+'/troubleshootweekly',function(out){
        $scope.weekly = out;
      });
      loadData('http://'+_SERVER+'/troubleshootmonthly',function(out){
        $scope.monthly = out;
      });
      loadData('http://'+_SERVER+'/troubleshootquarterly',function(out){
        $scope.quarterly = out;
      });
      loadData('http://'+_SERVER+'/troubleshootmonthly',function(out){
        $scope.monthly = out;
      });
      loadData('http://'+_SERVER+'/troubleshootyearly',function(out){
        $scope.yearly = out;
      });
    $scope.doAction = function(event){
      console.log("Hehe");
    }
  })
  