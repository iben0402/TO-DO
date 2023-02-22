//Function that shows menu to add task
function AddTask() {
    console.log("Showing menu to add task");
    var taskplace = document.getElementById("taskName");
    
    // Create a label element
    var labelElement = document.createElement("label");
    labelElement.setAttribute("for", "TaskNameInput");
    labelElement.innerHTML = "Task name:";

    // Create an input element
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("id", "TaskNameInput");
    inputElement.setAttribute("name", "TaskNameInput");

    // Create button to add task
    var buttonElement = document.createElement("button");
    buttonElement.innerHTML = "Add";
    buttonElement.className = "buttonStyle";

    // Append the label and input elements to the parent element
    taskplace.appendChild(labelElement);
    taskplace.appendChild(inputElement);
    taskplace.appendChild(buttonElement);

    // Deactivating button
    document.getElementById("AddTask").disabled = true;

    
}