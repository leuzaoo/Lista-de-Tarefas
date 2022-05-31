const inputElement: HTMLInputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
  const inputIsValid = validateInput();

  console.log(inputIsValid)

  if (!inputIsValid) {
    return inputElement.classList.add("error");
  }
};

const handleInputChange = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    return inputElement.classList.remove("error");
  }
}

addTaskButton.addEventListener("click", () => handleAddTask());

export {};
