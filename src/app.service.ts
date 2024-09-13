import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  lista: Usuario[];

  constructor(
    private readonly configService: ConfigService,

  ) {
    this.lista = [];
  }

  getHello(): string {
    const port : number= this.configService.get<number>('CLAVE');
    return `Hello World! ${port}`;
  }
}
