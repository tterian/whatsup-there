function CommentsController($scope, $mdDialog, Toast, Comment) {

  $scope.comments = Comment.all

  $scope.addComment = function(comment) {
    if ( comment.text ) {
      var extendedComment = {
        user_id:    $scope.currentUser.id,
        marker_id:  $scope.currentMarker.id,
        poster:     $scope.currentUser.avatar,
        text:       comment.text,
        created_at: new Date()
      }; 

      Comment.create(extendedComment)
      .$promise.then(function() {
        $scope.comments.push(extendedComment);
        $scope.comment = '';
      });
    }

  };

};