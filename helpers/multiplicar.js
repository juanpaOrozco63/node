const fs = require('fs');
const colors = require('colors');
const crearArchivo = (base = 5, listar = false) => {
    return new Promise ( (resolve,reject)=>{
        console.log('====================');
        console.log('Tabla del:', base);
        console.log('====================');
        let salida = "";
        for (let index = 1; index <= 10; index++) {
            salida += (`${base} X ${index} = ${base*index}\n`);    
        }
        fs.writeFileSync(`tabla-${base}.txt`,salida);
        resolve(`tabla- ${base}.txt`)
    
    })
   }
   const crearArchivoSync = async (base = 5, listar = false, hasta=10) => {
    try {
      
        let salida = "";
        for (let index = 1; index <= hasta; index++) {
            salida += (`${base} X ${index} = ${base*index}\n`);    
        }
        if(listar){
            console.log('===================='.red);
            console.log('Tabla del:'.blue, base);
            console.log('===================='.red);
            console.log(salida.green);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return(`tabla- ${base}.txt`)
    } catch (error) {
        throw error
    }
    
    
   }
module.exports = {
    crearArchivo,
    crearArchivoSync
}