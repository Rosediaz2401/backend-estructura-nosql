import mongoose from "mongoose";
import config from './index.js'

const db = mongoose.connection;

db.on('conecting', () =>{
    console.info('Intentado conectar a la base de datos')
})

db.on('connected', () => {
    console.log('Se ha conectado a la base de datos');
})

db.on('disconected', () =>{
    console.error('Se ha desconectado de la base de datos');
})


const init = () => {

    mongoose.connect(config.database.uri);
}

export default init;
