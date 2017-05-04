(function(){
  'use strict';

  angular.module('MenuApp')
  .component('items',{
    templateUrl: 'src/categoryItems.html',
    controller: ItemsComponentController,
    bindings: {
      //categories: '<',
      items: '<'
    }
  });


ItemsComponentController.$inject=['MenuDataService','$scope'];
function ItemsComponentController(MenuDataService, $scope){
    var $ctrl=this; //Local variable
    var promise = MenuDataService.getAllCategories(categoryShortName);

    promise.then(function(response){
      $ctrl.items=response.data;
    })
    .catch(function(error){
      console.log("Error retrieving items");
    });

}

})();
