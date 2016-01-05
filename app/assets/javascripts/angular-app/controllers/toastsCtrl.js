function ToastsController($scope, $mdToast) {
  	
  	$scope.closeToast = function() {
    	$mdToast.hide();
  	};

};