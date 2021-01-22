const db = {
    'user':[
        {id:1, name:'Carlos'}
    ]
}

function list (tabla) {
          return db[tabla];   //nos trae toda la informacion que hay en cada tabla
}


function get (tabla, id) {
    let coleccion= list(tabla);
    return coleccion.find(item=>item.id===id) || null   //find te regresa el primero que encuentra y filter regresa todos los que cumplan con la condicion 
}

function insert (tabla,data) {
    db[table].push(data);
    return true;
    
}

function remove (tabla,id) {
    return true;
    
}

module.exports = {
    list,
    get,
    insert,
    remove
}