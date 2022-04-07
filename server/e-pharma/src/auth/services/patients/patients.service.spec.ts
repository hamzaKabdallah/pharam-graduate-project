import { Test, TestingModule } from '@nestjs/testing';
import { AuthPatientsService } from './patients.service';

describe('AuthPatientsService', () => {
  let service: AuthPatientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthPatientsService],
    }).compile();

    service = module.get<AuthPatientsService>(AuthPatientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
