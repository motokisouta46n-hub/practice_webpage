export function setuptodoList() {
  const addWordBtn = document.querySelector(".add-todo");
  const wordModal = document.querySelector(".modal");
  const cancelBtn = document.querySelector(".cancel-word");
  const todoForm = document.getElementById("word-form");
  const todoListContainer = document.querySelector(".todo-list");

  function showModal() {
    wordModal.classList.remove("hidden");
    document.getElementById("word-input").focus();
  }

  function hideModal() {
    wordModal.classList.add("hidden");
    wordForm.reset();
  }

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); // ページのリロードを防ぐ

    const todoText = document.getElementById("todo-input").value;
    const deadline = document.getElementById("deadline-input").value;

    if (todoText && deadline) {
      addTodoItem(todoText, deadline);
      wordModal.classList.add("hidden"); // モーダルを閉じる
      todoForm.reset(); // 入力欄を空にする
    }
  });

  function addTodoItem(text, date) {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item-card"; // CSSでスタイルを当てるためのクラス名

    // カードの中身を作成
    todoItem.innerHTML = `
      <div class="todo-content">
        <span class="todo-text">${text}</span>
        <span class="todo-deadline">期日: ${date}</span>
      </div>
      <button class="delete-todo-btn">
        <span class="ri-delete-bin-line"></span>
      </button>
    `;

    // 削除ボタンの機能
    todoItem.querySelector(".delete-todo-btn").addEventListener("click", () => {
      todoItem.remove();
    });

    todoListContainer.appendChild(todoItem);
  }

  addWordBtn.addEventListener("click", showModal);
  cancelBtn.addEventListener("click", hideModal);
}
