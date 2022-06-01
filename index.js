var inputElement = document.querySelector(".new-task-input");
var addTaskButton = document.querySelector(".new-task-button");
var tasksContainer = document.querySelector(".tasks-container");
var validateInput = function () { return inputElement.value.trim().length > 0; };
var handleAddTask = function () {
    var inputIsValid = validateInput();
    console.log(inputElement);
    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }
    var taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");
    var taskContent = document.createElement("p");
    taskContent.innerText = inputElement.value;
    taskContent.addEventListener("click", function () { return handleClick(taskContent); });
    var deleteItem = document.createElement("i");
    deleteItem.classList.add("far");
    deleteItem.classList.add("fa-trash-alt");
    deleteItem.addEventListener("click", function () {
        return handleDeleteClick(taskItemContainer, taskContent);
    });
    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);
    tasksContainer.appendChild(taskItemContainer);
    inputElement.value = "";
};
var handleClick = function (taskContent) {
    var tasks = tasksContainer.childNodes;
    for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
        var task = tasks_1[_i];
        console.log(task.firstChild);
        if (task.firstChild.isSameNode(taskContent)) {
            task.firstChild.classList.toggle("completed");
        }
    }
};
var handleDeleteClick = function (taskItemContainer, taskContent) {
    var tasks = tasksContainer.childNodes;
    for (var _i = 0, tasks_2 = tasks; _i < tasks_2.length; _i++) {
        var task = tasks_2[_i];
        if (task.firstChild.isSameNode(taskContent)) {
            taskItemContainer.remove();
        }
    }
};
var handleInputChange = function () {
    var inputIsValid = validateInput();
    if (inputIsValid) {
        return inputElement.classList.remove("error");
    }
};
addTaskButton.addEventListener("click", handleAddTask);
inputElement.addEventListener("change", handleInputChange);
