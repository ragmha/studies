const fetch = require('node-fetch');

/**
 * Every Async Function returns a promise so the 
 * .then and .catch method is available 
 */
async function showGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url); // Pauses the function execution until Promise is resolved
  return await response.json(); // Wait until Promise is settled and return
}

function logUser(user) {
  console.log(user.name);
  console.log(user.location);
}

showGitHubUser('ragmha').then(user => logUser(user)); /* => 
Räghib
Helsinki
*/
