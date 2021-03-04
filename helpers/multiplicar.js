const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar, hasta = 10) =>{
    
        console.clear();    
        let salida = '';
        let consola = '';

        for (let y = 0; y <= hasta; y++) {
            salida += `${ base } X ${ y } = ${ base  * y }\n`;
            consola += `${ base } ${'X'.yellow} ${ y } ${'='.yellow} ${ base  * y }\n`;
        }
        
        if(listar){
            console.log('==================='.green);
            console.log('   TABLA DEL '.green, base.toString().red);
            console.log('==================='.green);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla${base}.txt`, salida);
        
        return `tabla${base}.txt`;

};

//Esto es para exportar una función
module.exports = {
    crearArchivo
}