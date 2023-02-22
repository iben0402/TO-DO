function displayTasks() {
    var arrayString = localStorage.getItem("Tasks");
    var tasks = JSON.parse(arrayString);
    console.log(tasks);
    var taskPlace = document.getElementById("taskList");
    

    tasks.forEach(function(element) {
        var paragraph = document.createElement("p");
        paragraph.textContent = element;
        taskPlace.appendChild(paragraph);
    });
}