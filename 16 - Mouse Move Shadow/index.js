const hero = document.querySelector('.hero');
const text = document.querySelector('h1');

function handleMouseMove(e) {
  const { offsetWidth, offsetHeight } = hero;
  let { offsetX: x, offsetY: y } = e;

  const walk = 100;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / offsetWidth) * walk - walk / 2);
  const yWalk = Math.round((y / offsetHeight) * walk - walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 #ff0000`;
}

hero.addEventListener('mousemove', handleMouseMove);
