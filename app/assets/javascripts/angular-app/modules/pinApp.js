angular
  .module('pinApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    /* Material framework */
    'ngMaterial',
    'ngAria',
    /* Authetication */
    'ng-token-auth',
    /* Time ago and more */
    'angularMoment',
    /* GMAP */
    'uiGmapgoogle-maps',
    'ngStorage'
    ])
  .config(routeProvider)
  .config(gmapProvider)
  .factory('User', User)
  .factory('Event', Event)
  .factory('Toast', Toast)
  .factory('Geocoder', Geocoder)
  .controller('ToolbarController', ToolbarController)
  .controller('SidenavController', SidenavController)
  .controller('MainController', MainController)
  .controller('UsersController', UsersController)
  .controller('MarkersController', MarkersController) 
  .controller('CommentsController', CommentsController)
  .controller('ToastsController', ToastsController)
  .directive('toolbar', toolbar)
  .directive('markerBox', markerBox)
  .directive('sidenav', sidenav);

//Config routes
function routeProvider($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: 'assets/angular-app/templates/main.html.erb'
    })
    .otherwise({
      redirectTo: '/'
    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
};

//Config gmap
function gmapProvider(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyC--kIuzPj7oZqeUH7Bq9T9ToMq2zh76as',
    v: '3.21',
    libraries: 'places' // Required for SearchBox.
  });
}