function UsersController($scope, $mdDialog, Toast, User) {

  $scope.user = [];
  $scope.avatars = [
    { id: 1,
      name: 'actor'
    },
    { id: 2,
      name: 'agent'
    },
    { id: 3,
      name: 'astronaut'
    },
    { id: 4,
      name: 'basketball'
    },
    { id: 5,
      name: 'bomberman'
    },    
    { id: 6,
      name: 'elegant'
    },
    { id: 7,
      name: 'engineering'
    },
    { id: 8,
      name: 'football'
    },
    { id: 9,
      name: 'hitler'
    },
    { id: 10,
      name: 'maid'
    },
    { id: 11,
      name: 'matrix'
    },
    { id: 12,
      name: 'pope'
    }    
  ];
  
  $scope.index = 1;
  $scope.user.image = 'actor';


  $scope.selectAvatar = function(avatar, avatars) {
    avatars[$scope.index - 1].selected = false;
    avatar.selected = !avatar.selected;

    $scope.index = avatar.id;
    $scope.user.image = avatar.name;
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
    $mdDialog.show({
      controller: 'MarkersController',
      templateUrl: 'assets/angular-app/templates/marker/new.html.erb',
      targetEvent: ev,
    });
  };


  $scope.closeDialog = function() {
    $mdDialog.hide();
  }

};