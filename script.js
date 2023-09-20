//console.log(window, {document});
let title = document.getElementById('title');
console.log({title});
setTimeout(() =>{
    title.innerText = 'Goodbye JS';
}, 5_000);
setTimeout(() =>{
    title.innerText = 'Hubbbbaaaaaa';
    title.style.background = 'coral'
}, 7_000);
setTimeout(() =>{
    title.innerText = 'Goooooodddbyeeeeeeeeee Java Scripture';
    title.classList.add('green');
}, 7_500);
let r, g, b;
setInterval(() =>{
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
    if(title.classList.contains('green')) {
        title.classList.replace('green', 'red');
    } else {
        title.classList.replace('red', 'green');
    }
}, 1000);

let textinput = document.querySelector('#textinput');
textinput.addEventListener('input', evt => {
    console.log(evt);
    title.innerText = textinput.value.split('').reverse().join('');
});