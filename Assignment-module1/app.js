(function (){

'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope','$filter'];
  function LunchCheckController($scope,$filter) {
    $scope.lunch = [];   //Array of the lunch items
    $scope.lunchStatus = "";

    $scope.lunchStatusFinder = function () {
      if ($scope.lunch.length <=0){
        $scope.lunchStatus= "Empty";
      }
      else if ($scope.lunch.length<=3){
        $scope.lunchStatus= "Enjoy!";
      }
      else{
        $scope.lunchStatus= "Too much!";
      }
    };

    $scope.displayLunchStatus=function(){
      //return lunchArray;
      return $scope.lunchStatus;
    };
}

})();
