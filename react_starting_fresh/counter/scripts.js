let number = 0;
let button = document.querySelector('.btn');
let display = document.querySelector('h2');
button.addEventListener("click",()=>{
    number++;
    display.textContent = number;
})