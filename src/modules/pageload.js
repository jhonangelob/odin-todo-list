const newProjectForm = document.querySelector('.new__todo-form');
const newProjectBtn = document.querySelector('.new__project-btn');
const cancelProjectBtn = document.querySelector('.cancel__btn');
const section = document.querySelector('section');
const deleteFolderBtn = document.querySelector('.delete-folder');
const modal = document.querySelector('.app__remove-card');
const modalCancelBtn = document.querySelector('.remove__cnclBtn');

const showModal = () => {
  if (modal.style.display === 'none') {
    section.classList.add('is-blurred');
    modal.style.display = 'flex';
  } else {
    section.classList.remove('is-blurred');
    modal.style.display = 'none';
  }
};

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
  deleteFolderBtn.addEventListener('click', showModal);
  modalCancelBtn.addEventListener('click', showModal);
};

const LoadPage = () => {
  addNewProjectEvent();
};

export default LoadPage;
