export function setupTabs() {
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');
  const homeSection = document.querySelector("#home");
  const converterSection = document.querySelector("#converter");

  homeLink.addEventListener("click", (event) => {
    converterSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
  });

  converterTab.addEventListener("click", (event) => {
    converterSection.classList.remove("hidden");
    homeSection.classList.add("hidden");
  });
}
