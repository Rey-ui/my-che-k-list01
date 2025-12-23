import { nanoid } from 'nanoid';
import renderTaskMurkap from './render.js';
import saveTasks from './storage.js';

const API_KEY = 'tasks-list';
export const listEl = document.querySelector('.list');

let tasks = JSON.parse(localStorage.getItem(API_KEY)) || [];

export function createNewTask(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const taskText = form.elements.task.value;
  const newTask = { id: nanoid(), taskValue: taskText, isActive: true };
  tasks.push(newTask);
  saveTasks(API_KEY, tasks);
  renderTaskMurkap(listEl, tasks);
  handlecalcTasks(tasks);
  form.reset();
}

export function handleDeleteTask(e) {
  const btn = e.target.closest('.item-btn');
  if (!btn) return;
  const li = btn.closest('li');
  const updateTasks = tasks.filter(({ id }) => {
    return id !== li.id;
  });
  tasks = updateTasks;
  saveTasks(API_KEY, tasks);
  renderTaskMurkap(listEl, tasks);
  handlecalcTasks(tasks);
}

export function handleFinishTask(e) {
  const li = e.target.closest('.item');
  const span = e.target.closest('.item-text');
  if (!span) return;
  const findeTask = tasks.find(({ id }) => {
    return id == li.id;
  });

  if (findeTask.isActive) {
    findeTask.isActive = false;
    span.classList.add('finish');
  } else {
    span.classList.remove('finish');
    findeTask.isActive = true;
  }
  saveTasks(API_KEY, tasks);
  handlecalcTasks(tasks);
}
const allTasksCount = document.querySelector('.all-tasks-count');
const completedTasksCount = document.querySelector('.completed-tasks-count');
const inprogressTasksCount = document.querySelector('.inprogress-tasks-count');
function handlecalcTasks(tasks) {
  const allTasks = tasks.length;
  const completedTasks = tasks.filter(({ isActive }) => {
    return !isActive;
  }).length;
  const inprogressTasks = tasks.filter(({ isActive }) => {
    return isActive;
  }).length;
  completedTasksCount.textContent = completedTasks;
  inprogressTasksCount.textContent = inprogressTasks;
  allTasksCount.textContent = allTasks;
}
handlecalcTasks(tasks);
renderTaskMurkap(listEl, tasks);
