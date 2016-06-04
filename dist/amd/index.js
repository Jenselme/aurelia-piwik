define(['exports', 'aurelia-dependency-injection', 'aurelia-event-aggregator'], function (exports, _aureliaDependencyInjection, _aureliaEventAggregator) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;
    function configure(config) {
        var container = _aureliaDependencyInjection.Container.instance;
        var ea = container.get(_aureliaEventAggregator.EventAggregator);
        var firstPage = true;

        if (window._paq) {
            ea.subscribe('router:navigation:success', function () {
                if (!firstPage) {
                    window._paq.push(['trackPageView', location.pathname]);
                } else {
                    firstPage = false;
                }
            });
        } else {
            console.warn('piwik module is loaded but no piwik _paq object was found');
        }
    }
});