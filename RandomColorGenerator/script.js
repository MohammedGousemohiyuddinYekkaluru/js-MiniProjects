let randomBtn = document.querySelector(".randomBtn");
let body = document.querySelector("body");
let colorInput = document.querySelector("#colorInput");
let applybtn = document.querySelector(".applybtn");
let currentColorValue = document.querySelector(".currentColorValue");

const generateRandomColor = () => {
   let hexValues = "0123456789abcdef";
   let colors = "#";
   for(i=0; i<6; i++){
    colors += hexValues[Math.floor(Math.random()*16)];
   }
   return colors;
}

const changeColor = (color) => {
    body.style.backgroundColor = color;
    currentColorValue.innerText = color; 
}

const handleRandomBtnClick = () => {
    let color = generateRandomColor();
    changeColor(color);
}

const handleApplyBtnClick = () => {
    let color = colorInput.value;
    changeColor(color);
}

const copyColorCode = () => {
    navigator.clipboard.writeText(currentColorValue.innerText);
}

randomBtn.addEventListener("click",handleRandomBtnClick);
applybtn.addEventListener("click",handleApplyBtnClick);
currentColorValue.addEventListener("click",copyColorCode);