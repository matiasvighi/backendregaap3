
const {Schema, model} =require("mongoose")
const confSchema = new Schema ({
    userid: Number,
    valor: Number,
    flag: Boolean,
    userid: Number,
    horario: Number


})

const Conf = model ("Conf",confSchema)  
module.exports = Conf