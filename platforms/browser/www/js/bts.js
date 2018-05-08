app.controller('BtsCtrl', function($http,$scope,appconfig) {
  var imagePath = 'img/logo_nontext.png',
  dummybts = [];
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
      callback(dummytickets);  
    })
  }
  var _SERVER = appconfig.SERVER+':'+appconfig.PORT;
    loadData('http://'+_SERVER+'/bts',function(out){
      $scope.bts = out;
    });
  $scope.doAction = function(event){
    console.log("Hehe");
  }
})
