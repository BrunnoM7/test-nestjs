import { Controller, Get, Query } from "@nestjs/common";
import { Type } from "class-transformer";
import { IsNumber } from "class-validator";
import { MathService } from "./math.service";

class GetNumbersQuery{
  @IsNumber()
  @Type(() => Number)
  num1: number;

  @IsNumber()
  @Type(() => Number)
  num2: number;
}

@Controller('math')
export class MathController {
  constructor(private readonly mathService: MathService) {}

  @Get()
  soma(@Query() query:GetNumbersQuery) {
    return this.mathService.soma(query);
  }
}
