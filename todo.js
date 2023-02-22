//Function that shows menu to add task
function CreateTask() {
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
    buttonElement.style.display = "none";


    inputElement.addEventListener("input", function()
        {
            if (inputElement.value.length > 0) {
                buttonElement.style.display = "block";
                buttonElement.onclick = AddTask;
              } else {
                buttonElement.style.display = "none";
              }
            
        }
    );

    // Append the label and input elements to the parent element
    taskplace.appendChild(labelElement);
    taskplace.appendChild(inputElement);
    taskplace.appendChild(buttonElement);

    // Deactivating button
    document.getElementById("AddTask").disabled = true;
}

//Adding task to list
function AddTask() {
    console.log("Adding task");
    inputElement = document.getElementById("TaskNameInput");
    var inputValue = inputElement.value;
    console.log(inputValue);
}