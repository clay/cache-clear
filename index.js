'use strict';

const purge = require('./purge');

module.exports = () => {
  window.kiln.navButtons['cache-clear'] = require('./nav-button.vue');
  window.kiln.navContent['cache-clear'] = require('./main.vue');
  window.kiln.plugins['cache-clear'] = function (store) {
    store.subscribe((mutation, state) => {
      const pubTime = mutation && mutation.payload && mutation.payload.publishTime;

      if (mutation.type === 'UPDATE_PAGE_STATE' && pubTime) {
        const shouldClearCache = new Date().getTime() - new Date(mutation.payload.publishTime).getTime() < 200;

        if (shouldClearCache) {
          purge(state.page.state.url)
            .then(`Purged url: ${state.page.state.url}`)
        }
      }
    });
  };
}
