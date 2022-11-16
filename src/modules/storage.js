const todos = JSON.parse(localStorage.getItem('todos')) || [];

const showTodoList = () => {
  const tasksUL = document.querySelector('.app__tasks-list-ul');
  tasksUL.innerHTML = '';

  todos?.map((todo, index) => {
    const newT = document.createElement('li');
    newT.innerHTML = `<input class="checkbox-todo" type="checkbox" />
    <p>${todo.name}</p>
    <span class="task-date">00/00/0000</span>`;
    tasksUL.appendChild(newT);
  });

  const tasksCounter = document.querySelector('.all_tasks');
  tasksCounter.textContent = todos.length;
  addTodoEvents();
};

const addTodoEvents = () => {
  //  ADD NEW TASK
  const addTodoForm = document.querySelector('.app__task-new-form');
  addTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = {
      folder: 'test',
      name: document.querySelector('.addTaskInput').value,
      done: false,
    };

    if (newTodo.name !== '') {
      todos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(todos));
      e.target.reset();
      showTodoList();
      getProjects();
    }
  });

  //  REMOVE TASK
  const checkbox = Array.from(document.querySelectorAll('.checkbox-todo'));

  checkbox.map((chk, index) => {
    chk?.addEventListener('click', (e) => {
      e.preventDefault();
      todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(todos));
      showTodoList();
      getProjects();
    });
  });
};

const getProjects = () => {
  const taskUL = document.querySelector('.app__sidebar-ul');
  taskUL.innerHTML = '';
  todos?.map((todo) => {
    const li = document.createElement('li');
    li.innerHTML = `<button><i class="bi bi-collection-fill"></i>${todo.folder}</button>`;
    taskUL.appendChild(li);
  });
};

const storageActions = () => {
  showTodoList();
  getProjects();
};

export default storageActions;
