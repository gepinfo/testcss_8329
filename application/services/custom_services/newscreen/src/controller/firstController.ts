import { Request, Response } from 'express';
import { firstService } from '../service/firstService';
import { CustomLogger } from '../config/Logger'
let first = new firstService();

export class firstController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    first.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into firstController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from firstController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    first.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into firstController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from firstController.ts: GpGetNounCreatedBy');
    })}


}