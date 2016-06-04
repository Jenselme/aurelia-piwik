'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaEventAggregator = require('aurelia-event-aggregator');

function configure(config) {
    var container = _aureliaDependencyInjection.Container.instance;
    var ea = container.get(_aureliaEventAggregator.EventAggregator);
    var firstPage = true;

    if (window['_paq']) {
        ea.subscribe('router:navigation:success', function () {
            if (!firstPage) {
                _paq.push(['trackPageView', location.pathname]);
            } else {
                firstPage = false;
            }
        });
    } else {
        console.warn('piwik module is loaded but no piwik _paq object was found');
    }
}