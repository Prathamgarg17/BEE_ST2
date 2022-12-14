const server = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// ToDo: Database Connection
mongoose.connect("mongodb://localhost:27017/class-work");
mongoose.connection.on("connected", () => {
  console.log("DB CONNECTED");
});

// Data Connection End

const { getStudents, createNewStudent,updateStudent,deleteStudent } = require("./src/controllers/index");
const app = server();

app.use(cors());
app.use(bodyParser.json());

app.get("/students", getStudents);
app.post("/create-new-student", createNewStudent);
app.put("/updateStudent", updateStudent);
app.delete("/deleteStudent", deleteStudent);

app.listen(4000, () => {
  console.log("Sever Started on port 4000");
});