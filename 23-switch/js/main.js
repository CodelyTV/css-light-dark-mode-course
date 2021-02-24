function setUpThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  let isDarkThemeOn = false;

  themeToggle.addEventListener("change", () => {
    document.documentElement.classList.toggle("dark-theme");
    isDarkThemeOn = !isDarkThemeOn;
  });
}

window.onload = setUpThemeToggle();
