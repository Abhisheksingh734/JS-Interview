/*

Promise.Finally()->

- schedules a callback function to be called when promise is settled 
    i.e (.then() or .catch())

-  same as ..try..catch..finally block

*/

const checkMail = () => {
  return new Promise((resolve, rejects) => {
    if (Math.random() < 0.5) {
      resolve("Mail has arrived !");
    } else {
      rejects(new Error("Failed to arrive!"));
    }
  });
};

checkMail()
  .then((result) => console.log(result))
  .catch((err) => console.error(err))
  .finally(() => console.log("Experiment completed !!! "));

// console.log(Promise);
