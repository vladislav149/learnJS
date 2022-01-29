const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
}

function changeStatus(task,status) {
    list[task] = status;
}

function addTask(newTask) {
     list[newTask] = "To Do";
}

function deleteTask(delTask) {
    delete list[delTask];
}

function showList() {    
    for (let i = "To Do";;) {
        console.log(i+":");
        for (let key in list) {
            if (list[key] == i) {
                console.log(`   "${key}",`)
            }
        }
        if (i == "To Do") {
            i = "In Progress"
        } else if (i == "In Progress") {
            i = "Done"
        } else break
    }
}

addTask("jump on bed");
addTask("have a walk");
addTask("watching TV");
changeStatus("jump on bed", "Done");
changeStatus("watching TV", "In Progress");
deleteTask("watching TV");
showList();