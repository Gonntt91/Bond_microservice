import { Inject, Injectable } from '@nestjs/common';
import { PAYMENTS_SERVICE, UserDto } from '@app/common';
import { CreateBondDto } from './dto/create-bond.dto';
import { UpdateBondDto } from './dto/update-bond.dto';
import { bondsRepository } from './bonds.repository';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class bondsService {
  constructor(
    private readonly bondsRepository: bondsRepository,
    @Inject(PAYMENTS_SERVICE) private readonly paymentsService: ClientProxy,
  ) {}

  async create(
    createReservationDto: CreateBondDto,
    { email, _id: userId }: UserDto,
  ) {
    return this.paymentsService
      .send('create_charge', {
        ...createReservationDto.charge,
        email,
      })
      .pipe(
        map((res) => {
          return this.bondsRepository.create({
            ...createReservationDto,
            invoiceId: res.id,
            timestamp: new Date(),
            userId,
          });
        }),
      );
  }

  async findAll() {
    return this.bondsRepository.find({});
  }

  async findOne(_id: string) {
    return this.bondsRepository.findOne({ _id });
  }

  async update(_id: string, updateReservationDto: UpdateBondDto) {
    return this.bondsRepository.findOneAndUpdate(
      { _id },
      { $set: updateReservationDto },
    );
  }

  async remove(_id: string) {
    return this.bondsRepository.findOneAndDelete({ _id });
  }
}
