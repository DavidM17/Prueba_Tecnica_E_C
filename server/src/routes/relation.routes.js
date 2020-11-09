const { Router } = require('express') 

const router = Router()

const relationsCtrl = require('../controllers/relations.controller')

router.get('/',relationsCtrl.getRelations)
router.get('/all',relationsCtrl.getAllRelations)
router.get('/contractor/:id',relationsCtrl.getRelation)
router.post('/',relationsCtrl.createRelation)
router.delete('/:id',relationsCtrl.deleteRelation)
router.put('/:id',relationsCtrl.editRelation)

module.exports = router
