let elForm = document.querySelector(".form-js");
let elUserNameInput = document.querySelector(".username-input");
let elUserLastNameInput = document.querySelector(".user-lastname-input");
let elUserAgeInput = document.querySelector(".user-age-input");
let elUserTelInput = document.querySelector(".user-tel-input");
let elCards = document.querySelector(".cards");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let userNameInputValue = elUserNameInput.value;
  let userLastNameInputValue = elUserLastNameInput.value;
  let userAgeInputValue = elUserAgeInput.value;
  let userTelInputValue = elUserTelInput.value;

  elUserNameInput.value = "";
  elUserLastNameInput.value = "";
  elUserAgeInput.value = "";
  elUserTelInput.value = "";

  let newCard = document.createElement("div");
  newCard.setAttribute("class", "card");
  let newUserName = document.createElement("p");
  let newUserLastName = document.createElement("p");
  let newUserAge = document.createElement("p");
  let newUserTel = document.createElement("p");

  newUserName.textContent = `Ismi: ${userNameInputValue}`;
  newUserLastName.textContent = `Familiyasi: ${userLastNameInputValue}`;
  newUserAge.textContent = `Yoshi: ${userAgeInputValue}`;
  newUserTel.textContent = `Tel raqami: ${userTelInputValue}`;

  newCard.append(newUserName, newUserLastName, newUserAge, newUserTel);

  elCards.appendChild(newCard);
});
