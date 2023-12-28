//Anatomy of Promise----------------------------------------------

const promise = new Promise((resolve, reject) => {
  // time-consuming async operation
  // initial state will be pending

  // any one of the below operations can occur at any given time

  // this will resolve or fulfill the promise
  resolve(value);

  // this will reject the promise
  reject(reason);
});

// this will be invoked when a promise is resolved
promise.then((value) => {});

// this will be invoked when a promise is rejected
promise.catch((value) => {});

// this will always be invoked after any of the above operation
promise.finally((value) => {});

//Working of Promise ---------------------------------------

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
  }, 1000);
});
promise2.then((value) => {
  console.log(value);
});
