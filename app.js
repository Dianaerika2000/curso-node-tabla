
const { crearAchivo2 } = require('./helpers/multiplicar'); //importa crearArchivo
const colors = require('colors');
const argv = require('./config/yargs');




console.clear();

crearAchivo2(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));

