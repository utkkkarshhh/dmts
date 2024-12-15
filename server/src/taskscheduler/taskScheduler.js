const TaskQueue = require("./taskQueue");

const scheduleTasks = (tasks) => {
  const taskQueue = new TaskQueue();
  const tasksByPriority = {};
  tasks.forEach((task) => {
    if (!tasksByPriority[task.priority]) {
      tasksByPriority[task.priority] = [];
    }
    tasksByPriority[task.priority].push(task);
  });

  // Enqueue tasks based on priority
  Object.keys(tasksByPriority)
    .sort((a, b) => a - b)
    .forEach((priority) => {
      tasksByPriority[priority].forEach((task) => {
        console.log(`Enqueuing task: ${JSON.stringify(task)}`);
        taskQueue.enqueue(task);
      });
    });
  console.log("All tasks enqueued. Starting processing...");
};

module.exports = scheduleTasks;
