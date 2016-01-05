function UsersController($scope, $mdDialog, Toast, Avatar, User) {

	$scope.user = [];
	$scope.avatars = Avatar.all;
	
	$scope.index = 1;
	$scope.user.avatar = 'actor';


	$scope.selectAvatar = function(avatar, avatars) {
		avatars[$scope.index - 1].selected = false;
		avatar.selected = !avatar.selected;

		$scope.index = avatar.id;
		$scope.user.avatar = avatar.name;
	};

	$scope.register = function(user) {
		User.register(user)
			.then(function() {
				User.signIn(user);
				Toast.register();
				$mdDialog.hide();
			}, function() {
				Toast.error();
			});
	};

	$scope.signIn = function(user) {
		User.signIn(user)
			.then(function() {
				Toast.signIn();
				$mdDialog.hide();
			}, function() {
				Toast.error();
		});
	};

	$scope.showRegister = function(ev) {
		$mdDialog.hide();
		$mdDialog.show({
			controller: 'UsersController',
			templateUrl: 'assets/angular-app/templates/user-registrations/new.html.erb',
			targetEvent: ev,
		});
	};


	$scope.closeDialog = function() {
		$mdDialog.hide();
	}

};