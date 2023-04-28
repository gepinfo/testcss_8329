import * as mongoose from 'mongoose';
import firstModel from '../models/daomodels/first';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class firstDao {
    private first = firstModel;
    constructor() { }
    
    public async GpCreate(firstData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into firstDao.ts: GpCreate');

    let temp = new firstModel(firstData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from firstDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(firstData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into firstDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.first.aggregate(([
                        { $match: { $and: [{ created_by: firstData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from firstDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}