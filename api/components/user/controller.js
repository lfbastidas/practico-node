//va tener acceso a la capa de datos

const store = require('../../../sotore/dummy')
const TABLA = 'user'

function list (){
    return store.list(TABLA);
}

module.exports = {
    obtener: list
}