app.controller('SurveyCtrl', function($http,$scope,appconfig) {
  var imagePath = 'img/logo_nontext.png',
  dummysales = [];
  $scope.widebuttonstyle = {
    "min-width":"500px"
  }
  $scope.swipeTab = function(selectedtab){
    console.log("Geser ",selectedtab);
    $scope.surveytab.selected = selectedtab;
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
      callback(dummysurveys);  
    })
  }
  var _SERVER = appconfig.SERVER+':'+appconfig.PORT;
    loadData('http://'+_SERVER+'/surveydaily',function(out){
      $scope.daily = out;
    });
    loadData('http://'+_SERVER+'/surveyweekly',function(out){
      $scope.weekly = out;
    });
    loadData('http://'+_SERVER+'/surveymonthly',function(out){
      $scope.monthly = out;
    });
    loadData('http://'+_SERVER+'/surveyquarterly',function(out){
      $scope.quarterly = out;
    });
    loadData('http://'+_SERVER+'/surveymonthly',function(out){
      $scope.monthly = out;
    });
    loadData('http://'+_SERVER+'/surveyyearly',function(out){
      $scope.yearly = out;
    });
  $scope.doAction = function(event){
    console.log("Hehe");
  }
})
