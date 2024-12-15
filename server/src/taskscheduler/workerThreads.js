const { workerData, parentPort } = require("worker_threads");

function processTask() {
  const { tasks, workerName } = workerData;
  console.log(
    `Task ${tasks.id} under process by ${workerName} with Priority: ${tasks.priority}`
  );
  setTimeout(() => {
    parentPort.postMessage(
      `Task ${tasks.id} processed by ${workerName} with Priority: ${tasks.priority}`
    );
  }, 1000);
}

processTask();
