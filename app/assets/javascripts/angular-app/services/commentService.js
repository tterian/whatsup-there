function Comment($resource, User) {

	var comments = $resource("/api/comments/:commentId", 
		{
			commentId: '@commentId'
		});

	var Comment = {
		all: comments.query(),

		getPoster: function(comment) {
			return User.getProfile(comment.user_id).avatar;
		},

		create: function(comment) {
			return comments.save(comment);
		},

		destroy: function(comment) {
			return comments.delete({}, {'commentId': comment.id});
		}
	};

	return Comment;

};