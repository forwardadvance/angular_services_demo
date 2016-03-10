angular.module('app', [])
  .controller('flickrController', function($scope, $http, flickrBase) {
    $scope.tag = "";
    $scope.get = function() {
      if ($scope.tag) {
        var url = [
          flickrBase,
          '?tags=',
          $scope.tag,
          '&tagmode=any&format=json',
          '&jsoncallback=JSON_CALLBACK'
        ].join('');
        $http.jsonp(url).then(function(response) {
          $scope.feed = response.data;
        });
      }
    }
  })
  .constant('flickrBase', 'http://api.flickr.com/services/feeds/photos_public.gne')
