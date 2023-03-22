const time = document.querySelector(".time");

const getTime = () => {
  const date = new Date();
  let hour = date.getHours(); // hour
  let min = date.getMinutes(); //minute
  let sec = date.getSeconds(); // second
  let session = `AM`;

  // 12 hour time
  if (hour > 12) {
    hour = hour - 12;
    session = `PM`;
  }

  // if time is 0 then set hour = 12
  if (hour === 0) {
    hour = `12`;
    session = `AM`;
  }

  if (hour < 10) hour = `0${hour}`; //hour =  9 -> 09
  if (min < 10) min = `0${min}`; // min = 9 -> 09
  if (sec < 10) sec = `0${sec}`; // sec = 9 -> 09

  time.innerText = `${hour} : ${min} : ${sec} ${session}`;
};

setInterval(() => {
  getTime();
}, 1000); // refresh time in every second

window.addEventListener("DOMContentLoaded", getTime); // after content loading show the time
