app.controller('SalesCtrl', function($http,$scope,appconfig) {
  var imagePath = 'img/logo_nontext.png';
  var sampledummysales = [
    { name: 'Amir', val: 0 },
    { name: 'Dwi', val: 0 },
    { name: 'Yudhi', val: 0 },
    { name: 'Dhita', val: 0 },
    { name: 'Aris', val: 0 },
    { name: 'Ayu', val: 0 },
    { name: 'Eka', val: 0 }
  ],
  dummysales = [];
  console.log("SERVER",appconfig.SERVER,"PORT",appconfig.PORT);
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
      callback(dummysales);  
    })
  }
  loadAllData = function(){
    var _SERVER = appconfig.SERVER+':'+appconfig.PORT;
    loadData('http://'+_SERVER+'/visits',function(out){
      $scope.visits = out;
    });
    loadData('http://'+_SERVER+'/offers',function(out){
      $scope.offers = out;
    });
    loadData('http://'+_SERVER+'/newfbs',function(out){
      $scope.newfbs = out;
    });
    loadData('http://'+_SERVER+'/sellings',function(out){
      $scope.sellings = out;
    });  
  }
  loadAllData();
  $scope.doAction = function(event){
    console.log("Hehe");
  }
  $scope.reload = function(event){
    console.log("Reload");
    loadAllData();
  }
})
