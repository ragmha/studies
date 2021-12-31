// Promises

//1
var d = new Promise((resolve, reject) => {
  if (true) {
    resolve('hello world!');
  } else {
    reject('No world!');
  }
});

d.then(data => console.log('success: ', data));

d.catch(error => console.error('error: ', error));

//2
var d = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve('hello world!');
    } else {
      reject('No world!');
    }
  }, 3000);
});

d
  .then(data => {
    console.log('success: ', data);
    return 'Ma man!';
  })
  .then(data => {
    console.log('success2: ', data);
    throw new Error('error thrown!');
  })
  .then(data => {
    console.log('done:', data);
  })
  .catch(error => console.error('error: ', error));
