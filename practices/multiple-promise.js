const fetch = require('node-fetch');

async function fetchFromGithub(handle) {
  const url = `https://api.github.com${handle}`;
  const response = await fetch(url);
  return await response.json();
}

/**
 * Aggregate the result of multiple promises
 */
async function showUserAndRepos(handle) {
  try {
    const results = await Promise.all([
      fetchFromGithub(`/users/${handle}`),
      fetchFromGithub(`/users/${handle}/repos`),
    ]);

    const user = results[0];
    const repos = results[1];

    console.log(`User: ${user.name}, Repos:${repos.length}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

showUserAndRepos('ragmha');
