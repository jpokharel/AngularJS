(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('MenuCategoriesController',MenuCategoriesController);

  MenuCategoriesController.$inject = ['categoriesItems'];
  function MenuCategoriesController(categoriesItems){
    var menuCategories = this;
    menuCategories.categoriesItems=[];

    menuCategories.categoriesItems = categoriesItems;
  }


  // MenuCategoriesController.$inject = ['MenuDataService'];
  // function MenuCategoriesController(MenuDataService){
  //   return MenuDataService.getAllCategories();
  // }





})();
