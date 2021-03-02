// Get task from input
function get_todos() {
    var todos = new Array;  // creates an array of task that are input
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos
}

function add() {
    var task = document.getElementById('task').value;

    var todos = get_todos();

    todos.push(task);

    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

function show() {
    var todos = get_todos();

    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    }
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
    var buttons = document.getElementsByClassName('remove'); // when the x button is clicked, searched the array for
    for (var i = 0; i < buttons.length; i++) {              // item i. Once found, run close function
        buttons[i].addEventListener('click', close);
    }
}

document.getElementById('add').addEventListener('click', add);
show();

function close() {      //Function to remove items from the list
    var id = this.getAttribute('id');   //id = the elements id#
    var todos = get_todos();    // todos = our todo array
    todos.splice(id, 1);    //remove todos at id and remove 1 item 
    localStorage.setItem('todo', JSON.stringify(todos));    //make todos a JSON string called todo, saved in local storage
    show(); //check show function for how to display a removed item

    return false;
}