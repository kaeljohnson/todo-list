if (typeof(Storage) !== "Undefined") {
}
else {
    alert("Browser does not support local storage!");
}
let todoListStorage = [];
let doneStorage = [];

const todoBtn = document.getElementById('Add');
const todoList = document.getElementById('list');
const doneList = document.getElementById('list2');


//EVENTS
document.addEventListener('DOMContentLoaded', getTodoList)
document.addEventListener('DOMContentLoaded', getDoneList)
todoBtn.addEventListener("click", add);
todoList.addEventListener("click", doneCheck);
doneList.addEventListener("click", deleteGood);

function add() {
    //MAKE SURE USERS ARE INPUTTING VALUES
    if (document.getElementById('Event').value == "" || 
        document.getElementById('Day').value == "" || 
        document.getElementById('Time').value == "") {
            alert("Please fill in all fields!");
            return false;
    }

    event.preventDefault();

    //MOVE USER INPUT TO TODOLIST
    const newItem = document.createElement('li');
    const newEvent = document.getElementById("Event").value;
    const newDay = document.getElementById("Day").value;
    const newTime = document.getElementById("Time").value;
    todoList.appendChild(newItem);
    newItem.append(newEvent + ". ");
    newItem.append(newDay + ". ");
    newItem.append(newTime + ". ");

    const completedBtn = document.createElement("button");
    completedBtn.id = "doneBtn";
    completedBtn.innerHTML = "Done";

    //STORE DATA TO LOCAL STORAGE
    if (localStorage.getItem("todoListStorage") === null) {
        todoListStorage = [];
    }
    else {
        todoListStorage = localStorage.getItem("todoListStorage").split(',');
    }

    console.log(newItem.innerText);
    todoListStorage.push(newItem.innerText);
    localStorage.setItem("todoListStorage", todoListStorage);

    //ADD COMPLETED BUTTON
    newItem.appendChild(completedBtn);

    //SET INPUT VALUES BACK TO EMPTY
    document.getElementById('Event').value = null;
    document.getElementById('Day').value = null;
    document.getElementById('Time').value = null;    
}

function doneCheck() {
    event.preventDefault();
    //MOVE TODO ITEMS TO DONE ITEMS
    const doneItem = document.createElement('li');
    const item = event.target;
    let itemText = 
        item.parentNode.innerText.substring(0,item.parentNode.innerText.length-4); 
    

    for (let i = 0; i < todoListStorage.length; i++) {
        if (todoListStorage[i] + " " == itemText) { 
            todoListStorage.splice(i, 1);
            localStorage.setItem("todoListStorage", todoListStorage);
        }    
    }

    let doneItemEvent;
    if (item.id == "doneBtn") { 
        item.parentNode.remove(item);
        doneItemEvent = 
            item.parentNode.innerText.substring(0,item.parentNode.innerText.length-4);
        doneItem.innerText += doneItemEvent;

        //CREATE DELETE BUTTON
        const trashBtn = document.createElement("button");
        trashBtn.id = "trashBtn";
        trashBtn.innerHTML = "Delete";

        //PUT ITEM ON DONE LIST AND APPEND THE DELETE BUTTON TO IT
        doneList.appendChild(doneItem);
        if (localStorage.getItem("doneStorage") === null) {
            doneStorage = [];
        }
        else {
            doneStorage = localStorage.getItem("doneStorage").split(',');
        }
    
        doneStorage.push(doneItem.innerText);
        localStorage.setItem("doneStorage", doneStorage);
        doneItem.appendChild(trashBtn);
    }
}

function deleteGood() {
    const item = event.target;
    if (item.id == "trashBtn") { 
        item.parentNode.remove(item);
    }

    let itemText = item.parentNode.innerText.substring(0,item.parentNode.innerText.length-6);
    console.log(itemText);
    for (let i = 0; i < doneStorage.length; i++) {
        console.log(doneStorage[i]);
        if (doneStorage[i] + " " == itemText) {   
            doneStorage.splice(i, 1);
            localStorage.setItem("doneStorage", doneStorage);
        }    
    }
}


//RETRIEVE DATA FROM LOCAL STORAGE
function getTodoList() {
    if (localStorage.getItem("todoListStorage") === null) {
        todoListStorage = [];
    }
    else {
        todoListStorage = localStorage.getItem("todoListStorage").split(',');
    }

    todoListStorage.forEach(function(todoItem) {
        const newItem = document.createElement('li');
        newItem.innerText = todoItem + " ";

        if (todoItem == "" || todoItem == null) {
        }
        else {
            todoList.appendChild(newItem);
    
            const completedBtn = document.createElement("button");
            completedBtn.id = "doneBtn";
            completedBtn.innerHTML = "Done";

            newItem.appendChild(completedBtn);
        }
    });
}

function getDoneList() {
    //console.log("Hello");
    //let todoListStorage;
    if (localStorage.getItem("doneStorage") === null) {
        doneStorage = [];
    }
    else {
        doneStorage = localStorage.getItem("doneStorage").split(',');
    }

    doneStorage.forEach(function(todoItem) {
        const newItem = document.createElement('li');
        newItem.innerText = todoItem + " ";

        if (todoItem == "" || todoItem == null) {
        }
        else {
            doneList.appendChild(newItem);
    
            const completedBtn = document.createElement("button");
            completedBtn.id = "trashBtn";
            completedBtn.innerHTML = "Delete";

            newItem.appendChild(completedBtn);
        }
    });
}

document.getElementById("currentDate").innerHTML = new Date();