function Event($resource) {

  var events = $resource('/api/events/:eventId', 
    {
      eventId: '@eventId'
    });

  var Event = {
    all: events.query(),
  };

  return Event;

};