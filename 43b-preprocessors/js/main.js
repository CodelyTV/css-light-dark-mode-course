function setUpTheme() {
  const html = document.documentElement;
  const currentTheme = localStorage.getItem("theme");
  const themeSelector = document.getElementById("themeSelector");

  if (currentTheme) {
    html.classList.add(`${currentTheme}-theme`);
    themeSelector.value = currentTheme;
  }

  themeSelector.addEventListener("change", ({ target }) => {
    html.classList.remove("light-theme", "dark-theme");
    const theme = target.value;

    if (theme === "default") {
      localStorage.removeItem("theme");
      return;
    }

    localStorage.setItem("theme", theme);
    html.classList.add(`${theme}-theme`);
  });
}

window.onload = setUpTheme();
