const fetch = require('node-fetch');

async function fetchFromGithub(handle) {
  const url = `https://api.github.com${handle}`;
  const response = await fetch(url);
  return await response.json();
}

/** # 1
 * Async requests are made sequentually instead of parallel
 * 2nd HTTP req is done only after 1st HTTP req is resolved
 * Has Performance Issue
 */
async function showUserAndReposA(handle) {
  try {
    const user = await fetchFromGithub(`/users/${handle}`);
    const repos = await fetchFromGithub(`/users/${handle}/repos`);

    console.log(`User: ${user.name}, Repos:${repos.length}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

showUserAndReposA('ragmha'); // => User: Räghib, Repos:30

/** # 2 Fix (For #1)
 * 2 concurrent HTTP request, no waiting for 1st one to resolve
 * Both request is run at the same time
 * 
 * No need to await promise sequentually
 * Faster compared to #1
 */
async function showUserAndRepos(handle) {
  try {
    const userPromise = fetchFromGithub(`/users/${handle}`);
    const reposPromise = fetchFromGithub(`/users/${handle}/repos`);

    const user = await userPromise;
    const repos = await reposPromise;

    console.log(`User: ${user.name}, Repos:${repos.length}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

showUserAndRepos('sindresorhus'); // => User: Sindre Sorhus, Repos:30
