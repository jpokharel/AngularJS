(function () {
'use strict';

angular.module('MenuApp')
.component('itemsDetail', {
  templateUrl: 'src/templates/items-list.html',
  bindings: {
    //categories: '<'
    items: '<'
  }
});

})();
