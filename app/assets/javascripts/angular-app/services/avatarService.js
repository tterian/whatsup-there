function Avatar($resource) {

	var Avatar = {
		all: $resource('/api/avatars').query()
	};
	return Avatar;

};