const argv = require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    description:'Base para la tabla',
    demandOption:true
})
.option('l',{
    alias:'listar',
    type:'boolean',
    description:'Muestra la tabla en la consola',
    default:false
})
.option('h',{
    alias:'hasta',
    type:'number',
    description:'Hasta que número hacer la multiplicación',
    default:10
})
.check((argv,options)=>{
    if( isNaN(argv.b)){
        throw 'La base debe de ser un número'
    }
    return true;
})
.argv;

module.exports = argv;