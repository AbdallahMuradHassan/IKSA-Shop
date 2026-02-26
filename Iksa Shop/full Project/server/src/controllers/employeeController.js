const Employee = require("../models/Employee");
const factory = require("./factoryController");

exports.createEmployee = factory.createOne(Employee);
exports.getEmployees = factory.getAll(Employee);
exports.getEmployee = factory.getOne(Employee);
exports.updateEmployee = factory.updateOne(Employee);
exports.deleteEmployee = factory.deleteOne(Employee);
