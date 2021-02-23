const use = require('./network')
const storage = require('./storage')


function addInstitucion(nombre, domicilio, telefono, tipo_institucion, fecha_creacion, representante_legal) {
    return new Promise( (resolve, reject) => {
        if (!nombre) {
            console.error('[MensajeControlado] No hay nombre de Institucion')
            return reject('No existe Institucion.')
        }
        // Se crea un objeto Carrera
        const fullInstitucion = {
            nombre: nombre,
            domicilio: domicilio,
            telefono: telefono,
            tipo_institucion: tipo_institucion,
            fecha_creacion: new Date(),
            representante_legal: representante_legal,
        }
        console.log( fullInstitucion )
        storage.add( fullInstitucion )
        return resolve( fullInstitucion )
    })
}

function getInstitucion() {
    return new Promise((resolve, reject) => {
        resolve( storage.list() )
    })
}





module.exports = {
    addInstitucion,
    getInstitucion,
   
}



