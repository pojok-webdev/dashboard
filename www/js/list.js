app.controller('ListCtrl', function($scope) {
  var imagePath = 'img/logo_nontext.png';
  $scope.cats =  [
    { name: 'FFR', val: 7 },
    { name: 'Platinum', val: 10 },
    { name: 'Gold', val: 70 },
    { name: 'Bronze', val: 120 },
    { name: 'Silver', val: 160 }
  ];

  $scope.sales = [
    { 
      name: 'Amir', 
      label:'Amir',
      cats:  [
        { name: 'Visit', val: 23 },
        { name: 'Penawaran', val: 19 },
        { name: 'Create FB Baru', val: 87 },
        { name: 'Nominal Penjualan', val: "120.450.334" }
      ]},
    { 
      name: 'Dwi', 
      label:'Dwi',
      cats:  [
        { name: 'Visit', val: 74 },
        { name: 'Penawaran', val: 88 },
        { name: 'Create FB Baru', val: 70 },
        { name: 'Nominal Penjualan', val: "63.000.000" }
      ]},
    { 
      name: 'Ayu', 
      label:'Ayu',
      cats:  [
        { name: 'Visit', val: 87 },
        { name: 'Penawaran', val: 64 },
        { name: 'Create FB Baru', val: 70 },
        { name: 'Nominal Penjualan', val: "1.889.820" }
      ]},
    { 
      name: 'Eka', 
      label:'Eka',
      cats:  [
        { name: 'Visit', val: 7 },
        { name: 'Penawaran', val: 10 },
        { name: 'Create FB Baru', val: 70 },
        { name: 'Nominal Penjualan', val: "120.887.900" }
      ]},
    { 
      name: 'Aris', 
      label:'Hunter',
      cats:  [
        { name: 'Visit', val: 27 },
        { name: 'Penawaran', val: 40 },
        { name: 'Create FB Baru', val: 170 },
        { name: 'Nominal Penjualan', val: "9.897.120" }
      ]},
    { 
      name: 'Dhita', 
      label:'Hunter',
      cats:  [
        { name: 'Visit', val: 7 },
        { name: 'Penawaran', val: 10 },
        { name: 'Create FB Baru', val: 70 },
        { name: 'Nominal Penjualan', val: "9.890.120" }
      ]},
    { 
      name: 'Yudhi', 
      label:'Hunter',
      cats:  [
        { name: 'Visit', val: 9 },
        { name: 'Penawaran', val: 13 },
        { name: 'Create FB Baru', val: 20 },
        { name: 'Nominal Penjualan', val: "120.000.000" }
      ]}
  ];
$scope.doAction = function(event){
  console.log("Hehe");
}
  $scope.messages = [{
    face : imagePath,
    what: 'FFR',
    day_d: '25',
    week_w: '31',
    month_m: '91',
    quarter_q: '31',
    year_y: '81',
    when: '3:08PM',
    notes: " I'll be in your neighborhood doing errands"
  }, {
    face : imagePath,
    what: 'Platinum',
    day_d: '16',
    week_w: '31',
    month_m: '83',
    quarter_q: '41',
    year_y: '17',
    when: '3:08PM',
    notes: " I'll be in your neighborhood doing errands"
  }, {
    face : imagePath,
    what: 'Gold',
    day_d: '46',
    week_w: '1',
    month_m: '1',
    quarter_q: '1',
    year_y: '1',
    when: '3:08PM',
    notes: " I'll be in your neighborhood doing errands"
  }, {
    face : imagePath,
    what: 'Bronze',
    day_d: '98',
    week_w: '1',
    month_m: '1',
    quarter_q: '1',
    year_y: '1',
    when: '3:08PM',
    notes: " I'll be in your neighborhood doing errands"
  }, {
    face : imagePath,
    what: 'Silver',
    day_d: '245',
    week_w: '1',
    month_m: '1',
    quarter_q: '1',
    year_y: '1',
    when: '3:08PM',
    notes: " I'll be in your neighborhood doing errands"
  }];
})
