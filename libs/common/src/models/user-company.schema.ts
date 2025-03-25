import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from './user.schema'; // Assuming User is here
import { Company } from './company.schema';

@Schema()
export class UserCompany extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Company', required: true })
  companyId: Types.ObjectId;

  @Prop()
  roles?: string[];
}

export const UserCompanySchema = SchemaFactory.createForClass(UserCompany);