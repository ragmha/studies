const fetch = require('node-fetch');

const logUser = user =>
  console.log(`UserName: ${user.name}, Location: ${user.location}`);
const logError = err => console.error(`Error: ${err.message}`);

async function fetchGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
}

fetchGitHubUser('I dont exist').then(logUser).catch(logError); // => Error: Not Found

async function showGithubUser(handle) {
  try {
    const user = await fetchGitHubUser(handle);
    logUser(user);
  } catch (err) {
    logError(err);
  }
}

showGithubUser('I dont exist'); // => Error: Not Found

// Check If sucees still works :'D
showGithubUser('ragmha'); // => UserName: Räghib, Location: Helsinki
