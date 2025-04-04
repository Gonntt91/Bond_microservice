import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CreateBondDto } from './dto/create-bond.dto';
import { UserDto } from '@app/common';

@Injectable()
export class BondService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createReservationDto: CreateBondDto, { _id: userId }: UserDto) {
    return this.prisma.bond.create({
      data: {
        userId,
        amount: createReservationDto.amount,
      },
    });
  }

  async get(id: number) {
    return this.prisma.bond.findUnique({
      where: { id },
    });
  }
}