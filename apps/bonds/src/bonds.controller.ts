import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BondService } from './bonds.service';
import { CreateBondDto } from './dto/create-bond.dto';
import { UpdateBondDto } from './dto/update-bond.dto';
import { CurrentUser, Roles, UserDto } from '@app/common';

@Controller('bonds')
export class bondsController {
  constructor(private readonly bondsService: BondService) {}

  // @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createBondDto: CreateBondDto,
    @CurrentUser() user: UserDto,
  ) {
    return this.bondsService.create(createBondDto, user);
  }

  // @Get()
  // // @UseGuards(JwtAuthGuard)
  // async findAll() {
  //   return this.bondsService.findAll();
  // }

  // @Get(':id')
  // @UseGuards(JwtAuthGuard)
  // async findOne(@Param('id') id: string) {
  //   return this.bondsService.findOne(id);
  // }

  // @Patch(':id')
  // // @UseGuards(JwtAuthGuard)
  // async update(
  //   @Param('id') id: string,
  //   @Body() updateReservationDto: UpdateBondDto,
  // ) {
  //   return this.bondsService.update(id, updateReservationDto);
  // }

  // @Delete(':id')
  // // @UseGuards(JwtAuthGuard)
  // @Roles('Admin')
  // async remove(@Param('id') id: string) {
  //   return this.bondsService.remove(id);
  // }
}
