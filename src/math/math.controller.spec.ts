import { Test, TestingModule } from '@nestjs/testing';
import { MathController } from './math.controller';
import { MathService } from './math.service';

describe('AppController', () => {
  let appController: MathController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MathController],
      providers: [MathService],
    }).compile();

    appController = app.get<MathController>(MathController);
  });

  describe('math', () => {
    it('should return the sum of the query numbers', () => {
      expect(appController.soma({num1:2, num2:3})).toEqual(expect.any(Number));
    });
  });
});
