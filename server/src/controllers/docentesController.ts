import {Request, Response, Express } from "express";
import db from "../database";
import pool from "../database";

class DocentesController {

    constructor() {
        
    }

    public async List(req: Request, res: Response) {
        const docentes = await pool.query("SELECT * FROM docentes")
        res.json({docentes});
    }

    public async filter(req: Request, res: Response){
        const docente = await pool.query("SELECT * FROM docentes WHERE idDocente = ?", req.params.id);
        if (docente.length > 0){
            return res.json(docente[0]);
        }
        res.status(404).json({message: 'El Docente no existe'});
    }

    // especificamos que es un metodo asincronomo, es decir, hay que esperar que haga la consulta
    // Promise<void>: le indico que es una promesa que no devuelve nada 
    public async Create(req: Request, res: Response): Promise<void>{
        await db.query('INSERT INTO docentes SET ?', [req.body]);
        res.json({message: 'Docente Actualizado'});
    }

    Update(req: Request, res: Response){
        pool.query("UPDATE docentes SET ? WHERE idDocente = ?", [req.body, req.params.id])
        res.json({text: "Actualizando un juego " + req.params.id });
    }

    public async Delete(req: Request, res: Response){
        await  pool.query("DELETE FROM docentes WHERE idDocente = ?", req.params.id )
        res.json({text: 'El docente ' + req.params.id + ' fue Eliminado'});
    }


}

const docentesController = new DocentesController();
export default docentesController;