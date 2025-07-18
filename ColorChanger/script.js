let randomBtn = document.querySelector(".randomBtn");
let body = document.querySelector("body");
let colorInput = document.querySelector("#colorInput");
let applybtn = document.querySelector(".applybtn");
let currentColorValue = document.querySelector(".currentColorValue");

const colorArray = ["blue","green","red","cyan","aqua","brown","violet","pink"];

const generateRandomColor = () => {
    let randomNumber = Math.floor(Math.random()*colorArray.length);
    return colorArray[randomNumber];
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

randomBtn.addEventListener("click",handleRandomBtnClick);
applybtn.addEventListener("click",handleApplyBtnClick);
