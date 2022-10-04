// Masukan dulu nilai ke dalam choose login
const roles = ["Penyihir", "guard", "werewolf"];
const card = document.getElementById("card");
const nama = document.querySelector(".container .wrapper .name");
const btn = document.getElementById("btn");
const info = document.querySelector(".container .wrapper .alert");
const close = document.querySelector(".container .success .close");

let namaUser, roleUser;

let option = "";
roles.forEach((role) => {
  option += ` <option value="${role}">${role}</option>
            `;
});
// card.innerHTML = `<option disabled selected>Please choos one!</option>`;
card.innerHTML = `<option disabled selected>Please choose one!</option> ${option}`;

btn.addEventListener("click", function () {
  console.log(card.value);
  if (nama.value === "") {
    info.classList.add("error");
    return (info.innerHTML = "The field name is required!");
  }

  if (card.value === "Please choose one!") {
    info.classList.add("error");
    return (info.innerHTML = "The field role is required!");
  }

  const data = {
    nama: nama.value,
    role: card.value,
  };

  getMessage(data);
});

function getMessage(data) {
  info.classList.add("pending");
  info.innerHTML = "Checking data..";
  namaUser = data.nama;
  roleUser = data.role;

  document.querySelector(".container .wrapper").classList.add("active");
  document.querySelector(".container .success").classList.add("active");
  document.querySelector(
    ".container .success p"
  ).innerHTML = `Congratulation <span style="color:yellow">${namaUser}!</span> <br> you are now login, and you are ${roleUser}! Hihi`;
}

close.addEventListener("click", function () {
  alert("Are you logout ?");
  document.querySelector(".container .wrapper").classList.remove("active");
  document.querySelector(".container .success").classList.remove("active");

  info.classList.add("pending");
  info.innerHTML = "You are now logout";
  nama.value = "";
  card.value = "Please choose one!";

  setTimeout(() => {
    info.classList.remove("pending");
  }, 3000);
});
