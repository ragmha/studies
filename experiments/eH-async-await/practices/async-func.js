const fetch = require('node-fetch');

/**
 * Fetches Github User Using Normal Promise
 */
function showGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  fetch(url).then(response => response.json()).then(user => {
    console.log(user.name);
    console.log(user.location);
  });
}

/**
 * Fetches Github User Using async-await
 * Makes it easier to understand the control-flow
 */
async function showGitHubUser2(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url); // Pauses the function execution until Promise is resolved
  const user = await response.json(); // Wait until Promise is settled
  console.log(user.name);
  console.log(user.location);
}

showGitHubUser('ragmha');

showGitHubUser2('ragmha');
