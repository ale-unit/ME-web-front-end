
var button = document.getElementById("addTaskBtn");
var input = document.getElementById("taskInput");
var list = document.getElementById("taskList");

button.addEventListener("click", function () {
    var taskText = input.value.trim();
    if (taskText !== "") {
        var li = document.createElement("li");
        li.textContent = taskText;
        document.getElementById("taskList").appendChild(li);
        input.value = "";
        
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "x";
        li.appendChild(deleteButton);
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
        });

    }
    
    if (taskText === "") {
        alert("Por favor, insira uma tarefa antes de adicionar.");

    }

});
// JOSE ALEXANDRE MOURA DE SOUZA JUNIOR, ATHON FERNANDES CRUZ SANTOS, GIOVANNI FIGUEIREDO QUERINO