app.controller('SalesCtrl', function($http,$scope) {
  var imagePath = 'img/logo_nontext.png';
  var dummysales = [
    { name: 'Amir', val: 0 },
    { name: 'Dwi', val: 0 },
    { name: 'Yudhi', val: 0 },
    { name: 'Dhita', val: 0 },
    { name: 'Aris', val: 0 },
    { name: 'Ayu', val: 0 },
    { name: 'Eka', val: 0 }
  ];
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
    loadData('http://192.168.0.14:1945/visits',function(out){
      $scope.visits = out;
    });
    loadData('http://192.168.0.14:1945/offers',function(out){
      $scope.offers = out;
    });
    loadData('http://192.168.0.14:1945/newfbs',function(out){
      $scope.newfbs = out;
    });
    loadData('http://192.168.0.14:1945/sellings',function(out){
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
