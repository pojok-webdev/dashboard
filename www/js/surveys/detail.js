app.controller('SurveyDetailCtrl',function($scope,$location,$routeParams,appconfig){
    var _SERVER = appconfig.SERVER+':'+appconfig.PORT;
    category = $routeParams.category;
    period = $routeParams.period;
    console.log("category / period",category,period)
    loadData('http://'+_SERVER+'/detailsurvey'+period+'/'+category,function(out){
        $scope.detailsurvey = out;
    });
    $scope.showpage = function(location){
        console.log("Goto",location);
        $location.path(location);
        $scope.modulename = " ("+location+")";
    }
})