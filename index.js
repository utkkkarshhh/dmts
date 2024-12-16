const express = require("express");
const path = require("path");
const env = require("./src/utils/dotenv/dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRouter = require("./src/routes/taskRoutes/taskRouter")
const { connectToSequelize } = require("./src/utils/database/sequelizeConnection");
const startNgrokTunnel = require("./src/utils/ngrok/ngrok");

// Middlewares
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));
app.use(express.static(path.join(__dirname, "./src/views/public")));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
connectToSequelize();

// Get on home route
app.get("/", (req, res) => {
  res.render("index");
});

// Expose to NGROK
if (process.env.ENIVRONMENT == "NGROK") {
  startNgrokTunnel(process.env.PORT);
}

// Routes
app.use("/api/tasks", taskRouter);

// Listening to server
app.listen(process.env.PORT, () => {
  console.log(
    `App is live on port http://localhost:${process.env.PORT} | Environment : ${process.env.ENIVRONMENT}`
  );
});
