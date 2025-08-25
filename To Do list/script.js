let listContainer = document.querySelector(".listContainer");
let addInput = document.querySelector("#addInput");
let addBtn = document.querySelector(".addBtn");

let list = [];

function renderList(arr){
    listContainer.innerHTML ="";
    arr.map(obj => {

    let divElem = document.createElement('div');
    divElem.classList.add("tasks");
    divElem.innerHTML = `
        <p>${obj.text}</p> 
    `
    let delBtn = document.createElement('button');
    delBtn.innerText = "❌";
    divElem.append(delBtn);
    delBtn.onclick = () => {
        handleRemoveBtn(obj.id);
    }
    listContainer.append(divElem);
});
};

renderList(list);

function handleAddList(){
    if(addInput.value.trim() === "") return;
    let obj = {
        id: Date.now(),
        text: addInput.value
    }
    list.unshift(obj);
    renderList(list);
    addInput.value ="";
}

function handleRemoveBtn(id){
    list = list.filter(obj => obj.id !== id);
    renderList(list);
}

function enterBtn(e){
    if(e.key === "Enter") handleAddList();
}

addBtn.addEventListener('click', handleAddList);
addInput.addEventListener('keypress', enterBtn);