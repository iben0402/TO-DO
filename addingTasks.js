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
    buttonElement.setAttribute("id", "AddTaskButton");

    //showing/hiding add task button depending on input field
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
    document.getElementById("AddTask").style.display = "none";
}

//Adding task to list
function AddTask() {
    //taking input, clearing input field and hiding button
    console.log("Adding task");
    inputElement = document.getElementById("TaskNameInput");
    var inputValue = inputElement.value;
    console.log(inputValue);
    inputElement.value = "";
    var buttonElement = document.getElementById("AddTaskButton");
    buttonElement.style.display = "none";

    //adding task to local storage
    var arrayString = localStorage.getItem("Tasks");
    if(arrayString == null) {
        var arrayTasks = [inputValue];
        arrayString = JSON.stringify(arrayTasks);
        localStorage.setItem("Tasks", arrayString)
    }
    else {
        var arrayTasks = JSON.parse(arrayString);
        arrayTasks.push(inputValue);
        arrayString = JSON.stringify(arrayTasks);
        localStorage.setItem("Tasks", arrayString)
        console.log(arrayTasks);
    }
    displayTasks();
}


function displayTasks() {
    var arrayString = localStorage.getItem("Tasks");
    var tasks = JSON.parse(arrayString);
    console.log(tasks);
    var taskPlace = document.getElementById("taskList");
    
    while(taskPlace.firstChild) {
        taskPlace.removeChild(taskPlace.firstChild);
    }

    tasks.forEach(function(element) {
        var paragraph = document.createElement("p");
        paragraph.textContent = element;
        taskPlace.appendChild(paragraph);
    });
}