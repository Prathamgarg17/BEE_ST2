const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  // name:{
  //  type: String,
  //  trim: true,    
  // }, 
  email:{
    type: String,
    unique: true
  },
  age: Number,
  first_name: String,
  last_name: String,
});
studentSchema
.virtual("name")
.set(function (name){
  var splitedName = name.split(" ");
  this.first_name= splitedName[0];
  this.last_name= splitedName[1];
})
.get(function(){
  return this.first_name+" "+this.last_name;
})

const Student = mongoose.model("Student", studentSchema);
module.exports = { Student };