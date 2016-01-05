function Fav($resource) {

  var favs = $resource("/api/favs/:favId", 
    {
      favId: '@favId'
    },
    {
      'update': { method: 'PATCH' }
    });

  var Fav = {
    all: favs.query(),

    getFav: function(fav) {
      return favs.get({'favId': fav.id});
    },

    update: function(fav) {
      return favs.update({'favId': fav.id}, fav);
    }
  };

  return Fav;

};