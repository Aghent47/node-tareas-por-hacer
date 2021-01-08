const fs = require('fs');

let listPorHacer = [];
const guardarDB = () => {

    let data = JSON.stringify(listPorHacer); // transformando el objeto a formato JSON

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar el archivo', err);
    });
}

const cargaBD = () => {
    try {
        listPorHacer = require('../db/data.json');
    } catch (error) {
        listPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargaBD();

    let porHacer = {
        descripcion,
        completado: false
    };

    listPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargaBD();
    return listPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargaBD(); //cargamos la BD
    let index = listPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}


const borrar = (descripcion) => {
    cargaBD(); //cargamos la BD
    let newList = listPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listPorHacer.length === newList.length) {
        return false;
    } else {
        listPorHacer = newList;
        guardarDB();
        return true;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}