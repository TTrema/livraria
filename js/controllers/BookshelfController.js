app.controller('BookshelfController', ['$scope', 'books', function ($scope, books) {
  books.success(function (data) {
    $scope.books = data;
    $scope.searchQuery = '';
  });

  // Função para filtrar os livros pela Query
  $scope.filteredBooks = function () {
    if (!$scope.searchQuery) {
      return $scope.books;
    }
    var query = $scope.searchQuery.toLowerCase();
    return $scope.books.filter(function (book) {
      return book.title.toLowerCase().includes(query);
    });
  };
}]);