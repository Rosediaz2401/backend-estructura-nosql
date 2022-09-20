import dotenv from 'dotenv';

dotenv.config();

//console.log(process.env);

const config = {
    server: {
        port: 3000,
    },
    database:{
        uri: process.env.DB_URI,
    }
}

export default config;