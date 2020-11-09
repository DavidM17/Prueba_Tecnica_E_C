const employeesCtrl = {}
const Employee = require('../models/Employee')


employeesCtrl.getEmployees = async (req,res) => { 
    const employees = await Employee.find()
    res.json(employees)
}

employeesCtrl.getEmployee = async (req,res) => { 
    const employee = await Employee.findById(req.params.id)
    res.json(employee)
}

employeesCtrl.createEmployee = async (req,res) => { 
    const newEmployee = new Employee(req.body)

    await newEmployee.save()
    res.send('Created')
}

employeesCtrl.deleteEmployee = async (req,res) => { 
    
    await Employee.findByIdAndDelete(req.params.id)
    res.send('Deleted')
}

employeesCtrl.editEmployee = async (req,res) => { 
    
    await Employee.findByIdAndUpdate(req.params.id,req.body)
    res.send('Edited')
}

module.exports = employeesCtrl