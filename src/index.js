import { Container } from 'aurelia-dependency-injection';
import { EventAggregator } from 'aurelia-event-aggregator';


export function configure(config) {
    let container = Container.instance;
    let ea = container.get(EventAggregator);
    let firstPage = true;

    if (window['_paq']) {
        ea.subscribe('router:navigation:success', () => {
            // The first visited page is logged by the tracking code supplied by piwik.
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
