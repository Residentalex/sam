"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const docentesController_1 = __importDefault(require("../controllers/docentesController"));
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.Config();
    }
    Config() {
        // se crea una ruta inicial, envia como respuesta "Hello"
        this.router.get('/', docentesController_1.default.List);
        this.router.get('/:id', docentesController_1.default.filter);
        this.router.post('/', docentesController_1.default.Create);
        this.router.put('/:id', docentesController_1.default.Update);
        this.router.delete('/:id', docentesController_1.default.Delete);
    }
}
const indexroutes = new IndexRoutes();
exports.default = indexroutes.router;
