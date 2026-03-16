export function setupTabs() {
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');
  const homeSection = document.querySelector("#home");
  const converterSection = document.querySelector("#converter");

  homeLink.addEventListener("click", () => {
    converterSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
    flashcardsSection.classList.add("hidden");
  });

  converterTab.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    converterSection.classList.remove("hidden");
    flashcardsSection.classList.add("hidden");
  });

  flashcardsTab.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    converterSection.classList.add("hidden");
    flashcardsSection.classList.remove("hidden");
  });
}
