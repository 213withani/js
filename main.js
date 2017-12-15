(function () {
    const form = document.forms.todoForm;
    const [input, button] = form.elements;
    const todoList = document.querySelector('#todoList');

    button.addEventListener('click', populateList, false);
    todoList.addEventListener('click', deleteItem, false);


    function populateList(event) {
        console.log("populateList");
        event.preventDefault();
        const li = document.createElement('li');
        const text = document.createTextNode(input.value);
        const span = document.createElement('span');
        const x = document.createTextNode('x');
        li.textContent = text.nodeValue;
        span.textContent = x.nodeValue;
        li.appendChild(span);
        console.log(li);
        todoList.appendChild(li);

    }

    function deleteItem(event) {
        const clicked = event.target;
        console.log(clicked);
        console.log(clicked.nodeName);
        if (clicked.nodeName === 'SPAN') {
            todoList.removeChild(clicked.parentNode);
        }

    }
})();