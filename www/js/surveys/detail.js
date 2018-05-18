app.controller('SurveyDetailCtrl',function($scope,$routeParams,appconfig){
    var _SERVER = appconfig.SERVER+':'+appconfig.PORT;
    category = $routeParams.category;
    period = $routeParams.period;
    console.log("category / period",category,period)
    loadData('http://'+_SERVER+'/detailsurvey'+period+'/'+category,function(out){
        $scope.detailsurvey = out;
    });
  
    $scope.clients = [
        {name:'Jamu Oebi, PT',address:'Jl Maynej Sungkono 83A',sales:"aris"},
        {name:'Resto Nine, PT',address:'Jl Maynej Sungkono 83B',sales:"dhita"}
    ]
})