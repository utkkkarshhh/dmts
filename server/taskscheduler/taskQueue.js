const { Worker } = require("worker_threads");

const chunkify = (arr, n) => {
  const subarrayLength = Math.ceil(arr.length / n);
  const subarrays = [];
  for (let i = 0; i < arr.length; i += subarrayLength) {
    subarrays.push(arr.slice(i, i + subarrayLength));
  }
  return subarrays;
};

class TaskQueue {
  constructor() {
    this.queue = [];
    this.workers = [];
    this.processing = false;
    this.maxWorkers = 3;
  }

  enqueue(task) {
    this.queue.push(task);
    if (!this.processing) {
      this.processing = true;
      this.executeTasks(this.queue, this.maxWorkers);
    }
  }

  executeTasks(tasks, maxWorkers) {
    const chunks = chunkify(tasks, maxWorkers);
    chunks.forEach((chunk, i) => {
      const worker = new Worker("./taskscheduler/workerThreads.js", {
        workerData: { tasks: chunk },
      });
      this.workers.push(worker);
      worker.on("message", (message) => {
        console.log(`Worker ${i} completed: ${message}`);
      });
    });
  }
}

module.exports = TaskQueue;
