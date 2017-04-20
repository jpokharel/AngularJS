(function(){

'use strict';

angular.module('NarrowItDownApp',[])
       .controller('NarrowItDownController',NarrowItDownController)
       .service('MenuSearchService',MenuSearchService)
       .directive('foundItems',FoundItems);

function FoundItems(){
  var ddo={
    templateUrl: 'foundItems.html',
    scope:{
        found: '<',
        onRemove: '&',
        emptyMessage: '<'
      }
  };
  return ddo;
}

NarrowItDownController.$inject=['MenuSearchService','$scope'];
function NarrowItDownController(MenuSearchService,$scope){
    var menu = this;

    menu.searchTerm = "";
    menu.found = [];
    menu.emptyMessage="";

    menu.removeItem = function(index){
      menu.found.splice(index,1);
    }

    menu.narrowItDown = function () {
      if ( menu.searchTerm.trim() ) {
        menu.found = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
       if (menu.found.length > 0){
        menu.emptyMessage="";
      }

      } else {
        menu.found = [];
        menu.emptyMessage='Nothing Found';
      }

    };

  }

MenuSearchService.$inject=['$http'];
function MenuSearchService($http){
  var service=this;

  service.getMatchedMenuItems=function(searchTerm){

    var items = [];
    searchTerm = searchTerm.trim().toLowerCase();
    $http({
            method: "GET",
            url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
        }).then(function (response) {
              for ( var i = 0 ; i < response.data.menu_items.length ; i++ ) {
                  if ( ( response.data.menu_items[i].description.toLowerCase().indexOf(searchTerm)) !== -1 ) {
                    items.push( response.data.menu_items[i] );
                  }
              }
        }).catch(function (error) {
                console.log("Error while retrieving the data.");
        });
    return items;
  };
}
})();
