
var app = angular.module('myApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);

app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    controller: 'homeController',
    templateUrl: 'views/home.html'
  })
  .when('/home', {
    controller: 'homeController',
    templateUrl: 'views/home.html'
  })
  .when('/socials', {
    controller: 'socialsController',
    templateUrl: 'views/socials.html'
  })
  .when('/photography', {
    controller: 'photographyController',
    templateUrl: 'views/photography.html'
  })
  .when('/art', {
    controller: 'artController',
    templateUrl: 'views/art.html'
  })
  .when('/music', {
    controller: 'musicController',
    templateUrl: 'views/music.html'
  })
  .when('/websites/bandofideas', {
    controller: 'webController',
    templateUrl: 'views/websites/bandofideas.html'
  })
  .when('/sandbox', {
    controller: 'sandboxController',
    templateUrl: 'views/sandbox/sandbox.html'
  })
  .when('/sandbox/bouncyballs', {
    controller: 'sandboxController',
    templateUrl: 'views/sandbox/bouncyballs/index.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});

