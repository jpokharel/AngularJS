(function(){
  'use strict';

  angular.module('data')
  .controller('MenuCategoriesController',MenuCategoriesController);

  MenuCategoriesController.$inject = ['categories'];
  function MenuCategoriesController(categories){
    var menuCategories = this;
    console.log("This is categories---------------");
    console.log(categories);
    console.log("Completed the categories------------");
    menuCategories.categories = categories;
  }


  // MenuCategoriesController.$inject = ['MenuDataService'];
  // function MenuCategoriesController(MenuDataService){
  //   return MenuDataService.getAllCategories();
  // }





})();
