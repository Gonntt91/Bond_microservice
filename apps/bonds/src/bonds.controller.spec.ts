import { Test, TestingModule } from '@nestjs/testing';
import { bondsController } from './bonds.controller';
import { bondsService } from './bonds.service';

describe('bondsController', () => {
  let controller: bondsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [bondsController],
      providers: [bondsService],
    }).compile();

    controller = module.get<bondsController>(bondsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
