"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inputElement = document.querySelector(".new-task-input");
var addTaskButton = document.querySelector(".new-task-button");
var validateInput = function () { return inputElement.value.trim().length > 0; };
var handleAddTask = function () {
    var inputIsValid = validateInput();
    console.log(inputIsValid);
    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }
};
var handleInputChange = function () {
    var inputIsValid = validateInput();
    if (inputIsValid) {
        return inputElement.classList.remove("error");
    }
};
addTaskButton.addEventListener("click", function () { return handleAddTask(); });
