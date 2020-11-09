const {Schema, model } = require('mongoose')

const relationSchema = new Schema({
    contractor_id: {type: String, require: true},
    employee_id: {type: String, require: true},
    contractor: {type: String, require: true},
    employee: {type: String, require: true},
    identification: {type: Number, require: true},
    contract_type: {type: String, require: true},
    worked_time: {type: Number, require: true},
    working_time: {type: Number, require: true},
    start: {type: String, require: true},
    work_name: {type: String, require: true},
},{
    timestamps: true,
    versionKey: false
})



module.exports = model("Relation",relationSchema)
