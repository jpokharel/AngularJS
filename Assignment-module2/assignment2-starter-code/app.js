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

angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController )
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController .$inject=['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService){
  var toBuy=this;
  toBuy.toBuyArray=ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItemFromList=  function(index){
    ShoppingListCheckOffService.buyItemFromList(index);
  };
}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var bought=this;
  bought.boughtArray=ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService(){
  var service=this;
  var toBuyArray=[
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

  var boughtArray=[];

  service.getToBuyItems=function(){
    return toBuyArray;
  };

  service.getBoughtItems=function(){
    return boughtArray;
  };

  service.buyItemFromList=function(index){
    boughtArray.push(toBuyArray[index]);
    toBuyArray.splice(index,1);
  };

}
})();
