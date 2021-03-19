function setUpThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");

  themeToggle.addEventListener("change", () => {
    document.documentElement.classList.toggle("dark-theme");
  });
}

window.onload = setUpThemeToggle();
