function Toast($mdToast) {

	var Toast = {
		signIn: function() {
			$mdToast.show({
				controller: 'ToastsController',
				templateUrl: 'assets/angular-app/templates/toast/signin.html.erb',
				hideDelay: 6000,
				position: 'bottom right'
			});
		},

		signOut: function() {
			$mdToast.show({
				controller: 'ToastsController',
				templateUrl: 'assets/angular-app/templates/toast/signout.html.erb',
				hideDelay: 6000,
				position: 'bottom right'
			});
		},

		register: function() {
			$mdToast.show({
				controller: 'ToastsController',
				templateUrl: 'assets/angular-app/templates/toast/register.html.erb',
				hideDelay: 6000,
				position: 'bottom right'
			});
		},

		addMarkerSignIn: function() {
			$mdToast.show({
				controller: 'ToastsController',
				templateUrl: 'assets/angular-app/templates/toast/addMarkerSignIn.html.erb',
				hideDelay: 6000,
				position: 'bottom right'
			});
		},

		addMarker: function() {
			$mdToast.show({
				controller: 'ToastsController',
				templateUrl: 'assets/angular-app/templates/toast/addMarker.html.erb',
				hideDelay: 6000,
				position: 'bottom right'
			});
		},

		addFav: function() {
			$mdToast.show({
				controller: 'ToastsController',
				templateUrl: 'assets/angular-app/templates/toast/addFav.html.erb',
				hideDelay: 6000,
				position: 'bottom right'
			});
		},
		removeFav: function() {
			$mdToast.show({
				controller: 'ToastsController',
				templateUrl: 'assets/angular-app/templates/toast/removeFav.html.erb',
				hideDelay: 6000,
				position: 'bottom right'
			});
		},
		error: function() {
			$mdToast.show({
				controller: 'ToastsController',
				templateUrl: 'assets/angular-app/templates/toast/error.html.erb',
				hideDelay: 6000,
				position: 'bottom right'
			});
		}

	};

	return Toast;
};
