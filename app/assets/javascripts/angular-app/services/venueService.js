function Venue($resource) {

  var venue = $resource('/api/venues/:venueId', 
    {
      venueId: '@venueId'
    });

  var Venue = {
    get: function(venueId) {
      return venue.get({'venueId': venueId});
    }
  };

  return Venue;

};