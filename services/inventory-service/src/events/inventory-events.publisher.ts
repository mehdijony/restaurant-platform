// services/inventory-service/src/events/inventory-events.publisher.ts
import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as amqplib from 'amqplib';
import { v4 as uuidv4 } from 'uuid';
import { InventoryEvent } from './inventory-events.enum';

export interface EventEnvelope<T = unknown> {
  eventId: string;
  eventType: string;
  version: number;
  occurredAt: string;
  restaurantId: string;
  payload: T;
}

@Injectable()
export class InventoryEventsPublisher implements OnModuleDestroy {
  private readonly logger = new Logger(InventoryEventsPublisher.name);
  private connection: Awaited<ReturnType<typeof amqplib.connect>> | null = null;
  private channel: amqplib.Channel | null = null;
  private readonly exchange = 'restaurant.inventory';

  constructor(private readonly config: ConfigService) {}

  async connect(): Promise<void> {
    const url = this.config.get<string>(
      'RABBITMQ_URL',
      'amqp://localhost:5672',
    );
    try {
      this.connection = await amqplib.connect(url);
      this.channel = await this.connection.createChannel();
      await this.channel.assertExchange(this.exchange, 'topic', {
        durable: true,
      });
      this.logger.log('Connected to RabbitMQ');
    } catch (err) {
      this.logger.error('Failed to connect to RabbitMQ', err);
    }
  }

  async publish<T>(
    event: InventoryEvent,
    restaurantId: string,
    payload: T,
  ): Promise<void> {
    if (!this.channel) {
      this.logger.warn('Channel not ready — skipping publish');
      return;
    }

    const envelope: EventEnvelope<T> = {
      eventId: uuidv4(),
      eventType: event,
      version: 1,
      occurredAt: new Date().toISOString(),
      restaurantId,
      payload,
    };

    this.channel.publish(
      this.exchange,
      event,
      Buffer.from(JSON.stringify(envelope)),
      {
        persistent: true,
        contentType: 'application/json',
        headers: { version: 1 },
      },
    );

    this.logger.debug(`Published: ${event}`);
  }

  async onModuleDestroy(): Promise<void> {
    try {
      await this.channel?.close();
      await this.connection?.close();
    } catch (_) {}
  }
}
