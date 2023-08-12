app.factory('books', ['$http', function ($http) {
  return $http.get('data/books.json')
    .success(function (data) {
      return data;
    })
    .error(function (data) {
      return data;
    });
}]);