let container = document.getElementsByClassName('container');
const addBtn = document.getElementById('add-task-btn');
let task = document.getElementById('task-input');


function createTask() {
    // Creating Variables
    let createdDiv = document.createElement("div");
    let createdTask = document.createElement("span");
    let createdDoneBtn = document.createElement("button");
    let createdRemoveBtn = document.createElement("button");

    //Adding classes & IDs
    createdDiv.classList.add('task-section');
    createdTask.classList.add('task');
    createdDoneBtn.classList.add('done-btn');
    createdRemoveBtn.classList.add('remove-btn');

    //Adding div to Container
    container[0].appendChild(createdDiv);
    let div = document.querySelectorAll(".task-section");
    let lastDiv = div[div.length - 1];

    // Adding other elements to created div
    lastDiv.appendChild(createdTask);
    lastDiv.appendChild(createdDoneBtn);
    lastDiv.appendChild(createdRemoveBtn);


    // Adding text to task
    lastDiv.querySelector('.task').innerText = task;
    lastDiv.querySelector('.done-btn').innerHTML = '<i class="fa-solid fa-check"></i>';
    lastDiv.querySelector('.remove-btn').innerHTML = '<i class="fa-solid fa-trash"></i>';

    //Adding class to div
    lastDiv.classList.add('active');


    lastDiv.addEventListener('click', function (e) {
        const target = e.target;
        if (target.matches('.remove-btn') || target.parentNode.matches('.remove-btn')) {
            lastDiv.remove();
        }
    });


    lastDiv.addEventListener('click', function (e) {
        const target = e.target;
        if (target.matches('.done-btn') || target.parentNode.matches('.done-btn')) {
            lastDiv.querySelector('.task').classList.toggle('done');
        }
    });

};

task.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        addBtn.click();
    }
})

addBtn.addEventListener('click', function () {
    task = document.getElementById('task-input').value;
    if (!task) {
        alert('Please enter a Task');
    } else {
        createTask();
        document.getElementById('task-input').value = "";
    }
});




