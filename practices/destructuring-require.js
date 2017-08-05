// ES6 Parameter Object Destructuring with Required Values

function ajax(
  {
    type = 'get',
    url = requiredParameter('url'),
    data = {},
    success = requiredParameter('success'),
    error = () => {},
    isAsync = true,
  } = {}
) {
  console.log(
    JSON.stringify({ type, url, data, success, error, isAsync }, null, 2)
  );
}

function requiredParameter(name) {
  throw new Error(`Missing paramater "${name}"`);
}

try {
  ajax({
    url: 'https://myapi.io',
    success: () => {},
  });
} catch (e) {
  console.error(e.message);
}
