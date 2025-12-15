function createTaskMurkap(tasks) {
  return tasks
    .map(({ id, taskValue, isActive }) => {
      return `<li id="${id}" class="item"><span class="item-text ${
        !isActive ? "finish" : ""
      }">${taskValue}</span><button type="button" class="item-btn">X</button></li>`;
    })
    .join("");
}
export default createTaskMurkap;
