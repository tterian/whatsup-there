function Tag($resource) {

	var Tag = {
		all: $resource('/api/tags').query(),
	};
	return Tag;

};