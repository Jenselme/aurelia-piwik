'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-event-aggregator'], function (_export, _context) {
    "use strict";

    var Container, EventAggregator;
    return {
        setters: [function (_aureliaDependencyInjection) {
            Container = _aureliaDependencyInjection.Container;
        }, function (_aureliaEventAggregator) {
            EventAggregator = _aureliaEventAggregator.EventAggregator;
        }],
        execute: function () {
            function configure(config) {
                console.log(Container);
                var container = Container.instance;
                var ea = container.get(EventAggregator);

                if (window['_paq']) {
                    ea.subscribe('router:navigation:success', function () {
                        _paq.push(['trackPageView', location.pathname]);
                    });
                } else {
                    console.warn('piwik module is loaded but no piwik _paq object was found');
                }
            }

            _export('configure', configure);
        }
    };
});