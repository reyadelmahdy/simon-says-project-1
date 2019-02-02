let on = false;
let win;
let order = [];
let level;
let light;
let intervalId;
let compTurn;

const onButton = document.querySelector("#on");
const levelCounter = document.querySelector("#level");
const gameStart = document.querySelector('.start');
const greenSection = document.querySelector("#greensection");
const redSection = document.querySelector("#redsection");
const yellowSection = document.querySelector("#yellowsection");
const blueSection = document.querySelector("#bluesection");

onButton.addEventListener('click', (event) => {
  if (onButton.checked == true) {
    on = true;
  } else {
    on = false;
    levelCounter.innerHTML = "";
  }
});

gameStart.addEventListener('click', (event) => {
  if (on || win) {
    play();
  }
});

function play() {
  win = false;
  order = [];
  light = 0;
  intervalId = 0;
  level = 1;
  levelCounter.innerHTML = 1;
  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1); 
  }
  
  console.log(order);
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
  on = false;

  if (light == level) {
    clearInterval(intervalId);
    compTurn = false;
    darkColor();
    on = true;
  }
//aligns the numbers 1-4 with the different segments and calls the function to light the correct sequence of colours
  if (compTurn) {
    darkColor();
    setTimeout(() => {
      if (order[light] == 1) green();
      if (order[light] == 2) red();
      if (order[light] == 3) yellow();
      if (order[light] == 4) blue();
      light++;
    }, 200);
  }
}

function green() {
  greenSection.style.backgroundColor = "lightgreen";
}

function red() {
  redSection.style.backgroundColor = "tomato";
}

function yellow() {
  yellowSection.style.backgroundColor = "yellow";
}

function blue() {
  blueSection.style.backgroundColor = "lightskyblue";
}

function darkColor() {
  greenSection.style.backgroundColor = "darkgreen";
  redSection.style.backgroundColor = "darkred";
  yellowSection.style.backgroundColor = "goldenrod";
  blueSection.style.backgroundColor = "darkblue";
}

function lightColor() {
  greenSection.style.backgroundColor = "lightgreen";
  redSection.style.backgroundColor = "tomato";
  yellowSection.style.backgroundColor = "lightyellow";
  blueSection.style.backgroundColor = "lightskyblue";
}