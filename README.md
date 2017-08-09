# Gevent
Global event class for publish and subsribes events
Singleton

*Gevent.publish()*
Triggers Event with optional params
available arguments are: eventType [, extraParameters ] )
returns: {Gevent}

*Gevent.subscribe()*
Registers Event Handler to Event
available arguments are: events [, selector ] [, data ], handler
returns: {Gevent}

*Gevent.unsubscribe()*
Unregisters Event or Handler
available arguments are: events [, selector ] [, data ], handler
returns: {Gevent}

*Gevent.subscribeArray()*
Mass-Event Registration
available arguments are: arrayAction, handler
returns: {Gevent}

Example:
{code javascript}
    Gevent.subscribe('ajax:started', ajaxStart);
    Gevent.publish('ajax:started');
{code}