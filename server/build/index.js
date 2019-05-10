"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const docentesRoutes_1 = __importDefault(require("./routes/docentesRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.Config();
        this.Route();
    }
    Config() {
        // le agregamos una variable llamado 'port' con el valor del puerto 3000 o el puerto definido por el sistema
        this.app.set('port', process.env.PORT || 3000);
        // Muestra en consola las peticiones del cliente
        this.app.use(morgan_1.default('dev'));
        // Permite que Angular haga peticiones
        this.app.use(cors_1.default);
        // Permite recibir y enviar los datos en modo json
        this.app.use(express_1.default.json());
        // Permite recibir y enviar datos en formato html
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    Route() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/docentes/', docentesRoutes_1.default);
    }
    start() {
        // ponemos a la apliacion a escuchar y le definimos el puerto ya configurado en el metodo Config();
        this.app.listen(this.app.get('port'), () => {
            console.log('Server Listening on Port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
