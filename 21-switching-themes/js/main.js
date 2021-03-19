function setUpThemeToggle() {
  const themeBtn = document.getElementById("themeToggle");

  themeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");
  });
}

window.onload = setUpThemeToggle();
