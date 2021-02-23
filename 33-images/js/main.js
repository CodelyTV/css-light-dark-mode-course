function setUpThemeToggle() {
  const themeBtn = document.getElementById("themeToggle");
  let isDarkThemeOn = false;

  themeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");
    isDarkThemeOn = !isDarkThemeOn;
  });
}

window.onload = setUpThemeToggle();
