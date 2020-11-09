const { Router } = require('express') 

const router = Router()

const contractorsCtrl = require('../controllers/contractors.controller')

router.get('/',contractorsCtrl.getContractors)
router.get('/:id',contractorsCtrl.getContractor)
router.post('/',contractorsCtrl.createContractor)
router.delete('/:id',contractorsCtrl.deleteContractor)
router.put('/:id',contractorsCtrl.editContractor)

module.exports = router