(function (){
  'use strict';

var shoppingListItems=[
  {
    name: "Fruits",
    quantity: "10"
  },
  {
    name: "Coffee",
    quantity: "2"
  },
  {
    name: "Lobster",
    quantity: "5"
  },
  {
    name: "Jalapeno",
    quantity: "18"
  },
  {
    name: "Mac and Cheese",
    quantity: "1"
  }
];

var boughtListItems=[];

angular.module('ShoppingList',[])
  .controller('ShoppingListController',ShoppingListController)
  .controller('BoughtListController',BoughtListController);


ShoppingListController.$inject=['$scope'];
function ShoppingListController($scope){
  $scope.shoppingListItems=shoppingListItems;
  $scope.boughtListItems=boughtListItems;

  $scope.buyItemFromList=function(index){
    $scope.boughtListItems.push(shoppingListItems[index]);
    $scope.shoppingListItems.splice(index,1);
  };
}

BoughtListController.$inject=['$scope'];
function BoughtListController($scope){
  $scope.boughtListItems=boughtListItems;
}

})();
