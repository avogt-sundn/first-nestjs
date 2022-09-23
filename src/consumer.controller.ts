import { Controller } from '@nestjs/common';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
  Transport,
} from '@nestjs/microservices';

@Controller()
export class ConsumerController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @MessagePattern('medium.rocks', Transport.KAFKA)
  readMessage(@Payload() message: any, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();
    const response =
      `[consumer.controller.ts] Receiving a message from topic: ` +
      context.getTopic() +
      JSON.stringify(originalMessage.value);
    console.log(response);
    return response;
  }
}
