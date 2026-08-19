// services/catalog-service/src/graphql/scalars/decimal.scalar.ts
import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import Decimal from 'decimal.js';

@Scalar('Decimal', () => String)
export class DecimalScalar implements CustomScalar<string, Decimal> {
  /**
   * Human‑readable description for the schema. It will appear in GraphQL Docs.
   */
  description = 'Decimal monetary value stored as string to avoid float errors';

  /**
   * Convert the incoming GraphQL value (which is always a string, number, or
   * some JSON literal) into a `Decimal` instance.
   *
   * The `CustomScalar` interface declares the parameter type as `unknown`, so we
   * accept `unknown` here and coerce it to a string/number that `Decimal`
   * understands. If the value cannot be coerced, we throw – this mirrors the
   * behaviour of the default GraphQL scalar "Int"/"Float".
   */
  parseValue(value: unknown): Decimal {
    if (typeof value === 'string' || typeof value === 'number') {
      return new Decimal(value as any);
    }
    // Fall back – GraphQL will wrap this into a `UserInputError`.
    throw new Error('Decimal scalar cannot represent non‑numeric value');
  }

  /**
   * Serialize a `Decimal` (or a plain string/number) back to the string that will
   * be sent to the client.
   */
  serialize(value: Decimal): string {
    // GraphQL expects the scalar to be transmitted as a string.
    // The resolver will almost always return a Decimal instance, so we
    // simply call `toString()` on it.
    return value.toString();
  }

  /**
   * Parse literals from the GraphQL query AST. This is used when a client sends a
   * hard‑coded value in the query (e.g. `price: 12.34`). We accept strings,
   * integers and floats – everything else is an error.
   */
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

