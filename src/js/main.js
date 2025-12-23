import {
  listEl,
  createNewTask,
  handleDeleteTask,
  handleFinishTask,
} from './modules/actions.js';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', createNewTask);
listEl.addEventListener('click', handleDeleteTask);
listEl.addEventListener('click', handleFinishTask);
