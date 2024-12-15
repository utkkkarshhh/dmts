const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
const scheduleTasks = require("./taskscheduler/taskScheduler");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", () => {
  console.log("Home Route");
});

app.post("/getTasks", (req, res) => {
  const tasks = req.body;
  console.log("Received Task : ", tasks);
  res.send("Data received successfully!");
  scheduleTasks(tasks);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
