const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoticiaSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    descricao: {type: String, required: true},
    data: {type: Date, required: true}
});

module.exports = mongoose.model('Ñoticia', NoticiaSchema);