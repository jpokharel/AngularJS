(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
// ItemDetailController.$inject = ['$stateParams', 'categories'];
// function ItemDetailController($stateParams, categories) {
//   var itemDetail = this;
//   var item = categories[$stateParams.itemId];
//   itemDetail.name = item.name;
//   itemDetail.quantity = item.quantity;
//   itemDetail.description = item.description;
// }

ItemDetailController.$inject = ['items'];
function ItemDetailController(items) {
  var itemDetail = this;
  itemDetail.items = items;
}

})();
