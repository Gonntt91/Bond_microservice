import { Test, TestingModule } from '@nestjs/testing';
import { bondsService } from './bonds.service';

describe('bondsService', () => {
  let service: bondsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [bondsService],
    }).compile();

    service = module.get<bondsService>(bondsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
