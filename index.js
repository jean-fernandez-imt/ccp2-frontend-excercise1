(function () {
  const letters = /[a-zA-Z]/;
  const numbers = /[0-9]/;
  const specials = /[ !"#\$%&'\(\)\*\+,-\./:;<=>\?@\[\\\]\^_`\{\|\}~]/;

  const name = document.getElementById('name');
  const email = document.getElementById('email');

  const password1 = document.getElementById('password1');
  const password2 = document.getElementById('password2');

  const warning1 = document.getElementById('warning1');
  const warning2 = document.getElementById('warning2');
  
  const passwordValidation = () => {
    if (
      password1.value.length < 12 ||
      !letters.test(password1.value) ||
      !numbers.test(password1.value) ||
      !specials.test(password1.value)
      ) {
      warning1.innerHTML = "";
      const paragraph = document.createElement("p");
      paragraph.textContent = "12 or more combination of letters, numbers and symbols.";
      warning1.append(paragraph);
    } else {
      warning1.innerHTML = "";

      if (password2.value !== password1.value) {
        warning2.innerHTML = "";
        const paragraph = document.createElement("p");
        paragraph.textContent = "Oops... Passwords are not matching.";
        warning2.append(paragraph);
      } else {
        warning2.innerHTML = "";
        if(name.value !== "" && email.value !== "") {
          document.getElementById("newAccount").reset();
        }
      }
    }
  };

  const createButton = document.getElementById('create');

  document.addEventListener("DOMContentLoaded", () => {
    createButton.onclick = passwordValidation;
  });
})()