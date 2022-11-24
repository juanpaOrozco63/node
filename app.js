const {crearArchivo} = require('./helpers/multiplicar')
const {crearArchivoSync} = require('./helpers/multiplicar')
const argv = require('./config/yargs')

crearArchivoSync(argv.b,argv.l,argv.h)
.then(nombreArchivo => console.log(nombreArchivo,'creado'))
.catch( err => console.log(err));

// crearArchivo(base)
// .then(nombreArchivo => console.log(nombreArchivo,'creado'))
// .catch( err => console.log(err));


