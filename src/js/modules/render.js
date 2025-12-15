import createTaskMurkap from "./markup.js";

const alternativeEl = '<p class="alternative">No tasks</p>';
function renderTaskMurkap(listEl, tasks) {
  if (tasks.length !== 0) {
    listEl.innerHTML = createTaskMurkap(tasks);
  } else {
    listEl.innerHTML = alternativeEl;
  }
}
export default renderTaskMurkap;
