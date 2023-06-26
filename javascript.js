function saludar() {
  alert("Hola compañeros");
}

const form = document.getElementById("myForm");

function validateForm() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert("Por favor ingrese un correo electrónico válido.");
  } else {
    alert("Correo electrónico enviado correctamente.");
  }
}
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
  return regex.test(email);
}

if (form) {
  form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});
}



let boton = document.querySelector("button.button-menu-toggle");

boton.addEventListener("click", function () {
  let lista_de_links = document.querySelector(".nav-links");

  lista_de_links.classList.toggle("nav-links-responsive");
});
