// jshint esversion: 6

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');


function setDate() {
  const now = new Date();
  const seconds = now.getSeconds(); // Gets the seconds of the current minute
  const secondsDegrees = (seconds / 60) * 360 + 90; // corrects the 90 degree offest

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (seonds / 60) * 360 + 90;

  minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

  console.log(seconds);
}

setInterval(setDate, 1000);
