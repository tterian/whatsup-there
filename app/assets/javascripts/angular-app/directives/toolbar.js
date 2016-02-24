function toolbar() {
  var directive = {
    restrict: 'AE',
    replace: 'true',
    controller: ToolbarController,
    templateUrl: 'assets/angular-app/templates/toolbar/main.html.erb'
  };

  return directive;
};