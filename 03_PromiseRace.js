/*
Promise.race() ->

- accepts an array of promises 
- returns promise as soon as any of the promise is fulfills or rejects

*/

const t1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "One");
});

const t2 = new Promise((resolve, rejects) => {
  setTimeout(resolve, 2000, "two");
});

const t3 = new Promise((resolve, rejects) => {
  setTimeout(rejects, 1000, "three");
});

Promise.race([t1, t2, t3])
  .then((results) => {
    console.log(results);
  })
  .catch((e) => console.log(e));

//three
