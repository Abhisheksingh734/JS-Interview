const promises = [
  { priority: 2 },
  { priority: 1 },
  { priority: 4 },
  { priority: 3 },
];
promises.sort((a, b) => a.priority - b.priority);

console.log(promise);
