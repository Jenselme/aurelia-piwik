import { Container } from 'aurelia-dependency-injection';
import { EventAggregator } from 'aurelia-event-aggregator';

export function configure(config) {
    console.log(Container);
    let container = Container.instance;
    let ea = container.get(EventAggregator);

    if (window['_paq']) {
        ea.subscribe('router:navigation:success', () => {
            _paq.push(['trackPageView', location.pathname]);
        });
    } else {
        console.warn('piwik module is loaded but no piwik _paq object was found');
    }
}