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

function pickDate() {
  const countDate = new Date("Jan 1, 2023 00:00:00").getTime();
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

  const dayEl = document.querySelector(".day");
  const hourEl = document.querySelector(".hour");
  const minuteEl = document.querySelector(".minute");
  const secondEl = document.querySelector(".second");

  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;

  // console.log(d, h, m, s)

  if (s === 5 && m === 0 && h === 0 && d === 0) {
    clearInterval(intervalPickDate);
    clearAfter();
  }
  if (s === 25 && m === 0 && h === 0 && d === 0) {
    countInterval();
  }
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
