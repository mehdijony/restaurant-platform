// services/catalog-service/src/modifiers/modifiers.module.ts
import { Module } from '@nestjs/common';
import { ModifiersService } from './modifiers.service';
import { ModifiersController } from './modifiers.controller';
import { ModifiersResolver } from './modifiers.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EventsModule } from 'src/events/events.module';
import { CacheModule } from 'src/cache/cache.module';

@Module({
  imports: [PrismaModule, EventsModule, CacheModule],
  providers: [ModifiersService, ModifiersResolver],
  controllers: [ModifiersController],
  exports: [ModifiersService],
})
export class ModifiersModule {}
