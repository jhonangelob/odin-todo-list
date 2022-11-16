const allTasks = JSON.parse(localStorage.getItem('todos')) || [];
const tasksUL = document.querySelector('.app__tasks-list-ul');
const tasksCounter = document.querySelector('.all_tasks');
const taskForm = document.querySelector('.app__task-new-form');
const formInput = document.querySelector('.addTaskInput');

class Task {
  constructor(name) {
    this.folder = 'Test';
    this.name = name;
    this.done = false;
  }
}

const setItem = (x) => {
  localStorage.setItem('todos', JSON.stringify(x));
  showTasks();
};

const showTasks = () => {
  tasksUL.innerHTML = '';
  allTasks?.map((task) => {
    const newListEntry = document.createElement('li');
    newListEntry.innerHTML = `<input class="checkbox-todo" type="checkbox" />
                      <p>${task.name}</p>
                      <span class="task-date"></span>`;
    tasksUL.appendChild(newListEntry);
  });
  tasksCounter.textContent = allTasks.length;
  storageFunctions();
};

const storageFunctions = () => {
  const deleteTaskBtns = Array.from(
    document.querySelectorAll('.checkbox-todo')
  );

  deleteTaskBtns.map((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      allTasks.splice(index, 1);
      setItem(allTasks);
    });
  });

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = new Task(formInput.value);
    if (task.name != '') {
      allTasks.push(task);
      setItem(allTasks);
    }
    e.target.reset();
  });
};

const storageActions = () => {
  showTasks();
};

export default storageActions;
