
import * as mongoose from 'mongoose';
import {  } from '../entitymodels/ticket';

const Schema = mongoose.Schema;

export const firstSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   Name: { type: String }
})

const firstModel = mongoose.model('first', firstSchema, 'first');
export default firstModel;
