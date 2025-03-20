import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { BondDocument } from './models/bonds.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ReservationsRepository extends AbstractRepository<BondDocument> {
  protected readonly logger = new Logger(ReservationsRepository.name);

  constructor(
    @InjectModel(BondDocument.name)
    reservationModel: Model<BondDocument>,
  ) {
    super(reservationModel);
  }
}
