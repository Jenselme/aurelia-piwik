'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;

var _aureliaLogging = require('aurelia-logging');

var LogManager = _interopRequireWildcard(_aureliaLogging);

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaEventAggregator = require('aurelia-event-aggregator');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function configure(config) {
    var container = _aureliaDependencyInjection.Container.instance;
    var ea = container.get(_aureliaEventAggregator.EventAggregator);
    var firstPage = true;
    var logger = LogManager.getLogger('piwik');

    if (window._paq) {
        ea.subscribe('router:navigation:success', function () {
            if (!firstPage) {
                window._paq.push(['trackPageView', location.pathname]);
            } else {
                firstPage = false;
            }
        });
    } else {
        logger.warn('piwik module is loaded but no piwik _paq object was found');
    }
}