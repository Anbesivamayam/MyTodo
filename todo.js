// Getting all The variables

var MaintodoContainer = document.getElementById("todos"); //My main div
var input = document.querySelector(".todo_input"); //  searchbar
var addingBtn = document.querySelector(".add-item"); // add button
var deleteAllBtn = document.querySelector(".deleteBtn"); // Deletebutton

input.addEventListener("keyup", function () {
  //  var count= document.getElementById('count').innerHTML;
  //  var len= input.value.length;
  //  count.textContent = len;
  document.getElementById("count").innerHTML =
    "Char typed: " + input.value.length;
});

addingBtn.addEventListener("click", function (e) {
  if (input.value.trim()) {
    // console.log(input.value);

    var ulTag = document.createElement("ul"); // Creating List to store Notes.
    ulTag.classList.add("todo-list-container"); // Class for the list.
    // console.log(ulTag);

    // Creating a Div to store my list
    var todoList = document.createElement("div");
    todoList.classList.add("todo-list");
    // console.log(todoList);

    var liTag = document.createElement("li");
    liTag.classList.add("todo-items");
    liTag.innerHTML = input.value;
    // console.log(liTag);

    var buttonDiv = document.createElement("div");
    buttonDiv.classList.add("button");
    // console.log(buttonDiv);

    //CRUD OPERATIONS Button ICONS
    var completeButton = document.createElement("button");
    completeButton.classList.add("complete");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';

    var editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editBtn.onclick = function () {
      editNote(liTag);
    };

    var trashButton = document.createElement("button");
    trashButton.classList.add("trash");
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    // console.log(completeButton);

    // Appending each elements in respective div
    ulTag.appendChild(todoList);
    todoList.appendChild(liTag);
    todoList.appendChild(buttonDiv);
    buttonDiv.appendChild(completeButton);
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(trashButton);
    // console.log(ulTag);

    //Appending to main Div
    MaintodoContainer.appendChild(ulTag);
    // console.log(MaintodoContainer);

    // Striking and delete
    todoList.addEventListener("click", function (e) {
      var items = e.target;
      // console.log(e.target);
      if (items.classList[0] === "complete") {
          var todo = items.parentElement;
          var todo2 = todo.parentElement;
          todo2.classList.add("strike");         
    }
    else if (items.classList[0] === "complete") {
      var todo = items.parentElement;
      todo2.classList.remove("strike");         
      // todo2.classList.add("removeStrike");         
}
       else if (items.classList[0] === "trash")
        {
        var todo = items.parentElement;
        var todo2 = todo.parentElement;
        var todo3 = todo2.parentElement;
        todo2.classList.add("clear");
        todo3.remove();
        // todoList.remove();
      }
      });
    //Clearing Fields
    input.value = "";
    document.getElementById("count").innerHTML = "Max 70 Characters.";
  } else if (input.value === "") {
    alert("Enter your list to add!");
  }
});

//edit popup
function editNote(e) {
  var editValue = prompt("Edit your Notes", e.firstChild.nodeValue);
  e.firstChild.nodeValue = editValue;
}

function deleteBulk (){
  console.log('deleteme');
  var del = document.querySelectorAll('.todo-list-container');

  console.log(del);
  for(i=0;i<del.length;i++){
    del[i].remove();
  }
  console.log(i);
}