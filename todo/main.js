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
        const markItemToDelete = document.createElement('input');

        markItemToDelete.setAttribute('type','checkbox');
        console.log(markItemToDelete);
        // set and append elements
        li.textContent = text.nodeValue;        
        li.appendChild(markItemToDelete);
        todoList.appendChild(li);
    }

    function deleteItem(event) {
        // find the element clicked and delete its parent.
        const elementClicked = event.target;

        console.log(elementClicked.nodeName);
            todoList.removeChild(elementClicked.parentNode);
    }
})();