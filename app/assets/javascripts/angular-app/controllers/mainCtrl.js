function MainController($scope, $mdSidenav, $mdDialog, User, Marker, Fav, Tag, Toast) {

  $scope.tags = Tag.all;
  $scope.markers = Marker.all;
  $scope.favs = Fav.all;

  $scope.currentUser = User.currentUser();

  //add a custom style for my map (Blue Essence)
  var styleArray = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]

  //add map with base parameters focused on Yerevan
  $scope.map = {
    options: {
      styles: styleArray,
      panControl: false,
      streetViewControl: false,
      zoomControl: false,
      mapTypeControl: false     
    },
    center: {
      latitude: 40.180282,
      longitude:  44.516891
    },
    zoom: 15
  };

  $scope.getMarker = function(marker) {
    $scope.currentMarker = marker;
   
    $scope.map = {
      center: {
        latitude: marker.latitude,
        longitude:  marker.longitude
      },
      options: {
        animation: google.maps.Animation.BOUNCE
      }
    };
  };


  $scope.triggerFav = function(marker) {
    var currentFav = marker.fav;

    if (currentFav.faved) {

      currentFav.faved = false;
      Fav.update(currentFav).$promise
        .then(function() {
          Toast.removeFav();
        });
    } else {
      currentFav.faved = true;

      Fav.update(currentFav).$promise
        .then(function() {
          Toast.addFav();
        });
    }
  };


  $scope.showComment = function(ev) {
    $mdDialog.show({
      scope: $scope,
      preserveScope: true,
      escapeToClose: true,
      controller: 'CommentsController',
      templateUrl: 'assets/angular-app/templates/comment/new.html.erb',
      targetEvent: ev
    }); 
  };

  $scope.showMarker = function(ev) {
    if($scope.user.signedIn) {
      $mdDialog.show({
        scope: $scope,
        preserveScope: true,
        escapeToClose: true,
        controller: 'MarkersController',
        templateUrl: 'assets/angular-app/templates/marker/new.html.erb',
        targetEvent: ev
      });
    } else {
      $mdDialog.show({
        controller: 'UsersController',
        templateUrl: 'assets/angular-app/templates/user-sessions/new.html.erb',
        targetEvent: ev
      });
      Toast.addMarkerSignIn();
    }
  };



  $scope.signOut = function() {
    User.signOut()
      .then(function() {
        $mdSidenav('menu').close();
        Toast.signOut();
      }, function() {
        Toast.error();
      });
  };

  $scope.showSignIn = function(ev) {
    $mdDialog.show({
      controller: 'UsersController',
      templateUrl: 'assets/angular-app/templates/user-sessions/new.html.erb',
      targetEvent: ev,
    });
    $mdSidenav('menu').close();
  };

  $scope.showRegister = function(ev) {
    $mdDialog.show({
      controller: 'UsersController',
      templateUrl: 'assets/angular-app/templates/user-registrations/new.html.erb',
      targetEvent: ev,
    });
    $mdSidenav('menu').close();
  };


  $scope.toggleMenu = function () {
    $mdSidenav('menu').toggle();
  };

  $scope.closeMenu = function () {
    $mdSidenav('menu').close();
  };

  $scope.closeDialog = function() {
    $mdDialog.hide();
  }

};