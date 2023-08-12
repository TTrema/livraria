app.controller("ChapterController", [
  "$scope",
  "books",
  "$routeParams", '$window',
  function ($scope, books, $routeParams, $window) {
    books.success(function (data) {

      $scope.currentBookIndex = parseInt($routeParams.bookId);
      $scope.book = data[$scope.currentBookIndex];

      $scope.chapters = $scope.book.chapters;

      $scope.chapter = $scope.chapters[$scope.currentChapterIndex];

      // Limita o index dos capítulos e seta como null se não tiver mais.
      $scope.nextChapterIndex = $routeParams.chapterId >= $scope.book.chapters.length - 1 ?
        null :
        parseInt($routeParams.chapterId) + 1;

      $scope.previousChapterIndex = $routeParams.chapterId <= 0 ?
        null :
        parseInt($routeParams.chapterId) - 1;
    });

    $scope.currentChapterIndex = parseInt($routeParams.chapterId);

    // Scroll para o top dá pagina
    $scope.scrollToTop = function() {
      
      $window.scrollTo(0, 0);
  };

  },
]);