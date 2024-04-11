function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();
    
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        li.textContent = taskText;
        li.onclick = function() {
            li.classList.toggle("completed");
        };
        taskList.appendChild(li);
        input.value = "";
    } else {
        alert("Please enter a task!");
    }
}
