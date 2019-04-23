'use strict';

/**
 * Make a purge request to Fastly
 */
module.exports = (url) => {
  return fetch(`https://api.fastly.com/purge/${url}`, {
    method: 'POST',
    headers: {
      'Fastly-Key': process.env.FASTLY_API_KEY
    }
  })
  .then(res => res.json())
  .then(res => {
    res.url = url; // Attach the url to the response to use for messaging
    return res;
  })
  .catch(e => {
    throw e;
  })
}
