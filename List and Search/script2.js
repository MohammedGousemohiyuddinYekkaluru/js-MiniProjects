let userContainer = document.querySelector("#users");
let searchInput = document.querySelector("#searchInput");

const users = [
  {
    profileUrl:
      "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg",
    name: "Julie",
    email: "julie1231@gmail.com",
  },
  {
    profileUrl:
      "https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg",
    name: "Anastasiya Gepp",
    email: "Anastasiya@gmail.com",
  },
];

function renderUsers(arr) {
  userContainer.innerHTML = ""; // clear old list before rendering
  arr.forEach(({ profileUrl, name, email }) => {
    let divElem = document.createElement("div");
    divElem.className = "user-item";
    divElem.innerHTML = `
      <img src="${profileUrl}" alt="Profile picture of ${name}">
      <div class="user-details">
        <h3>${name}</h3>
        <p>${email}</p>
      </div>
    `;
    userContainer.append(divElem);
  });
}

renderUsers(users);

function handleSearch(e) {
  let searchValue = e.target.value.toLowerCase();
  let userItems = document.querySelectorAll(".user-item");

  users.forEach((obj, index) => {
    let isMatch =
      obj.name.toLowerCase().includes(searchValue) ||
      obj.email.toLowerCase().includes(searchValue);

    userItems[index].style.display = isMatch ? "flex" : "none";
  });
}

searchInput.addEventListener("input", handleSearch);