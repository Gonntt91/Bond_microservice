import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum PRIVILEGE {
  TIME_CLOCK = "TimeClock",
  BOND = "Bond",
  PAYROLL = "Payroll"
}


@Schema({versionKey: false, timestamps: true, collection: 'Company'})
export class CompanyDocument extends Document {
  @Prop({ required: true, unique: true })
  companyCode: string;

  @Prop({ required: true })
  companyName: string;

  @Prop({type: [String], enum: Object.values(PRIVILEGE), default:[]})
  privileges: string[];

  @Prop()
  address: string;
}

export const CompanySchema = SchemaFactory.createForClass(CompanyDocument);