var tasksList = document.querySelector('.list');
var clearAll = document.querySelector('.clearAllBtn');
var input = document.querySelector('#input');
var enterTask = document.querySelector('.enter');

//enter tasks
enterTask.addEventListener('click', function(){
   if (input.value !== "") {
   var tasks = document.createElement("div");
   tasks.classList.add("oneTask");
   tasks.innerHTML += input.value + "<span class='editTask'>" + "&check;" + "</span>" + "<span class='deleteTask'>" + "&times" + "</span>";
   tasksList.appendChild(tasks);
   }
   input.value = "";
})

// mark task complete and delete one task
tasksList.addEventListener('click', function(e) {
   var completedTask = e.target;
   var completedTaskParent = completedTask.parentElement
   if (completedTask.classList[0] === 'editTask') {
      completedTaskParent.classList.toggle("completed");
   } else if (completedTask.classList[0] === 'deleteTask') {
      completedTaskParent.remove();
   }
   console.log(tasks);
})

//delete all tasks
clearAll.addEventListener('click', function () {
   tasksList.innerHTML = "";
})
