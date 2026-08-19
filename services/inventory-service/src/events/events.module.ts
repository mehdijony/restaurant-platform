// services/inventory-service/src/events/events.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { InventoryEventsPublisher } from './inventory-events.publisher';

@Module({
  providers: [InventoryEventsPublisher],
  exports: [InventoryEventsPublisher],
})
export class EventsModule implements OnModuleInit {
  constructor(private readonly publisher: InventoryEventsPublisher) {}
  async onModuleInit() {
    await this.publisher.connect();
  }
}
