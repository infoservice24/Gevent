;(function($) {
    'use strict';

    /**
     * Global event class for publish and subsribes events
     * Singleton
     *
     * @method getInstance returns singleton of Gevent
     */
    var _Gevent = (function() {
        var instance = null;

        var Gevent = function() {
            this._root = $(document);
        };

        /**
         * Returns Root element (it is used for event delegation)
         *
         * @returns {JSON} jQuery element
         */
        Gevent.prototype.getRoot = function() {
            return this._root;
        };

        /**
         * Sets Root element
         *
         * @param {JSON} element jQuery element
         * @returns {Gevent}
         */
        Gevent.prototype.setRoot = function(element) {
            this._root = element;
            return this;
        };

        /**
         * Triggers Event with optional params
         * available arguments are: eventType [, extraParameters ] )
         * @url http://api.jquery.com/trigger/
         *
         * @returns {Gevent}
         */
        Gevent.prototype.publish = function() {
            if (!arguments.length) {
                throw new Error('No arguments were passed.');
            }

            this.getRoot().trigger.apply(this.getRoot(), arguments);
            return this;
        };

        /**
         * Registers Event Handler to Event
         * available arguments are: events [, selector ] [, data ], handler
         * @url http://api.jquery.com/on/
         *
         * @returns {Gevent}
         */
        Gevent.prototype.subscribe = function() {
            if (!arguments.length) {
                throw new Error('No arguments were passed.');
            }

            this.getRoot().on.apply(this.getRoot(), arguments);
            return this;
        };

        /**
         * Unregisters Event or Handler
         * available arguments are: events [, selector ] [, data ], handler
         * @url http://api.jquery.com/off/
         *
         * @returns {Gevent}
         */
        Gevent.prototype.unsubscribe = function() {
            if (!arguments.length) {
                throw new Error('No arguments were passed.');
            }

            this.getRoot().off.apply(this.getRoot(), arguments);
            return this;
        };

        /**
         * Mass-Event Registration
         *
         * @param {Array} arrayAction
         * @param {Function} handler
         * @returns {Gevent}
         */
        Gevent.prototype.subscribeArray = function(arrayAction, handler) {
            $.each(arrayAction, function(index, action) {
                this.subscribe(action, handler);
            }.bind(this));

            return this;
        };

        return {
            getInstance: function () {
                if (!instance) {
                    instance = new Gevent();
                }
                return instance;
            }
        };
    })();

    window.Gevent = _Gevent.getInstance();
})(jQuery);