import { Request, Response, NextFunction } from "express";
import { firstController } from '../controller/firstController';


export class Routes {
    private first: firstController = new firstController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/first').post(this.first.GpCreate);
app.route('/first/userid/created_by').get(this.first.GpGetNounCreatedBy);
     }

}