// services/catalog-service/src/graphql/scalars/decimal.scalar.ts
import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import Decimal from 'decimal.js';

@Scalar('Decimal', () => String)
export class DecimalScalar implements CustomScalar<string, Decimal> {
  description = 'Decimal monetary value stored as string to avoid float errors';

  parseValue(value: string): Decimal {
    return new Decimal(value);
  }

  serialize(value: Decimal | string): string {
    return value.toString();
  }

  parseLiteral(ast: ValueNode): Decimal {
    if (
      ast.kind === Kind.STRING ||
      ast.kind === Kind.INT ||
      ast.kind === Kind.FLOAT
    ) {
      return new Decimal(ast.value);
    }
    throw new Error('Invalid Decimal value');
  }
}
