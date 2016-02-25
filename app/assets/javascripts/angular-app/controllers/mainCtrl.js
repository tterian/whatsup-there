function MainController($scope, $mdSidenav, $mdDialog, User, Event, Geocoder) {

  $scope.markers = [];

  Event.all.$promise
  .then(function(response) {
    $scope.events = response.events

    angular.forEach($scope.events.event, function(value, key) {

      address = value["venue_address"]

      $scope.markers.push({
        id:          $scope.markers.length,
        name:        value["title"],
        description: value["description"]
      })

      Geocoder.geocodeAddress(address)
      .then(function(latlng) {
        $scope.markers[key].latitude = latlng.lat;
        $scope.markers[key].longitude = latlng.lng;
      });

    });
  })
  .catch(function() {
    console.log("Something went wrong!")
  });

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
      latitude: 37.7501622,
      longitude: -122.4993985
    },
    zoom: 13
  };

  $scope.addMarker = function(ev) {
    $mdDialog.show({
      controller: 'MarkersController',
      templateUrl: 'assets/angular-app/templates/marker/new.html.erb',
      targetEvent: ev,
    });
  };


};