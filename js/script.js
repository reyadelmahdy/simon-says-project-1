let on = false;
let win;
let order = [];
let level;


const onButton = document.querySelector("#on");
const levelCounter = document.querySelector("#level");
const gameStart = document.querySelector('.start');


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

function play(){
    win = false;
    order = [];
    level = 1;
    levelCounter.innerHTML = 1;
    for (var i = 0; i < 20; i++) { 
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  console.log(order);
}