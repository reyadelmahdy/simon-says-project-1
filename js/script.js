// Sets the variables referenced within the game

let on = false; //Detects on or off
let win; // Checks whether the win conditions have been met or not
let order = [];// Where the computers turns are stored
let level; // Track the current level so it can be displayed
let light; // Tracks which section should light up in response to the number generated
let intervalId; // Sets the interval between colours flashing
let compTurn; // Sets when it is the computers turn or not
let playerOrder = []; // Tracks what the player is doing
let success; // Tracks if the players input was successful
let mode = false; // Detects if hard mode is on or not
var toggle = document.querySelector('.container');
var toggleContainer = document.querySelector('#toggle-container');
var toggleNumber;

// Set of constants that are used to reference elements in HTML to add the interactivity to the application

const onButton = document.querySelector("#on");
const levelCounter = document.querySelector("#level");
const gameStart = document.querySelector('.start');
const greenSection = document.querySelector("#greensection");
const redSection = document.querySelector("#redsection");
const yellowSection = document.querySelector("#yellowsection");
const blueSection = document.querySelector("#bluesection");
const modeButton = document.querySelector(".mode");

// Checks if the mode button is on or off, added a different style to the button to make it clearer
// Also animates the mode difficulty button and ties it to the proper elelments with the HTML

toggle.addEventListener('click', function() {
	toggleNumber = !toggleNumber;
	if (toggleNumber) {
		toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
		toggleContainer.style.backgroundColor = '#FF0000';
		mode = true;
	} else {
		toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
		toggleContainer.style.backgroundColor = '#26CA28';
		mode = false;
	}
});

// Checks that game is on otherwise the game will be blank and nothing will be able to be interacted with

onButton.addEventListener('click', (event) => {
  if (onButton.checked == true) {
    on = true;
  } else {
    on = false;
    levelCounter.innerHTML = "";
    darkColor();
    clearInterval(intervalId);
    gameStart.removeAttribute("disabled");// Turning the game off will enable the start button again
    location.reload();// Turning the power off will refresh the browser
  }
});

// Tracks when the game starts and jumps to the play function

gameStart.addEventListener('click', (event) => {
  if (on == true || win) {
    gameStart.setAttribute("disabled", "disabled");// Once the button has been clicked, it will become disabled
    play();
  }
});

// Play controller that runs through an algorithm to show the computers turn. It also displays the level and logs the players response

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
  
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
}

// Control for when it will be the players turn and when it is the computers turn

function gameTurn() {
  on = false;

  if (light == level) {
    clearInterval(intervalId);
    compTurn = false;
    darkColor();
    on = true;
  }
// Aligns the numbers 1-4 with the different segments and calls the function to light the correct sequence of colours for the computer
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

// Sets the functions that will be called in response to the numbers in the order array

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

// Colours when the sections have not been clicked

function darkColor() {
  greenSection.style.backgroundColor = "darkgreen";
  redSection.style.backgroundColor = "darkred";
  yellowSection.style.backgroundColor = "goldenrod";
  blueSection.style.backgroundColor = "darkblue";
}

// When the sections have been clicked

function lightColor() {
  greenSection.style.backgroundColor = "lightgreen";
  redSection.style.backgroundColor = "tomato";
  yellowSection.style.backgroundColor = "lightyellow";
  blueSection.style.backgroundColor = "lightskyblue";
}

// Tracks when the player has clicked the greensection

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

// Tracks when the player has clicked the redsection

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

// Tracks when the player has clicked the yellowsection

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

// Tracks when the player has clicked the bluesection

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

// Function to check the game should still be running and checks player fail state

function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    success = false;

  if (playerOrder.length == 20 && success) {
    winGame(); // Sets the win condition for the game
  }

// States what happens when you fail a level, the turn counter will print ERR! and reset the level
  if (success == false) {
    lightColor();
    levelCounter.innerHTML = "ERR!";
    setTimeout(() => {
      levelCounter.innerHTML = level;
      darkColor();
      alert("Well done you made it to level " + level + "! Close this message to try and beat your score!");// Alert to freeze browser when the player fails
      // States the conditon for 'Hard' mode and the game will restart on failure
      if (mode) {
        play();
      } else {
        compTurn = true;
        light = 0;
        playerOrder = [];
        success = true;
        intervalId = setInterval(gameTurn, 800);
      }
    }, 100); //Interval reduced to prevent player clicking when they shouldn't
  }
  
  // Keeps increasing the turns based on success and not winning the game

  if (level == playerOrder.length && success && !win) {
    level++;
    playerOrder = [];
    compTurn = true;
    light = 0;
    levelCounter.innerHTML = level;
    intervalId = setInterval(gameTurn, 800);
  }

}

// What happens when the game has been completed

function winGame() {
  lightColor();
  levelCounter.innerHTML = "WIN!";
  on = false;
  win = true;
}

