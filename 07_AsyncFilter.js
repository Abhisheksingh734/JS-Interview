/*
- Implement a function that takes an array of input and an async
iteratee function

- returns a promise that resolves with the list of
inputs that has passed the test through the iteratee function


- The asynchronous iteratee function will accept an input and a
callback. The callback function will be called when the input is
finished processing, the first argument of the callback will be the error
flag and the second will be the result.


*/
const asyncFilter = async (arr, fn) => {
  let output = [];
  for (let current of arr) {
    try {
      const result = await new Promise((resolve, reject) => {
        fn(current, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
      if (result) {
        output.push(current);
      }
    } catch (error) {
      throw error;
    }
  }
  return output;
};

const numPromise = asyncFilter([1, 2, 2, 3, 4, 5], (num, callback) => {
  setTimeout(() => {
    num = num * 2;
    console.log(num);

    if (num === 7) {
      //break condition
      callback(true);
    } else {
      callback(null, num !== 8);
    }
  }, 2000);
});

numPromise
  .then((result) => {
    console.log("Result is " + result.join(","));
  })
  .catch(() => {
    console.log("No success");
  });
