let userContainer = document.querySelector(".userContainer");
let searchInput = document.querySelector("#searchInput");


const users = [
    {
        profileUrl:"https://imgs.search.brave.com/VowRd5WcnObqa4fCTWIqYGT73zyzPGIsZSmkXFmo-sA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bW9kZWwtaW4td2Fy/bS1saWdodC1wb3Np/bmcuanBnP3dpZHRo/PTEwMDAmZm9ybWF0/PXBqcGcmZXhpZj0w/JmlwdGM9MA",
        name: "julie",
        email:"julie@mail.com"
    },
    {
       profileUrl:"https://imgs.search.brave.com/7Z5-AlaSi-2YWGhT1YahX-moQvQr7w40EYXrQA95Byg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzIzLzg2/LzIxLzIzODYyMTE2/ODAzMTc4MjRjYTE0/YzM4ZjZiOWJlM2Zj/LmpwZw",
        name: "john",
        email:"john@mail.com"  
    },
    {

    }
]

function renderUsers(arr) {
    userContainer.innerHTML = "";
    arr.map((obj) => {

    let {profileUrl, name, email} = obj; //destructuring

    let divElem = document.createElement("div");
    divElem.className = "userItem";
    divElem.innerHTML = `
                <img src="${profileUrl}">
               <div class="userDetails">
                <h3>${name}</h3>
                <p>${email}</p>
               </div>
            `;
    userContainer.append(divElem);
});
};

renderUsers(users);

function handleSearch (e) {
    let searchValue = e.target.value;
    let filteredUsers = users.filter((obj) => {
        return obj.name.toLowerCase().includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase())
    });
    renderUsers(filteredUsers);
}

searchInput.addEventListener("input",handleSearch);