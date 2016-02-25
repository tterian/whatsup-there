function MarkersController($scope, $mdDialog, User, Toast) {

  $scope.currentUser = User.currentUser();

  $scope.showMarker = function(marker) {
    $scope.map = {
      center: {
        latitude:   marker.latitude,
        longitude:  marker.longitude
      }
    };
  }

  $scope.closeDialog = function() {
    $mdDialog.hide();
  }

};