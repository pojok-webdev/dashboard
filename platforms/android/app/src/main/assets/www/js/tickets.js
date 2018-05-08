app.controller('TicketCtrl', function($http,$scope,appconfig) {
  var imagePath = 'img/logo_nontext.png',
  dummysales = [];
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
    loadData('http://'+_SERVER+'/ticketdaily',function(out){
      $scope.daily = out;
    });
    loadData('http://'+_SERVER+'/ticketweekly',function(out){
      $scope.weekly = out;
    });
    loadData('http://'+_SERVER+'/ticketmonthly',function(out){
      $scope.monthly = out;
    });
    loadData('http://'+_SERVER+'/ticketquarterly',function(out){
      $scope.quarterly = out;
    });
    loadData('http://'+_SERVER+'/ticketmonthly',function(out){
      $scope.monthly = out;
    });
    loadData('http://'+_SERVER+'/ticketyearly',function(out){
      $scope.yearly = out;
    });
  $scope.doAction = function(event){
    console.log("Hehe");
  }
})
