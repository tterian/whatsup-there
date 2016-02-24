function sidenav() {
  var directive = {
    restrict: 'AE',
    replace: 'true',
    controller: SidenavController,
    templateUrl: 'assets/angular-app/templates/sidenav/main.html.erb'
  };

  return directive;
};