var app = angular.module('app', [])
  .controller('titleController', function($scope, cartService) {
    $scope.items = cartService.items;
  })
  .controller('cartController', function($scope, cartService) {
    $scope.items = cartService.items;
    $scope.addCat = function() {
      cartService.addItem({name: 'Cat', price: "4.5"})
    };
    $scope.addSheep = function() {
      cartService.addItem({name: 'Sheep', price: "19.75"})
    };
  })

  .service('cartService', function() {
    var service = this;
    service.items = [],
    service.addItem = function ( item ) {
      service.items.push( item );
    }
  });
