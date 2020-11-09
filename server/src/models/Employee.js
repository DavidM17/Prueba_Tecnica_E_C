const {Schema, model } = require('mongoose')

const employeeSchema = new Schema({
    name: {type: String, require: true},
    lastname: {type: String, require: true},
    identification: {type: Number, require: true, unique: true},
    contract_type: {type: String, require: true},
    birthday: {type: String, require: true},
    address: {type: String, require: true},
    phone: {type: String, require: true},
    email: {type: String, require: true},

},{
    timestamps: true,
    versionKey: false
})


module.exports = model("Employee",employeeSchema)
