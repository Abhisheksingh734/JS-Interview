/*

Opposite of AsycnFilter()

- accepts an array and an async iteratee function that 
- returns a promise that resolves with list of inputs that has failed the test through Iteratee function

*/

const asyncReject = async (arr, fn) => {
  let output = [];
  for (let current of arr) {
    let result = await new Promise((resolve, reject) => {
      fn(current, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });

    if (!result) {
      output.push(current);
    }
  }
  return output;
};

let numPromise = asyncReject([1, 2, 3, 4, 5, 6, 7], (num, callback) => {
  setTimeout(() => {
    num = num * 2;
    console.log(num);
    if (num === 7) {
      callback(true);
    } else {
      callback(null, num !== 4);
    }
  }, 1000);
});

numPromise.then((result) => {
  console.log("result is " + result);
});
