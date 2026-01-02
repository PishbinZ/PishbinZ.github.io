(() => {
  const key = "theme";
  const root = document.documentElement;

  function safeGet(k) {
    try { return localStorage.getItem(k); } catch { return null; }
  }
  function safeSet(k, v) {
    try { localStorage.setItem(k, v); } catch {}
  }

  function apply(theme) {
    root.classList.toggle("dark", theme === "dark");
    safeSet(key, theme);

    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const saved = safeGet(key);
    const prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    apply(saved || (prefersDark ? "dark" : "light"));

    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", () => {
        const next = root.classList.contains("dark") ? "light" : "dark";
        apply(next);
      });
    }
  });
})();
