import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly eventEmitter: EventEmitter2) { }

  getHello(): string {
    return 'Hello World!';
  }
}
