(function () {
  const specialChars = /\!/;

  const password1 = document.getElementById('password1');
  const password2 = document.getElementById('password2');

  const warning1 = document.getElementById('warning1');
  const warning2 = document.getElementById('warning2');
  
  const passwordValidation = () => {
    console.log(specialChars.test(password1));

    if (
      password1.value.length < 12 ||
      specialChars.test(password1)
      ) {
      warning1.innerHTML = "";
      const paragraph = document.createElement("p");
      paragraph.textContent = "12 or more combination of letters, numbers and symbols.";
      warning1.append(paragraph);
    }
  };

  const createButton = document.getElementById('create');

  document.addEventListener("DOMContentLoaded", () => {
    createButton.onclick = passwordValidation;
  });
})()