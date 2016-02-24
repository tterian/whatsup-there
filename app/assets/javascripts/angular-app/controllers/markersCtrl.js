function MarkersController($scope, $mdDialog, User, Toast) {

  $scope.currentUser = User.currentUser();

  $scope.getMarker = function(marker) {
    console.log(marker)
  }

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