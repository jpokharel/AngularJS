(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;
  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getAllCategories = function(){
    var response = $http({
              method: "GET",
              url: ("https://davids-restaurant.herokuapp.com/categories.json")
            }).then(function(result){
              return result.data;
            });
    return response;
    };

  service.getItemsForCategory = function(categoryShortName){
    // var response = $http({
    //           method: "GET",
    //           url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="),
    //           params:{ category: categoryShortName}
    //         }).then(function(result){
    //           return result.data;
    //         });
    // return response;

    var items = [];
    $http({
            method: "GET",
            url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="),
            params:{category:categoryShortName}
        }).then(function (response) {
              for ( var i = 0 ; i < response.data.menu_items.length ; i++ ) {
                    items.push( response.data.menu_items[i] );
              }
        }).catch(function (error) {
                console.log("Error while retrieving the data.");
        });
    return items;
  };
}

})();
