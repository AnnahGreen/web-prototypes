let toDoList = document.getElementById("to-do-container")
let inputBar = document.getElementById("input-ToDo");
let addBtn = document.getElementById("add-button");


addBtn.addEventListener('click', function(){
    // Initialize item on to do list from user input inside text box
    

    // Creating container to hold new list element.
    let listItem = document.createElement('li');
    listItem.classList.add('list-item');
    //let listItemHeight = listItem.offsetHeight;

    /* where span was previously */
    
    //console.log("parent is: ", reveal_todo.parentElement);
    
    // Append p element with user input as value.
    let listContent = document.createElement('p');
    listContent.classList.add('list-item-text');
    listContent.innerHTML = inputBar.value;
    listItem.appendChild(listContent);

    // console.log("Height: ", listItem.offsetHeight)
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
    reveal_todo.innerHTML = "a";  /* "a" used here as filler text so that the bar wil show */
    let offsetHeight = listItem.offsetHeight;
    let heightValue = offsetHeight.toString() + "px";
    reveal_todo.style.height = heightValue;
    listItem.appendChild(reveal_todo);

    
    

    // Add listeners to 'Done' and 'Remove' buttons.
    checkBtn.addEventListener('click', function() {
        toDoList.removeChild(listItem);
    });
    deleteBtn.addEventListener('click', function() {
        toDoList.removeChild(listItem);
    });

    
});

