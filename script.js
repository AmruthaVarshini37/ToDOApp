function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("task-list");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.classList.add("done-btn");
  doneBtn.onclick = () => li.classList.toggle("done");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(doneBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);
  input.value = "";
}
