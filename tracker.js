const input = document.getElementById("taskInput");
const button = document.getElementById("addTaskBtn");
const tasks = document.getElementById("tasks");


function addTask(){

    const text = input.value.trim();

    if(!text) return;


    const task = document.createElement("div");

    task.className = "task";


    task.innerHTML = `
        <input type="checkbox">
        <span>${text}</span>
    `;


    tasks.appendChild(task);

    input.value = "";

}



button.addEventListener("click", addTask);


input.addEventListener("keydown", e=>{

    if(e.key==="Enter"){
        addTask();
    }

});