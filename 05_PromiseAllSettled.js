/*
Promise.allSettled()

- accepts an array of promises as an input 
- returns a promise after all input promises either fulfilled or rejected 


- Array of objects that each describes outcome of each promise
*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "one");
});

const p2 = new Promise((resolve) => resolve(2));

const p3 = new Promise((resolve, reject) => reject(2));

Promise.allSettled([p1, p2, p3]).then((res) => {
  console.log(res);
});

// O/P
// [
//     { status: 'fulfilled', value: 'one' },
//     { status: 'fulfilled', value: 2 },
//     { status: 'rejected', reason: 2 }
//   ]
