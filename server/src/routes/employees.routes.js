const { Router } = require('express') 

const router = Router()

const employeesCtrl = require('../controllers/employees.controller')

router.get('/',employeesCtrl.getEmployees)
router.get('/:id',employeesCtrl.getEmployee)
router.post('/',employeesCtrl.createEmployee)
router.delete('/:id',employeesCtrl.deleteEmployee)
router.put('/:id',employeesCtrl.editEmployee)

module.exports = router