let myActualDate = new Date();
const myBirthdayv = new Date("1982-04-07");
let myAge = document.getElementById("myAge");

let diff = (myActualDate - myBirthdayv) / (60 * 60 * 24 * 365 * 1000);
let years = Math.floor(diff);
myAge.textContent = "Birthday: 1982-04-07";
let myh2_AGE = document.getElementById("h2_AGE");
myh2_AGE.addEventListener(
  "click",
  function (e) {
    if (myAge.textContent === "Age " + years) {
      myAge.textContent = "Birthday: 1982-04-07";
    } else {
      myAge.textContent = "Age " + years;
    }
  },
  false
);
