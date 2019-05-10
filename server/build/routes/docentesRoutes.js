"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.Config();
    }
    Config() {
        // se crea una ruta inicial, envia como respuesta "Hello"
        this.router.get('/', (req, res) => res.send('Docentes'));
    }
}
const indexroutes = new IndexRoutes();
exports.default = indexroutes.router;
