(function(){
  'use strict';

  angular.module('data')
  .component('categories',{
    templateUrl: 'src/categories.html',
    //controller: MenuCategoriesController,
    bindings: {
      categories: '<'
    }
  });
})();
