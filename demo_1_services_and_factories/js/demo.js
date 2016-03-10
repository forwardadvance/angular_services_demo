// Services are for storing persistent data and keeping functions together
// Services are singletons
// Hello Service
// Hello Factory
// Github Service
// Test by injecting $service
// Factories are for generating objects directly

angular.module('app', ['github'])
  .controller('demoController', function($scope, github) {
    github.getEvents()
      .then(function(res) {
        $scope.github = res.data;
      })
  })


angular.module('github', [])
  .constant('githubBase', 'https://api.github.com')
  .service('github', function( $http, githubBase ) {
    this.getEvents = function() {
      var url = githubBase + '/events?callback=JSON_CALLBACK';
      return $http.jsonp(url);
    }
  })
// .factory('githubFactory', function( $http, githubBase ) {
//   var github = {
//     getEvents: function() {
//       var url = githubBase + '/events?callback=JSON_CALLBACK';
//       return $http.jsonp(url);
//     }
//   }
//   return github;
// })


  // .service('helloService', function() {
  //   this.sayHello = function() {
  //     alert('hello');
  //   };
  //   this.sayGoodbye = function() {
  //     alert('goodbye');
  //   };
  // })
  // .factory('helloFactory', function() {
  //   return {
  //     sayHello: function() {
  //       alert('hello');
  //     },
  //     sayGoodbye: function() {
  //       alert('goodbye');
  //     }
  //   }
  // })




// angular.module('hello', [])
//   .service('helloService', function() {
//     this.sayHello = function() {
//       alert('hello');
//     };
//     this.sayGoodbye = function() {
//       alert('goodbye');
//     }
//   })
//   .factory('helloFactory', function() {
//     return {
//       sayHello: function() {
//         alert('hello');
//       },
//       sayGoodbye: function() {
//         alert('goodbye');
//       }
//     }
//   });



// angular.module('github', [])
//   .constant('githubBase', 'https://api.github.com')
//   .service('github', function( $http, githubBase ) {
//     this.getEvents = function() {
//       var url = githubBase + '/events?callback=JSON_CALLBACK';
//       return $http.jsonp(url);
//     }
//   })
// .factory('githubFactory', function( $http, githubBase ) {
//   var github = {
//     getEvents: function() {
//       var url = githubBase + '/events?callback=JSON_CALLBACK';
//       return $http.jsonp(url);
//     }
//   }
//   return github;
// })


// Initial state
// angular.module('app', [])
//   .controller('demoController', function() {
//   })
