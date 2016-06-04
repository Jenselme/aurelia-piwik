# aurelia-piwik


[![npm Version](https://img.shields.io/npm/v/aurelia-piwik.svg)](https://www.npmjs.com/package/aurelia-piwik)
[![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This plugin is aimed to log page visit with [Piwik](http://piwik.org) on an [Aurelia](http://aurelia.io) SPA. By default Piwik will only log the page on which the user arrived. All the other navigations are not logged since for Piwik the user never changed page. To log all the other page, you must manually call the Piwik tracking code `window._paq.push(['trackPageView', location.pathname]);` when the router change page in your SPA. To do this, this plugin rely on the `router:navigation:success` provided by Aurelia's router.

Currently the implementation is very basic and just log each page with `location.pathname` each time `router:navigation:success` is fired. I will make the plugin evolve if I encounter more advanced needs.

Feel free to open an issue or PR if this plugin has a bug or is lacking a feature.

## Usage

Install the plugin with `jspm install npm:aurelia-piwik` or `npm install --save aurelia-piwik` and register it in your `main.js`:

```js
aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-piwik')
```

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.
