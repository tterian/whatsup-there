function MarkersController($scope, $mdDialog, User, Toast, Marker, Tag) {

  $scope.currentUser = User.currentUser();

  $scope.markerTags = [];
  $scope.markerDescription = '';
  //add a custom style for my map (Blue Essence)
  var styleArray = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]

  //add map with base parameters focused on Yerevan
  $scope.smallMap = {
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

  var events = {
    places_changed: function (searchBox) {
      var place = searchBox.getPlaces();

        if (!place || place == 'undefined' || place.length == 0) {
            console.log('no place data :(');
          return;
        }
      $scope.markerName = place[0].name;
      $scope.markerLat = place[0].geometry.location.lat();
      $scope.markerLng = place[0].geometry.location.lng();

      $scope.smallMap.center = {
        "latitude": $scope.markerLat,
        "longitude": $scope.markerLng
      };
    }
  }




  $scope.searchbox = {
    template: 'assets/angular-app/templates/searchbox/template.html.erb',
    events: events,
    parentdiv: 'searchBoxParent'
  };


  $scope.setMarkerTags = function(tag) {
    var index = $scope.markerTags.indexOf(tag.name);

    if(tag.selected) {
      if (index > -1) {
        $scope.markerTags.splice(index, 1);
      }
      tag.selected = !tag.selected;
    } else {
      $scope.markerTags.push(tag.name);
      tag.selected = !tag.selected;
    }
  };

  $scope.addMarker = function(marker) {
    if ($scope.markers.length == 0) {
      var lastMarker = 0;
    } else {
      var lastMarker = $scope.markers[$scope.markers.length - 1];
    }

    var newMarker = {
      id:           lastMarker.id + 1,
      name:         $scope.markerName,
      latitude:     $scope.markerLat,
      longitude:    $scope.markerLng,
      description:  $scope.markerDescription,
      tags:         $scope.markerTags.join(),
      poster:       $scope.currentUser.image,
      user_id:      $scope.currentUser.id
    };

    Marker.create(newMarker).$promise
      .then(function() {
        $scope.markers.push(newMarker);
        Toast.addMarker();
        $mdDialog.hide();
        $scope.map = {
          center: {
            latitude:   newMarker.latitude,
            longitude:  newMarker.longitude
          }
        };
      });
  };

};