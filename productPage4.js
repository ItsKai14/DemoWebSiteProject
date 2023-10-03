const app = angular.module('App', []);

app.controller('appController', function ($scope) {

  $scope.quant = 0;
  $scope.price = 1499;
  $scope.product = [];

  $scope.total = function () {

    $scope.product.pop();

    $scope.product.push({
      quant: $scope.quant,
      oldPrice: $scope.price,
      newPrice: $scope.quant * $scope.price
    });
  };
});