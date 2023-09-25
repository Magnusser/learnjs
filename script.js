// console.log(window, {document});
// setTimeout(() => {
//     document.location = 'https://google.com';
// }, 5000);
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

ctx.beginPath();
ctx.arc(100,100,50,0,2 * Math.PI);
ctx.strokeStyle = 'red'
ctx.stroke();
ctx.lineWidth = 3;
ctx.stroke();
ctx.font = 'Arial';
