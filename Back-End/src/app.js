import express from 'express';
import cors from 'cors';
import route from './routes';
import './database';

class App {
    constructor() {
        this.server = express();

        this.middleware();
        this.routes();
    }

    middleware() {
        this.server.use(express.json());
        this.server.use(cors());
    }

    routes() {
        this.server.use(route);
    }
}

export default new App().server;
