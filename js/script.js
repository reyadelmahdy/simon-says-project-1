let on = false;

const levelCounter = document.querySelector("#level");
const onButton = document.querySelector("#on");



onButton.addEventListener('click', (event) => {
  if (onButton.checked == true) {
    on = true;
    levelCounter.innerHTML = "-";
  } else {
    on = false;
    levelCounter.innerHTML = "";
  }
});