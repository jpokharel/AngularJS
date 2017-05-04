(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/templates/category-items.html',
  bindings: {
    categories: '<'
  }
});

})();
