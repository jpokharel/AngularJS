(function (){

'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope','$filter'];
  function LunchCheckController($scope,$filter) {
    $scope.lunch = [];   //Array of the lunch items
    $scope.lunchStatus = "";

    $scope.lunchStatusFinder = function () {
      var emptyElement=0;
      for(var x in $scope.lunch){ //Handles the empty elements in the list
        if ($scope.lunch[x]==""){
          emptyElement++;
        }
      }

      if ($scope.lunch.length-emptyElement<=0){
        $scope.lunchStatus= "Please enter data first";
      }
      else if ($scope.lunch.length-emptyElement<=3){
        $scope.lunchStatus= "Enjoy!";
      }
      else{
        $scope.lunchStatus= "Too much!";
      }
    };

    $scope.displayLunchStatus = function(){
      return $scope.lunchStatus;
    };

    $scope.colorCode = function() {   //Implements font color coding in the message as well as text box border
      if ($scope.lunchStatus=="Please enter data first"){
        return "red";
      }
      else if ($scope.lunchStatus == "Enjoy!" || $scope.lunchStatus == "Too much!"){
        return "green";
      }
    };

}

})();
