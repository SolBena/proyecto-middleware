//crear un archivo de texto donde guardo la informacion
const fs = require('fs');
//para indicar donde queremos que se guarde el archivo
const path = require('path');

//dentro de la funcion creo un archivo o lo agrego a un archivo existente. 
let userLogs = ((req, res, next) => {
    fs.appendFileSync(path.join(__dirname, '..', 'logs', 'userLogs.txt'), `El usuario ingresó a la ruta: ${req.url} \n`, 'utf-8');

    next();
})

module.exports = userLogs