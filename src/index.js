'use strict';

const purge = require('./purge');

function CacheClearPlugin(store) {
  store.subscribe((mutation, state) => {
    const pubTime = mutation && mutation.payload && mutation.payload.publishTime;

    if (mutation.type === 'UPDATE_PAGE_STATE' && pubTime) {
      const shouldClearCache = new Date().getTime() - new Date(pubTime).getTime() < 200;

      if (shouldClearCache) {
        const pageUrl = state.page.state.url || '';

        purge(pageUrl)
          .then(`Purged url: ${pageUrl}`);
      }
    }
  });
};

module.exports = {
  NavButton: require('./nav-button.vue').default,
  NavContent: require('./main.vue').default,
  CacheClearPlugin
};
