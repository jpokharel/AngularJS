(function(){
  'use strict';

  angular.module('MenuApp')
  .component('categories',{
    templateUrl: 'src/categories.html',
    controller: MenuCategoriesController,
    bindings: {
      categoriesItems: '<'
    }
  });
})();
