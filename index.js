const addButton = document.getElementById("add-button");
const newTask = document.getElementById("add-new-task");
const tasksList = document.getElementById("tasks-list");

function displayAlert() {
  const valueInput = newTask.value;
  if (valueInput === "") {
    alert("Nazwa zadania nie może być pusta");
  } else {
    createTask();
  }
}

addButton.addEventListener("click", displayAlert);

function createTask() {
  const task = document.createElement("li");
  const taskText = document.createElement("span");
  const editButton = document.createElement("button");
  editButton.innerText = "Edytuj";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Usuń";
  taskText.textContent = newTask.value;
  newTask.value = "";

  deleteButton.addEventListener("click", function () {
    task.remove();
  });

  editButton.addEventListener("click", function () {
    editButton.remove();
    const approveButton = document.createElement("button");
    const editTaskInput = document.createElement("input");
    approveButton.innerText = "Zatwierdź zmiany";
    editTaskInput.type = "text";
    editTaskInput.value = taskText.textContent;
    taskText.style.display = "none";
    task.insertBefore(approveButton, deleteButton);
    task.prepend(editTaskInput);

    approveButton.addEventListener("click", function () {
      const newValueTask = editTaskInput.value;
      if (newValueTask === "") {
        alert("Nazwa zadania nie może być pusta");
      } else {
        taskText.innerText = newValueTask;
        taskText.style.display = "inline";
        task.prepend(taskText);
        task.insertBefore(editButton, deleteButton);
        editTaskInput.remove();
        approveButton.remove();
      }
    });
  });

  tasksList.append(task);
  task.appendChild(taskText);
  task.append(editButton, deleteButton);
}
