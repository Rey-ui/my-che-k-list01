function saveTasks(API_KEY, tasks) {
  localStorage.setItem(API_KEY, JSON.stringify(tasks));
}

export default saveTasks;
