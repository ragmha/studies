const fetch = require('node-fetch');

async function fetchFromGithub(handle) {
  const url = `https://api.github.com${handle}`;
  const response = await fetch(url);
  return await response.json();
}

/**
 * Aggregate the result of multiple promises
 * Order of Result depends on the Order in Promise.all
 * Promise.all has a fail fast behaviour
 */
async function showUserAndRepos(handle) {
  try {
    const [user, repos] = await Promise.all([
      fetchFromGithub(`/users/${handle}`),
      fetchFromGithub(`/users/${handle}/repos`),
    ]);

    console.log(`User: ${user.name}, Repos:${repos.length}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

showUserAndRepos('ragmha'); // => User: Räghib, Repos:30
