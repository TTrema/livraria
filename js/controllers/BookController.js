app.controller("BookController", [
  "$scope",
  "books",
  "$routeParams",
  function ($scope, books, $routeParams) {
    books.success(function (data) {
      $scope.currentBookIndex = parseInt($routeParams.bookId);
      $scope.book = data[$scope.currentBookIndex];
    });
  },
]);
