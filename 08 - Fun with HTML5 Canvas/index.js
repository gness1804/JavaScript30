const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

const draw = (e) => {
  if (isDrawing) {
    const { offsetX, offsetY } = e;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
    [lastX, lastY] = [offsetX, offsetY];
  }
};

const handleMouseDown = (e) => {
  const { offsetX, offsetY } = e;
  isDrawing = true;
  [lastX, lastY] = [offsetX, offsetY];
};

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', handleMouseDown);
canvas.addEventListener('mouseup', () => { isDrawing = false; });
canvas.addEventListener('mouseout', () => { isDrawing = false; });
