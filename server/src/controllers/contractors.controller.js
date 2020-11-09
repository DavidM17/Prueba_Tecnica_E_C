const contractorsCtrl = {}
const Contractor = require('../models/Contractor')
const Relation = require('../models/Relation')

contractorsCtrl.getContractors = async (req,res) => { 
    const contractors = await Contractor.find()
    res.json(contractors)
}

contractorsCtrl.getContractor = async (req,res) => { 
    const contractor = await Contractor.findById(req.params.id)
    res.json(contractor)
}

contractorsCtrl.createContractor = async (req,res) => { 
    const newContractor = new Contractor(req.body)

    await newContractor.save()
    res.send('Created')
}

contractorsCtrl.deleteContractor = async (req,res) => { 
    
    await Contractor.findByIdAndDelete(req.params.id)
    await Relation.deleteMany({ contractor_id: req.params.id })
    res.send('Deleted')
}

contractorsCtrl.editContractor = async (req,res) => { 
    
    await Contractor.findByIdAndUpdate(req.params.id,req.body)
    res.send('Edited')
}

module.exports = contractorsCtrl