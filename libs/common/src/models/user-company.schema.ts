import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { UserDocument } from './user.schema'; // Assuming User is here
import { CompanyDocument } from './company.schema';

export enum Role {
  SUPER_MANAGER = 'super_manager',
  MANAGER = 'manager',
  EMPLOYEE = 'employee',
}

@Schema()
export class UserCompanyDocument extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Company', required: true })
  companyId: Types.ObjectId;

  @Prop({type: [String], enum: Object.values(Role), default: []})
  roles: string[];
}

export const UserCompanySchema = SchemaFactory.createForClass(UserCompanyDocument);