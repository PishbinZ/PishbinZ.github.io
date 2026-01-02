
(() => {
  const key = "theme";
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");

  function apply(theme) {
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem(key, theme);
    btn?.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  }

  const saved = localStorage.getItem(key);
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  apply(saved || (prefersDark ? "dark" : "light"));

  btn?.addEventListener("click", () => {
    const next = root.classList.contains("dark") ? "light" : "dark";
    apply(next);
  });
})();
