const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
// console.log(process.argv);
// console.log( argv );

// console.log('base: yargs', argv.b);



// const base = 6;


crearArchivo( argv.b, argv.l, argv.h )
.then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.rainbow))
.catch( err => console.log(err));
