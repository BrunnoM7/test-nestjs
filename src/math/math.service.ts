import { Injectable } from "@nestjs/common";

@Injectable()
export class MathService {
  soma(query: {num1: number, num2: number}) {
    return Number(query.num1)+Number(query.num2);
  }
}