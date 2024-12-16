class Task {
  constructor(id, priority, executionInstruction) {
    this.id = id;
    this.priority = priority;
    this.executionInstruction = executionInstruction;
    this.dependencies = new Array();
  }

  compareTo(other) {
    return this.priority - other.priority;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getPriority() {
    return this.priority;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  getDependencies() {
    return this.dependencies;
  }

  setDependencies(dependencies) {
    this.dependencies = dependencies;
  }

  addDependency(task) {
    this.dependencies.push(task);
  }

  removeDependency(task) {
    this.dependencies = this.dependencies.filter((dep) => dep !== task);
  }

  getExecutionInstruction() {
    return this.executionInstruction;
  }

  setExecutionInstruction(executionInstruction) {
    this.executionInstruction = executionInstruction;
  }
}
