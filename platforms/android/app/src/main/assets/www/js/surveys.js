app.controller('SurveyCtrl', function($scope) {
  var imagePath = 'img/logo_nontext.png';
  $scope.daily =  [
    { name: 'FFR', val: 7 },
    { name: 'Platinum', val: 10 },
    { name: 'Gold', val: 70 },
    { name: 'Bronze', val: 120 },
    { name: 'Silver', val: 160 }
  ];
  $scope.weekly =  [
      { name: 'FFR', val: 17 },
      { name: 'Platinum', val: 13 },
      { name: 'Gold', val: 60 },
      { name: 'Bronze', val: 187 },
      { name: 'Silver', val: 188 }
  ];
  $scope.monthly =  [
      { name: 'FFR', val: 22 },
      { name: 'Platinum', val: 17 },
      { name: 'Gold', val: 70 },
      { name: 'Bronze', val: 120 },
      { name: 'Silver', val: 160 }
  ];
  $scope.quarterly =  [
      { name: 'FFR', val: 7 },
      { name: 'Platinum', val: 10 },
      { name: 'Gold', val: 70 },
      { name: 'Bronze', val: 120 },
      { name: 'Silver', val: 160 }
  ];
  $scope.yearly =  [
      { name: 'FFR', val: 7 },
      { name: 'Platinum', val: 10 },
      { name: 'Gold', val: 70 },
      { name: 'Bronze', val: 120 },
      { name: 'Silver', val: 160 }
  ];
  
  $scope.doAction = function(event){
    console.log("Hehe");
  }
})
