/*
Promise.any()-> Opposite of Promise.all()

- accepts an array of promises that resolves as soon as 
    any of the promise gets fulfilled with value of tht fulfilled promise

- rejects with the AggregateError (a new subclass of error that groups error together) 

*/

const t1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "One");
});
const t2 = new Promise((resolve, reject) => {
  setTimeout(reject, 2000, "two");
});
const t3 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, "three");
});

Promise.any([t1, t2, t3])
  .then((resolve) => console.log(resolve))
  .catch((e) => console.log(e));

//second and third fails nd 1st resolves
//output -> one
