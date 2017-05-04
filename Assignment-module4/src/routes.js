(function () {
'use strict';

angular.module('data')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesController as categoryList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  // .state('categories.itemDetail', {
  //   url: '/item-detail/{itemId}',
  //   templateUrl: 'src/templates/item-detail.template.html',
  //   controller: 'ItemDetailController as itemDetail',
  //   params: {
  //     itemId: null
  //   }
  // });

  //Items in the category
  .state('itemDetail', {
    url: '/item-detail/{itemCategory}',
    templateUrl: 'src/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      items: ['MenuDataService', '$stateParams',function (MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.itemCategory);
      }]
    }
  });




}

})();
