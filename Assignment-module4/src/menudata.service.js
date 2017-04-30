(function(){
  'use strict';
  angular.module('data')
  .service('MenuDataService ',MenuDataService );
  //Use URLBase path here.

  MenuDataService.$inject=['$q','$timeout','$http'];
  function MenuDataService ($q,$timeout,$http){
    var service=this;
    var categories=[];
    var items = [];

    // GETs all the categories
    service.getAllCategories = function(){
    var deferred = $q.defer();
    $http({
              method: "GET",
              url: ("https://davids-restaurant.herokuapp.com/categories.json")
            }).then(function (response) {
            for ( var i = 0 ; i < response.data.length ; i++ ) {
              categories.push(response.data[i]);
            }
          }).catch(function (error) {
                  console.log("Error while retrieving the categories data.");
          });
      //console.log(response.data);
      $timeout(function(){
        deferred.resolve(categories);
      },100);

      return deferred.promise;
    //  return categories;
    };

    //GETs all the Items for the Category
    service.getItemsForCategory = function(categoryShortName){

      $http({
              method: "GET",
              url: ("https://davids-restaurant.herokuapp.com/categories.json"),
              params:{
                category: categoryShortName
              }
          }).then(function (response) {
            for ( var i = 0 ; i < response.data.length ; i++ ) {
              items.push(response.data);
            }
          }).catch(function (error) {
                  console.log("Error while retrieving the items data.");
          });

      return items;
    };
  }


})();
