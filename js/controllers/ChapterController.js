app.controller("ChapterController", [
  "$scope",
  "books",
  "$routeParams",
  function ($scope, books, $routeParams) {
    books.success(function (data) {
      // Your code here
      $scope.currentBookIndex = parseInt($routeParams.bookId);
      $scope.book = data[$scope.currentBookIndex];

      $scope.chapters = $scope.book.chapters;

      $scope.chapter = $scope.chapters[$scope.currentChapterIndex];

      // If there no more chapters left, go back to the bookshelf view
      if ($routeParams.chapterId >= $scope.book.chapters.length - 1) {
        $scope.nextChapterIndex = "#";
      }
    });

    // Using these properties to create the URLs in line 1 and line 11 of view/chapter.html
    $scope.currentBookIndex = parseInt($routeParams.bookId);
    $scope.currentChapterIndex = parseInt($routeParams.chapterId);
    $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
  },
]);
