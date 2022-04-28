
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');


//transformada la funcion en una promesa
const crearAchivo = ( t=2 ) => {

    return new Promise( (resolve, reject) => {
        console.log('================');
        console.log('  Tabla del: ', t);
        console.log('================');
        
        let salida = '';
        for (let i = 1; i <=10 ; i++) {
            salida += `${t} * ${i} = ${t*i}\n`;
        }
        console.log(salida);

        fs.writeFileSync(`tabla-${t}.txt`, salida); //graba la tabla 

        resolve(`Tabla-${t}.txt`);
    });
    

}


const crearAchivo2 = async( t = 2 , listar = false, hasta = 10) => {
    
    try {
        
        let salida = '';
        let consola ='';
        for (let i = 1; i <=hasta ; i++) {
            salida += `${t} x ${i} = ${t*i}\n`;
            consola += `${t} ${'x'.red} ${i} ${'='.red} ${t*i}\n`;
        }
        if( listar ){
            console.log('================'.magenta);
            console.log('  Tabla del: ', colors.white(t));
            console.log('================'.magenta);
            console.log(consola);
        }
        

        fs.writeFileSync(`./salida/tabla-${t}.txt`, salida);

        return `Tabla-${t}.txt`;
    } catch (error) {
        throw error;
    }

        
    
    

}
//Exporta la funcion crearArchivo
module.exports = {
    crearAchivo2
}