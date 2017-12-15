(function () {
    const form = document.forms.todoForm;
    const [input, button] = form.elements;
    const todoList = document.querySelector('#todoList');

    button.addEventListener('click', populateList, false);
    todoList.addEventListener('click', deleteItem, false);

    function populateList(event) {
        // prevent form from submitting and create elements
        event.preventDefault();
        const li = document.createElement('li');
        const text = document.createTextNode(input.value);
        const span = document.createElement('span');
        const x = document.createTextNode('x');

        // set and append elements
        li.textContent = text.nodeValue;
        span.textContent = x.nodeValue;
        li.appendChild(span);
        todoList.appendChild(li);
    }

    function deleteItem(event) {
        // find the element clicked and delete its parent.
        const clicked = event.target;

        console.log(clicked.nodeName);
        if (clicked.nodeName === 'SPAN') {
            todoList.removeChild(clicked.parentNode);
        }
    }
})();