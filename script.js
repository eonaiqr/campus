const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const brushSize = document.getElementById('brushSize');

let isDrawing = false;
ctx.strokeStyle = colorPicker.value;
ctx.lineWidth = brushSize.value;

colorPicker.addEventListener('change', e => {
    ctx.strokeStyle = e.target.value;
});

brushSize.addEventListener('change', e => {
    ctx.lineWidth = e.target.value;
});

canvas.addEventListener('mousedown', e => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.closePath();
        isDrawing = false;
    }
});

canvas.addEventListener('mouseleave', e => {
    if (isDrawing === true) {
        ctx.stroke();
        ctx.closePath();
        isDrawing = false;
    }
});
