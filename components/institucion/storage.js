const Model = require('./model')
const representante = require('../representante_legal/model')

function addInstitucion( institucion ) {
    const objeto = new Model( institucion )
    objeto.save()
}

async function getInstitucion() {
    const objetos = await Model.find()
    return objetos
}





module.exports = {
    add: addInstitucion,
    list: getInstitucion,
    
}