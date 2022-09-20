import http from 'http';
import config from '../config/index.js'

const server = http.createServer();

server.listen(config.server.port);