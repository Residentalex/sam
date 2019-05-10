import { Router } from "express";
import docentesController from "../controllers/docentesController";

class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.Config();
    }

    Config(): void{
        // se crea una ruta inicial, envia como respuesta "Hello"
        this.router.get('/', docentesController.List );
        this.router.get('/:id', docentesController.filter);
        this.router.post('/', docentesController.Create);
        this.router.put('/:id', docentesController.Update);
        this.router.delete('/:id', docentesController.Delete);
    }
}

const indexroutes = new IndexRoutes();
export default indexroutes.router;