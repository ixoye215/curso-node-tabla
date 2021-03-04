const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check((argv, option) => {
        // console.log('yargs', argv);
        if(isNaN( argv.b )){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean', 
        default: false,
        describe: 'Muestra la tabla en consola'
    }) 
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Es el limite de la tabla'
    })
    .check((argv, option) => {
        // console.log('yargs', argv);
        if(isNaN( argv.h )){
            throw 'EL hasta tiene que ser un número'
        }
        return true;
    }) 
    .argv;

module.exports = argv;