/*

Implement a mapSeries async function that is similar to the
Array.map() 

-returns a promise that resolves on the list of output
-by mapping each input through an asynchronous iteratee function or
rejects it if any error occurs.


The asynchronous iteratee function will accept an input and a
callback. 

The callback function will be called when the input is
finished processing, the first argument of the callback will be the error
flag and the second will be the result.
*/

const mapSeries = async (arr, fn) => {
  let output = [];
  for (let current of arr) {
    const result = await new Promise((resolve, reject) => {
      fn(current, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
    output.push(result);
  }

  return output;
};

let numPromise = mapSeries([1, 2, 3, 4, 5], function (num, callback) {
  setTimeout(() => {
    num = num * 2;
    console.log(num);

    if (num === 12) {
      callback(true);
    } else {
      callback(null, num);
    }
  });
});

/*
2
4
6
8
10
*/
