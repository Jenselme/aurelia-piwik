import * as LogManager from 'aurelia-logging';
import { Container } from 'aurelia-dependency-injection';
import { EventAggregator } from 'aurelia-event-aggregator';

export function configure(config) {
    let container = Container.instance;
    let ea = container.get(EventAggregator);
    let firstPage = true;
    let logger = LogManager.getLogger('piwik');

    if (window._paq) {
        ea.subscribe('router:navigation:success', () => {
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