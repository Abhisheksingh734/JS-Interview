//Execute async functions in Series

/*
Implement a function that takes a list of async functions as input and
executes them in a series that is one at a time. The next task is
executed only when the previous task is completed.

 */

const asyncSeriesExecuter = async (promises) => {
  for (let promise of promises) {
    try {
      const result = await promise;
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
};

const asyncFunc = (i) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completing ${i}`);
    }, 100 * i);
  });
};

const series = [
  asyncFunc(1),
  asyncFunc(2),
  asyncFunc(5),
  asyncFunc(3),
  asyncFunc(4),
];

asyncSeriesExecuter(series);

/*
Completing 1
Completing 2
Completing 5
Completing 3
Completing 4
*/
