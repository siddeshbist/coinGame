//function from StackOverflow that determines if two elements are overlapping

function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

//.top defines position of element according to it top edge
//add event listener that when keydown pressed the avater top position is changed

const init = () => {
  const avatar = document.querySelector("#player");
  const coin = document.querySelector("#coin");
  moveCoin();
  window.addEventListener("keyup", function (e) {
    if (e.key === "ArrowDown" || e.key === "Down") {
      moveVertical(avatar, 50);
    } else if (e.key === "ArrowUp" || e.key === "Up") {
      moveVertical(avatar, -50);
    } else if (e.key === "ArrowRight" || e.key === "Right") {
      moveHorizontal(avatar, 50);
      avatar.style.transform = "scale(1,1)";
    } else if (e.key === "ArrowLeft" || e.key === "Left") {
      moveHorizontal(avatar, -50);
      avatar.style.transform = "scale(-1,1)";
    }
    if (isTouching(avatar, coin)) moveCoin();
  });
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

const moveVertical = (element, amount) => {
  const currTop = extractPos(element.style.top);
  element.style.top = `${currTop + amount}px`;
};

const moveHorizontal = (element, amount) => {
  const currLeft = extractPos(element.style.left);
  element.style.left = `${currLeft + amount}px`;
};

//need to remove the px to get number
const extractPos = (pos) => {
  if (!pos) return 100;
  //take out the px
  return parseInt(pos.slice(0, -2));
};

init();

//everytime there is a keypress the eventListener in init() will pick it
// do need a for loop
