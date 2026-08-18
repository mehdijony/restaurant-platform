// services/catalog-service/src/events/events.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { CatalogEventsPublisher } from './catalog-events.publisher';

@Module({
  providers: [CatalogEventsPublisher],
  exports: [CatalogEventsPublisher],
})
export class EventsModule implements OnModuleInit {
  constructor(private readonly publisher: CatalogEventsPublisher) {}

  async onModuleInit(): Promise<void> {
    await this.publisher.connect();
  }
}
