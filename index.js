const input = document.getElementById("input");
const addButton = document.getElementById("add");
const list = document.getElementById("list");

addButton.addEventListener("click", addTodo);

function addTodo() {
  const TodoText = input.value.trim();
  if (TodoText === "") return;

  const listItem = document.createElement("li");
  listItem.textContent = TodoText;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  listItem.appendChild(removeButton);
  list.appendChild(listItem);
  input.value = "";
}
