document.getElementById("grandParent").addEventListener(
  "click",
  () => {
    console.log("GrandParent clicked!");
  },
  true
);
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("parent clicked!");
  },
  true
);
document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("child clicked!");
  },
  true
);

// by default it is falsed -> event bubbling (bottom up)
// true -> event capturing (from top to bottom)
