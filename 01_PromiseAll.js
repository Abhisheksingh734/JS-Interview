/*
Promise.all() 

- Accepts an array of promises and returns a promise that resolves when
    all the promises are fullfilled in the array

- Rejects with the reason of first Promise that rejects

*/

const task = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 2000) {
        reject(time);
      }
      resolve(time);
    }, time);
  });
};

const taskList = [task(1000), task(1500), task(2000), task(3000)];

Promise.all(taskList)
  .then((result) => {
    console.log("got results: ", result);
  })
  .catch((error) => console.log("rejected task: ", error));
