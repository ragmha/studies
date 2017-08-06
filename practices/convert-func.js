const fetch = require('node-fetch');
const logUser = user => {
  console.log(user.name);
  console.log(user.location);
};

/**  #1
 * Converting it into an Async Function Expression
 * 
 * Note:
 * User Async Function Declaration, if you need Function Hoisting
 */
const fetchGithubUser = async handle => {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url); // Pauses the function execution until Promise is resolved
  return await response.json(); // Wait until Promise is settled and return
};

/**
 * Wrapping user with async IFFE
 */
(async () => {
  const user = await fetchGithubUser('ragmha').then(user =>
    logUser(user)
  ); /* => 
Räghib
Helsinki
*/
})();

//  #2
class GithubApiClient {
  // to make method async
  async fetchUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    return await response.json();
  }
}

/**
 * Using client instance to await Promise
 */
(async () => {
  const client = new GithubApiClient();
  const user = await client
    .fetchUser('ragmha')
    .then(user => logUser(user)); /* => 
Räghib
Helsinki
*/
})();
