let on = false;
let win;
let order = [];
let level;
let light;
let intervalId;
let compTurn;
let playerOrder = [];
let success;

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
  playerOrder = [];
  light = 0;
  intervalId = 0;
  level = 1;
  levelCounter.innerHTML = 1;
  success = true;
  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1); 
  }
  
  console.log(order);
  console.log(playerOrder);
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

greenSection.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(1);
    check();
    green();
    if(!win) {
      setTimeout(() => {
        darkColor();
      }, 300);
    }
  }
});

redSection.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(2);
    check();
    red();
    if(!win) {
      setTimeout(() => {
        darkColor();
      }, 300);
    }
  }
});

yellowSection.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(3);
    check();
    yellow();
    if(!win) {
      setTimeout(() => {
        darkColor();
      }, 300);
    }
  }
});

blueSection.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(4);
    check();
    blue();
    if(!win) {
      setTimeout(() => {
        darkColor();
      }, 300);
    }
  }
});

function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    success = false;

  if (playerOrder.length == 20 && success) {
    winGame(); //sets the win condition for the game
  }

//States what happens when you fail a level, the turn counter willl print ERR! and reset the level
  if (success == false) {
    lightColor();
    levelCounter.innerHTML = "ERR!";
    setTimeout(() => {
      levelCounter.innerHTML = level;
      darkColor();
      //States the conditon for 'Hard' mode and the game will restart on failure
    }, 800);
  }
  
  //keeps increasing the turns based on success and not winning the game yet

  if (level == playerOrder.length && success && !win) {
    level++;
    playerOrder = [];
    compTurn = true;
    light = 0;
    levelCounter.innerHTML = level;
    intervalId = setInterval(gameTurn, 800);
  }

}

function winGame() {
  lightColor();
  levelCounter.innerHTML = "WIN!";
  on = false;
  win = true;
}