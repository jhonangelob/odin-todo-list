const newProjectForm = document.querySelector('.new__todo-form');
const newProjectBtn = document.querySelector('.new__project-btn');
const cancelProjectBtn = document.querySelector('.cancel__btn');

const ProjectForm = () => {
  if (newProjectForm.style.display === 'block') {
    newProjectBtn.style.display = 'flex';
    newProjectForm.style.display = 'none';
  } else {
    newProjectBtn.style.display = 'none';
    newProjectForm.style.display = 'block';
  }
};

const addNewProjectEvent = () => {
  newProjectBtn.addEventListener('click', ProjectForm);
  cancelProjectBtn.addEventListener('click', ProjectForm);
};

const LoadPage = () => {
  addNewProjectEvent();
};

export default LoadPage;
