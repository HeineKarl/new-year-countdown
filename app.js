const body = document.querySelector("body");
const select = document.querySelector("#colors");

// select.selectedIndex()
select.addEventListener("change", changeColor);

window.addEventListener("load", changeColor);

function changeColor() {
  const selectedValue = select.value;

  switch (selectedValue) {
    case "dim red":
      body.style.background =
        "linear-gradient(125deg, #300211, #440921, #692c32)";
      break;

    case "ice green":
      body.style.background =
        "linear-gradient(125deg, #022430, #093444, #2c4f69)";
      break;

    default:
      body.style.background =
        "linear-gradient(125deg, #1e0230, #090c44, #2c2f69)";
      break;
  }
}

function setFireworks() {
  const fireworksEl = document.querySelectorAll(".fire");
  const fireworks = Array.from(fireworksEl);
  const ids = [
    "firework1",
    "firework2",
    "firework3",
    "firework4",
    "firework5",
    "firework6",
    "firework7",
    "firework8",
    "firework9",
    "firework10",
  ];
  let eachFirework = 0;
  fireworks.forEach((firework) => {
    firework.classList.add("firework");
    firework.setAttribute("id", `${ids[eachFirework]}`);
    eachFirework++;
    if (eachFirework === fireworks.length) {
      return;
    }
  });
}

function fireworks(s) {
  if (s >= 10) {
    removeFireworks();
  } else {
    setFireworks();
  }
}

function animationYear() {
  const text = document.querySelector(".new-year");
  const spanText = text.textContent;
  const splitText = spanText.split("");

  text.textContent = "";

  for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
  }

  let char = 0;
  let timer = setInterval(onTick, 1000);

  function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
      complete();
      return;
    }
  }

  function complete() {
    clearInterval(timer);
    timer = null;
  }
}

// const newYear = document.querySelector(".new-year");
// function thisyear() {
//   const year = new Date().getFullYear() + 1;
//   newYear.textContent = year;
//   // newYear.textContent = "";
//   console.log(year);
// }
// thisyear();

function pickDate() {
  const countDate = new Date("Jan 01, 2023 00:00:00").getTime();
  // const countDate = new Date(
  //   `Jan 1, ${newYear.textContent} 00:00:00`
  // ).getTime();
  let now = new Date().getTime();
  let gap = countDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  const dayEl = document.querySelector(".day-value");
  const hourEl = document.querySelector(".hour-value");
  const minuteEl = document.querySelector(".minute-value");
  const secondEl = document.querySelector(".second-value");

  const dayUnitEl = document.querySelector(".day-unit");
  const hourUnitEl = document.querySelector(".hour-unit");
  const minuteUnitEl = document.querySelector(".minute-unit");
  const secondUnitEl = document.querySelector(".second-unit");

  // console.log(dayEl, hourEl, minuteEl, secondEl);
  // console.log(dayUnitEl, hourUnitEl, minuteUnitEl, secondUnitEl);

  dayEl.textContent = d < 10 ? `0${d}` : d;
  hourEl.textContent = h < 10 ? `0${h}` : h;
  minuteEl.textContent = m < 10 ? `0${m}` : m;
  secondEl.textContent = s < 10 ? `0${s}` : s;

  dayUnitEl.textContent = d < 2 ? "Day" : "Days";
  hourUnitEl.textContent = h < 2 ? "Hour" : "Hours";
  minuteUnitEl.textContent = m < 2 ? "Minute" : "Minutes";
  secondUnitEl.textContent = s < 2 ? "Second" : "Seconds";

  // console.log(d, h, m, s)

  if (s === 5 && m === 0 && h === 0 && d === 0) {
    clearInterval(intervalPickDate);
    clearAfter();
  }
  if (s === 25 && m === 0 && h === 0 && d === 0) {
    countInterval();
  }

  // negative seconds clear countdown
  // if (s < 0) {
  //   clearAfter();
  //   // animationYear();
  //   // setFireworks();
  //   // clearInterval(intervalPickDate);
  // }
}

let intervalPickDate = setInterval(pickDate, 1000);

function clearAfter() {
  const countdown = document.querySelector(".countdown");
  countdown.style.display = "none";
}

function countInterval() {
  let counter = 25;
  let interval = setInterval(test, 1000);
  function test() {
    counter--;
    // console.log(counter)
    if (counter === 1) {
      setFireworks();
    }
    if (counter === 0) {
      clearInterval(interval);
      counter = null;
      animationYear();
    }
  }
}
