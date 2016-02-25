function MainController($scope, $mdSidenav, $mdDialog, User, Event, Geocoder) {

  $scope.markers = [];

  Event.all.$promise
  .then(function(response) {
    $scope.events = response.events

    angular.forEach($scope.events.event, function(value, key) {

      address = value["venue_address"]
      title = value["title"]
      description = value["description"]

      Geocoder.geocodeAddress(address)
      .then(function(latlng) {
        console.log(latlng)
        $scope.markers.push({
          id:          $scope.markers.length,
          name:        title,
          description: description,
          latitude:    latlng.lat,
          longitude:   latlng.lng
        })
      })

    });

  })
  .catch(function() {
    console.log("Something went wrong!")
  });

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
    zoom: 13
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

//   // geocode the given address
//   var geocodeAddress = function(address) {
//       var geocoder = new google.maps.Geocoder();
// //      console.log(address)
//       geocoder.geocode( { 'address': address}, function(results, status) {
//           if (status == google.maps.GeocoderStatus.OK) {
//               console.log(results[0].geometry.location.lat())
//               return results[0].geometry.location;
//           } else {
//               console.log("Geocode was not successful for the following reason: " + status);
//           }
//       });
//   };


};