function eventBox() {
  var directive = {
    restrict: 'AE',
    replace: 'true',
    controller: EventsController,
    templateUrl: 'assets/angular-app/templates/event/box.html.erb'
  };

  return directive;
};