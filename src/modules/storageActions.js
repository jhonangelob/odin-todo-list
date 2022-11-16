const todos = JSON.parse(localStorage.getItem('todos')) || [];

const showTodoList = () => {
  const tasksUL = document.querySelector('.app__tasks-list-ul');

  todos?.map((todo) => {
    const newT = document.createElement('li');
    newT.innerHTML = `<input type="checkbox" />
    <p>${todo.name}</p>
    <span class="task-date">00/00/0000</span>`;
    tasksUL.appendChild(newT);
  });

  const tasksCounter = document.querySelector('.all_tasks');
  tasksCounter.textContent = todos.length;
};

const addTodos = () => {
  const newTodo = {
    folder: 'Work',
    name: 'Feed the dog',
    done: false,
  };

  todos.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(todos));
};

const getProjects = () => {
  const taskUL = document.querySelector('.app__sidebar-ul');

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
