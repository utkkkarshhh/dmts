const express = require("express");
const app = express();
const scheduleTasks = require("../../taskscheduler/taskScheduler");


const getTasks = async(req, res) => {
    const tasks = req.body;
    console.log("Received Task : ", tasks);
    res.send("Data received successfully!");
    scheduleTasks(tasks);
}

module.exports = { getTasks }