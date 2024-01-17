const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please input Username"],
    },
    firstName: {
      type: String,
      required: [true, "Please input First Name"],
    },
    lastName: {
      type: String,
      required: [true, "Please input Last Name"],
    },
    email: {
      type: String,
      required: true,
      default: "",
    },
    birthDate: {
      type: Date,
      required: [true, "Please input Birth Date"],
    },
    basicSalary: {
      type: Number,
      required: [true, "Please input Basic Salary"],
    },
    status: {
      type: String,
      required: [true, "Please input Status"],
    },
    group: {
      type: String,
      required: [true, "Please input Group"],
    },
    description: {
      type: String,
      required: [true, "Please input Description"],
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
