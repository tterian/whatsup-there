function Marker($resource, User, Fav) {

  var markers = $resource('/api/markers/:markerId', 
    {
      markerId: '@markerId'
    });

  var Marker = {
    all: markers.query(),

    get: function(marker) {
      return markers.get({'markerId': markerId});
    },

    create: function(marker) {
      return markers.save(marker);
    },

    destroy: function(marker) {
      return markers.delete({}, {'markerId': markerId});
    }

  };
  return Marker;

};