const relationsCtrl = {}
const Relation = require('../models/Relation')
const Employee = require('../models/Employee')
const mongoose = require('mongoose')




relationsCtrl.getRelations = async (req,res) => { 
    
    const employees = await Relation.find({}).select('-contractor_id -_id -createdAt -updatedAt -name -lastname -identification -contract_type -worked_time -working_time -start -work_name')
    const ids = [];
    employees.forEach(id => ids.push(mongoose.Types.ObjectId(id.employee_id)));
   
    const relations = await Employee.find({'_id':{'$nin':ids}})
    res.json(relations)
}

relationsCtrl.getAllRelations = async (req,res) => {
    const relations = await Relation.find();
    res.json(relations);
    
}

relationsCtrl.getRelation = async (req,res) => { 
    const relation = await Relation.find({ contractor_id: req.params.id})
    res.json(relation)
}

relationsCtrl.createRelation = async (req,res) => { 
    const newRelation = new Relation(req.body)
    await newRelation.save()
    res.send('Created')
}

relationsCtrl.deleteRelation = async (req,res) => { 
    
    await Relation.findByIdAndDelete(req.params.id)
    res.send('Deleted')
}

relationsCtrl.editRelation = async (req,res) => { 
    
    await Relation.findByIdAndUpdate(req.params.id,req.body)
    res.send('Edited')
}

module.exports = relationsCtrl
