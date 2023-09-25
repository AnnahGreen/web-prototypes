let toDoList = document.getElementById("to-do-container")
let inputBar = document.getElementById("input-ToDo");
let addBtn = document.getElementById("add-button");

console.log(addBtn);

addBtn.addEventListener('click', function(){
    // Initialize item on to do list from user input inside text box
    //console.log("Button clicked.");
    // Creating container to hold new list element.
    let listItem = document.createElement('li');
    // works: console.log("listItem:", listItem);
    listItem.classList.add('list-item');
    listItem.innerHTML = inputBar.value;

    // 'Done" and 'Remove' buttons to the right.
  
    /* 'Remove' button. */ let deleteBtn = document.createElement('button');
    //console.log("check: ", deleteBtn);
    deleteBtn.classList.add('material-symbols-outlined');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = "delete";
    listItem.appendChild(deleteBtn); 
    /* 'Done' button. */ let checkBtn = document.createElement('button');
    //console.log("check: ", checkBtn);
    checkBtn.classList.add('material-symbols-outlined')
    checkBtn.classList.add('complete');
    checkBtn.innerHTML = "done";
    listItem.appendChild(checkBtn);   

    // Add new to-do to list and clear user input from bar.
    toDoList.appendChild(listItem);
    inputBar.value = "";

    // Animation to reveal to-do on list once user has clicked the 'add' button.
    let reveal_todo = document.createElement('span');
    reveal_todo.classList.add('reveal-panel');
    reveal_todo.innerHTML = "Filler text. Won't display on box. Necessary to initialize.";
    listItem.appendChild(reveal_todo);

    // Add listeners to 'Done' and 'Remove' buttons.
    checkBtn.addEventListener('click', function() {
        toDoList.removeChild(listItem);
    });
    deleteBtn.addEventListener('click', function() {
        toDoList.removeChild(listItem);
    });
});

