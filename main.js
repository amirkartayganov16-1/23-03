const box1 = document.querySelector(".box1");

let x = 0;
let y = 0;
let dx = 5;
let dy = 5;

const moveBox = () => {
    if (x <= 449) {
      x++
      box1.style.left = `${x}px`
      setTimeout(moveBox, 1)
    } else if (x >= 449 && y <= 449) {
      y++
      box1.style.top = `${y}px`
      setTimeout(moveBox, 1)
    } else if (dx <= 449) {
      dx++
      box1.style.top = `${dx}px`
      setTimeout(moveBox, 1)
    } else if (dx <= 449 && dy >= 449) {
      dy++
      box1.style.top = `${dy}px`
      setTimeout(moveBox, 1)
}}
function checkInn() {
  const inn = document.getElementById("inn").value;
  const regex = /^\d{10}|\d{12}$/;

  if (regex.test(inn)) {
    console.log('ИНН верный')
  } else {
    console.log('Неверный ИНН')
  }
}

const counter = document.getElementById("counter");
let intervalId;

function startCounter() {
  let count = parseInt(counter.textContent);

  intervalId = setInterval(() => {
    count++;
    counter.textContent = count;
  }, 1000);
}

function stopCounter() {
  clearInterval(intervalId);
}

document.getElementById("start").addEventListener("click", startCounter);
document.getElementById("stop").addEventListener("click", stopCounter);