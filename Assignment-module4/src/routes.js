(function () {
  'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories.html',
      controller: 'MenuCategoriesController as menuCategories',
      resolve: {
        categoriesItems: ['MenuDataService', function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.html'
    })


}



})();
