import { Router } from "express";

class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.Config();
    }

    Config(): void{
        // se crea una ruta inicial, envia como respuesta "Hello"
        this.router.get('/', (req, res) => res.send('Docentes'));
    }
}

const indexroutes = new IndexRoutes();
export default indexroutes.router;