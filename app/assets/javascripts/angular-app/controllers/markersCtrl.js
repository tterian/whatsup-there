function MarkersController($scope, $mdDialog, $mdSidenav, User, Toast) {

  $scope.currentUser = User.currentUser();

  $scope.showMarker = function(marker) {
    $scope.map = {
      center: {
        latitude:   marker.latitude,
        longitude:  marker.longitude
      }
    };
    $scope.currentMarker = marker;
    $mdSidenav('event').toggle();
  }

  $scope.closeDialog = function() {
    $mdDialog.hide();
  }

};