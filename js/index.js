var tasksList = document.querySelector('.list');
var tasks = [];
var clearAll = document.querySelector('.clearAllBtn');
var input = document.querySelector('#input');
var enterTask = document.querySelector('.enter');

//enter the tasks
enterTask.addEventListener('click', function(){
   tasks.push(input.value);
   displayTask();
   input.value = "";
});

// display tasks
function displayTask() {
   tasksList.innerHTML = "";
   for (var i = 0; i < tasks.length; i++)
   tasksList.innerHTML += "<div class='oneTask'>" + tasks[i] + "<span class='editTask'>" + "&check;" + "</span>" + "<span class='deleteTask'>" + "&times" + "</span>" + "</div>";
}

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
   tasks = [];
   displayTask();
})
