import { Router } from "express";

class DocentesRoutes {

    public router: Router = Router();

    constructor() {
        this.Config();
    }

    Config(): void{
        // se crea una ruta inicial, envia como respuesta "Hello"
        this.router.get('/', (req, res) => res.send('Hello'));
    }
}

const docentesroutes = new DocentesRoutes();
export default docentesroutes.router;