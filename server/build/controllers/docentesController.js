"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const database_2 = __importDefault(require("../database"));
class DocentesController {
    constructor() {
    }
    List(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const docentes = yield database_2.default.query("SELECT * FROM docentes");
            res.json(docentes);
        });
    }
    filter(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const docente = yield database_2.default.query("SELECT * FROM docentes WHERE idDocente = ?", req.params.id);
            if (docente.length > 0) {
                return res.json(docente[0]);
            }
            res.status(404).json({ message: 'El Docente no existe' });
        });
    }
    // especificamos que es un metodo asincronomo, es decir, hay que esperar que haga la consulta
    // Promise<void>: le indico que es una promesa que no devuelve nada 
    Create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO docentes SET ?', [req.body]);
            res.json({ message: 'Docente Actualizado' });
        });
    }
    Update(req, res) {
        database_2.default.query("UPDATE docentes SET ? WHERE idDocente = ?", [req.body, req.params.id]);
        res.json({ text: "Actualizando un juego " + req.params.id });
    }
    Delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_2.default.query("DELETE FROM docentes WHERE idDocente = ?", req.params.id);
            res.json({ text: 'El docente ' + req.params.id + ' fue Eliminado' });
        });
    }
}
const docentesController = new DocentesController();
exports.default = docentesController;
