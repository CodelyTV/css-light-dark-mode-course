function setUpForm() {
  const form = document.getElementById("login");

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
  });
}

window.onload = setUpForm();
