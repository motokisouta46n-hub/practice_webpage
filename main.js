// ここからコードを書いてください
// import { setUpTabs } from "./tabs.js";
// import { setUpConverter } from "./converter.js";
import { setupTabs } from "./js/tabs.js";
import { setupConverter } from "./js/converter.js";
import { setuptodoList } from "./js/todolist.js";

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  setupConverter();
  setuptodoList();
});
