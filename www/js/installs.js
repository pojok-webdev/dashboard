app.controller('InstallCtrl', function($http,$scope,appconfig) {
  var imagePath = 'img/logo_nontext.png',
  dummysales = [];
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
      callback(dummyinstalls);  
    })
  }
  var _SERVER = appconfig.SERVER+':'+appconfig.PORT;
    loadData('http://'+_SERVER+'/installdaily',function(out){
      $scope.daily = out;
    });
    loadData('http://'+_SERVER+'/installweekly',function(out){
      $scope.weekly = out;
    });
    loadData('http://'+_SERVER+'/installmonthly',function(out){
      $scope.monthly = out;
    });
    loadData('http://'+_SERVER+'/installquarterly',function(out){
      $scope.quarterly = out;
    });
    loadData('http://'+_SERVER+'/installmonthly',function(out){
      $scope.monthly = out;
    });
    loadData('http://'+_SERVER+'/installyearly',function(out){
      $scope.yearly = out;
    });
  $scope.doAction = function(event){
    console.log("Hehe");
  }
})
