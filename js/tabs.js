export function setupTabs() {
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');
  const todolistTab = document.querySelector('[data-tab="todolist"]');
  const homeSection = document.querySelector("#home");
  const converterSection = document.querySelector("#converter");
  const todolistSection = document.getElementById("todolist");

  homeLink.addEventListener("click", () => {
    converterSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
    todolistSection.classList.add("hidden");
  });

  converterTab.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    converterSection.classList.remove("hidden");
    todolistSection.classList.add("hidden");
  });

  todolistTab.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    converterSection.classList.add("hidden");
    todolistSection.classList.remove("hidden");
  });
}
