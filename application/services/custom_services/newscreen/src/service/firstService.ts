import { Request, Response } from 'express';
import {firstDao} from '../dao/firstDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let first = new firstDao();

export class firstService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into firstService.ts: GpCreate')
     let  firstData = req.body;
     first.GpCreate(firstData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from firstService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into firstService.ts: GpGetNounCreatedBy')
     let  firstData = { created_by: req.query.createdby };
     first.GpGetNounCreatedBy(firstData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from firstService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}