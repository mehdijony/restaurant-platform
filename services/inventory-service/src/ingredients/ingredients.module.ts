// services/inventory-service/src/ingredients/ingredients.module.ts
import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { IngredientsResolver } from './ingredients.resolver';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [EventsModule],
  providers: [IngredientsService, IngredientsResolver],
  controllers: [IngredientsController],
  exports: [IngredientsService],
})
export class IngredientsModule {}
