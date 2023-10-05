let toDoList = document.getElementById("to-do-container")
let inputBar = document.getElementById("input-ToDo");
let addBtn = document.getElementById("add-button");


function validateInput() {
    if (inputBar.value === "") {
        alert("Input field cannot be empty.");
        return false;
    }
}

addBtn.addEventListener('click', function(){
    // Initialize item on to do list from user input inside text box

    // Only add item to list if input bar has a value. Else display an alert() notification.
    let validatedInput = validateInput();
    if (validatedInput !== false) {  /* Add input to list */
        // Creating container to hold new list element.
        let listItem = document.createElement('li');
        listItem.classList.add('list-item');
        
        // Append p element with user input as value.
        let listContent = document.createElement('p');
        listContent.classList.add('list-item-text');
        listContent.innerHTML = inputBar.value;
        listItem.appendChild(listContent);

        // 'Edit' 'Done" and 'Remove' buttons to the right. 
        /* 'Edit' button. */ let editBtn = document.createElement('button');
        editBtn.classList.add('material-symbols-outlined');
        editBtn.classList.add('edit');
        editBtn.innerHTML = "edit";
        listItem.appendChild(editBtn); 
        /* 'Remove' button. */ let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('material-symbols-outlined');
        deleteBtn.classList.add('delete');
        deleteBtn.innerHTML = "delete";
        listItem.appendChild(deleteBtn); 
        /* 'Done' button. */ let checkBtn = document.createElement('button');
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
        

        // Add listeners to 'Edit' 'Done' and 'Remove' buttons.
        checkBtn.addEventListener('click', function() {
            listContent.style.textDecorationLine = "line-through";
        });
        deleteBtn.addEventListener('click', function() {
            toDoList.removeChild(listItem);
        });
        editBtn.addEventListener('click', function() {
            let previousTxt = listContent.innerHTML;
            listContent.innerHTML="";
            let editInterface = document.createElement('div');
            let editBox = document.createElement('input');
            let acceptBtn = document.createElement('button');
            let cancelBtn = document.createElement('button');

            editInterface.appendChild(editBox);
            
            /* 'Accept' and 'Cancel' button initialization. */
            acceptBtn.innerHTML = "check_circle";
            cancelBtn.innerHTML = "cancel";
            editInterface.appendChild(acceptBtn);
            acceptBtn.classList.add('material-symbols-outlined');
            acceptBtn.classList.add('check_circle');
            editInterface.appendChild(cancelBtn);
            cancelBtn.classList.add('material-symbols-outlined');
            cancelBtn.classList.add('cancel')
            listItem.appendChild(editInterface);
            editInterface.parentNode.insertBefore(editInterface, listContent);

            /* 'Accept' and 'Cancel' button functionality. */
            acceptBtn.addEventListener('click', function() {
                listContent.innerHTML = editBox.value;
                listItem.removeChild(editInterface);
            })
            cancelBtn.addEventListener('click', function() {
                listContent.innerHTML = previousTxt;
                previousTxt = '';
                listItem.removeChild(editInterface);
            })

            
        });

    }
    
});

inputBar.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addBtn.click();
    }
});