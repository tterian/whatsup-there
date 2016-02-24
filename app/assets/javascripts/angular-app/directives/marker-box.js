function markerBox() {
  var directive = {
    restrict: 'AE',
    replace: 'true',
    controller: MarkersController,
    templateUrl: 'assets/angular-app/templates/marker/box.html.erb'
  };

  return directive;
};