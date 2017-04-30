(function () {
  'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/categories');

  // Set up UI states
  $stateProvider
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories.html',
      controller: 'MenuCategoriesController as menuCategories',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('tab2', {
      url: '/tab2',
      template: '<h1> Inside Test Potato.. He ha ha ha... Now this is edited! </h1>'
      //templateUrl: 'src/categories.html'
    })


}



})();
