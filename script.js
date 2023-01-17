let startingHomeVal = 0;
let startingGuestVal = 0;
let homeEl = document.getElementById("score-home");
let guestEl = document.getElementById("score-guest");

let plusOneHomeEl = document.getElementById("home+1");
let plusTwoHomeEl = document.getElementById("home+2");
let plusThreeHomeEl = document.getElementById("home+3");

let plusOneGuestEl = document.getElementById("guest+1");
let plusTwoGuestEl = document.getElementById("guest+2");
let plusThreeGuestEl = document.getElementById("guest+3");

homeEl.innerHTML = startingHomeVal;
guestEl.textContent = startingGuestVal;

// Function for +1

function plusOneIncrementHome() {
  startingHomeVal += 1;
  homeEl.textContent = startingHomeVal;
}

function plusOneIncrementGuest() {
  startingGuestVal += 1;
  guestEl.textContent = startingGuestVal;
}

//Function for +2

function plusTwoIncrementHome() {
  startingHomeVal += 2;
  homeEl.textContent = startingHomeVal;
}

function plusTwoIncrementGuest() {
  startingGuestVal += 2;
  guestEl.textContent = startingGuestVal;
}
// Function for +3

function plusThreeIncrementHome() {
  startingHomeVal += 3;
  homeEl.textContent = startingHomeVal;
}

function plusThreeIncrementGuest() {
  startingGuestVal += 3;
  guestEl.textContent = startingGuestVal;
}

//Function for Reset
