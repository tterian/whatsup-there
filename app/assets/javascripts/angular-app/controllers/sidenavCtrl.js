function SidenavController($scope, $mdSidenav, $mdDialog, User) {

  $scope.toggleMenu = function () {
    $mdSidenav('menu').toggle();
  };

};