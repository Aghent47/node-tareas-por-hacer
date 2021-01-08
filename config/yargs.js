/* Configuracion de Yargs */

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')

.command('crear', ' Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea ', {
        descripcion,
        completado
    })
    .command('borrar', ' borrar una tarea no completada', {
        descripcion
    })
    .help()
    .argv; // regresando el objeto argv

module.exports = {
    argv
}