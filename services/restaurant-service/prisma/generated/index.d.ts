
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Restaurant
 * 
 */
export type Restaurant = $Result.DefaultSelection<Prisma.$RestaurantPayload>
/**
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model OperatingHours
 * 
 */
export type OperatingHours = $Result.DefaultSelection<Prisma.$OperatingHoursPayload>
/**
 * Model StaffAssignment
 * 
 */
export type StaffAssignment = $Result.DefaultSelection<Prisma.$StaffAssignmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CompanyStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type CompanyStatus = (typeof CompanyStatus)[keyof typeof CompanyStatus]


export const RestaurantStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  TEMPORARILY_CLOSED: 'TEMPORARILY_CLOSED'
};

export type RestaurantStatus = (typeof RestaurantStatus)[keyof typeof RestaurantStatus]


export const BranchStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  TEMPORARILY_CLOSED: 'TEMPORARILY_CLOSED'
};

export type BranchStatus = (typeof BranchStatus)[keyof typeof BranchStatus]


export const DayOfWeek: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek]

}

export type CompanyStatus = $Enums.CompanyStatus

export const CompanyStatus: typeof $Enums.CompanyStatus

export type RestaurantStatus = $Enums.RestaurantStatus

export const RestaurantStatus: typeof $Enums.RestaurantStatus

export type BranchStatus = $Enums.BranchStatus

export const BranchStatus: typeof $Enums.BranchStatus

export type DayOfWeek = $Enums.DayOfWeek

export const DayOfWeek: typeof $Enums.DayOfWeek

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.RestaurantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operatingHours`: Exposes CRUD operations for the **OperatingHours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OperatingHours
    * const operatingHours = await prisma.operatingHours.findMany()
    * ```
    */
  get operatingHours(): Prisma.OperatingHoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffAssignment`: Exposes CRUD operations for the **StaffAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffAssignments
    * const staffAssignments = await prisma.staffAssignment.findMany()
    * ```
    */
  get staffAssignment(): Prisma.StaffAssignmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Company: 'Company',
    Restaurant: 'Restaurant',
    Branch: 'Branch',
    OperatingHours: 'OperatingHours',
    StaffAssignment: 'StaffAssignment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "company" | "restaurant" | "branch" | "operatingHours" | "staffAssignment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Restaurant: {
        payload: Prisma.$RestaurantPayload<ExtArgs>
        fields: Prisma.RestaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findFirst: {
            args: Prisma.RestaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findMany: {
            args: Prisma.RestaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          create: {
            args: Prisma.RestaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          createMany: {
            args: Prisma.RestaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestaurantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          delete: {
            args: Prisma.RestaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          update: {
            args: Prisma.RestaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestaurantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          upsert: {
            args: Prisma.RestaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurant>
          }
          groupBy: {
            args: Prisma.RestaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number
          }
        }
      }
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BranchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BranchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      OperatingHours: {
        payload: Prisma.$OperatingHoursPayload<ExtArgs>
        fields: Prisma.OperatingHoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperatingHoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperatingHoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload>
          }
          findFirst: {
            args: Prisma.OperatingHoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperatingHoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload>
          }
          findMany: {
            args: Prisma.OperatingHoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload>[]
          }
          create: {
            args: Prisma.OperatingHoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload>
          }
          createMany: {
            args: Prisma.OperatingHoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperatingHoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload>[]
          }
          delete: {
            args: Prisma.OperatingHoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload>
          }
          update: {
            args: Prisma.OperatingHoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload>
          }
          deleteMany: {
            args: Prisma.OperatingHoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperatingHoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OperatingHoursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload>[]
          }
          upsert: {
            args: Prisma.OperatingHoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload>
          }
          aggregate: {
            args: Prisma.OperatingHoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperatingHours>
          }
          groupBy: {
            args: Prisma.OperatingHoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperatingHoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperatingHoursCountArgs<ExtArgs>
            result: $Utils.Optional<OperatingHoursCountAggregateOutputType> | number
          }
        }
      }
      StaffAssignment: {
        payload: Prisma.$StaffAssignmentPayload<ExtArgs>
        fields: Prisma.StaffAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAssignmentPayload>
          }
          findFirst: {
            args: Prisma.StaffAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAssignmentPayload>
          }
          findMany: {
            args: Prisma.StaffAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAssignmentPayload>[]
          }
          create: {
            args: Prisma.StaffAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAssignmentPayload>
          }
          createMany: {
            args: Prisma.StaffAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAssignmentPayload>[]
          }
          delete: {
            args: Prisma.StaffAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAssignmentPayload>
          }
          update: {
            args: Prisma.StaffAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.StaffAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.StaffAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAssignmentPayload>
          }
          aggregate: {
            args: Prisma.StaffAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffAssignment>
          }
          groupBy: {
            args: Prisma.StaffAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<StaffAssignmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    company?: CompanyOmit
    restaurant?: RestaurantOmit
    branch?: BranchOmit
    operatingHours?: OperatingHoursOmit
    staffAssignment?: StaffAssignmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    restaurants: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurants?: boolean | CompanyCountOutputTypeCountRestaurantsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountRestaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
  }


  /**
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    branches: number
  }

  export type RestaurantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branches?: boolean | RestaurantCountOutputTypeCountBranchesArgs
  }

  // Custom InputTypes
  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     */
    select?: RestaurantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountBranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
  }


  /**
   * Count Type BranchCountOutputType
   */

  export type BranchCountOutputType = {
    operatingHours: number
    staffAssignments: number
  }

  export type BranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operatingHours?: boolean | BranchCountOutputTypeCountOperatingHoursArgs
    staffAssignments?: boolean | BranchCountOutputTypeCountStaffAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchCountOutputType
     */
    select?: BranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountOperatingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperatingHoursWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountStaffAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffAssignmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    email: string | null
    phone: string | null
    address: string | null
    logoUrl: string | null
    status: $Enums.CompanyStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    email: string | null
    phone: string | null
    address: string | null
    logoUrl: string | null
    status: $Enums.CompanyStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    email: number
    phone: number
    address: number
    logoUrl: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    phone?: true
    address?: true
    logoUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    phone?: true
    address?: true
    logoUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    phone?: true
    address?: true
    logoUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    slug: string
    email: string
    phone: string | null
    address: string | null
    logoUrl: string | null
    status: $Enums.CompanyStatus
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    logoUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurants?: boolean | Company$restaurantsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    logoUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    logoUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    logoUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "email" | "phone" | "address" | "logoUrl" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurants?: boolean | Company$restaurantsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      restaurants: Prisma.$RestaurantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      email: string
      phone: string | null
      address: string | null
      logoUrl: string | null
      status: $Enums.CompanyStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurants<T extends Company$restaurantsArgs<ExtArgs> = {}>(args?: Subset<T, Company$restaurantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly slug: FieldRef<"Company", 'String'>
    readonly email: FieldRef<"Company", 'String'>
    readonly phone: FieldRef<"Company", 'String'>
    readonly address: FieldRef<"Company", 'String'>
    readonly logoUrl: FieldRef<"Company", 'String'>
    readonly status: FieldRef<"Company", 'CompanyStatus'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.restaurants
   */
  export type Company$restaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    cursor?: RestaurantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    name: string | null
    slug: string | null
    description: string | null
    cuisineType: string | null
    logoUrl: string | null
    bannerUrl: string | null
    status: $Enums.RestaurantStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    name: string | null
    slug: string | null
    description: string | null
    cuisineType: string | null
    logoUrl: string | null
    bannerUrl: string | null
    status: $Enums.RestaurantStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantCountAggregateOutputType = {
    id: number
    companyId: number
    name: number
    slug: number
    description: number
    cuisineType: number
    logoUrl: number
    bannerUrl: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RestaurantMinAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    slug?: true
    description?: true
    cuisineType?: true
    logoUrl?: true
    bannerUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantMaxAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    slug?: true
    description?: true
    cuisineType?: true
    logoUrl?: true
    bannerUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantCountAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    slug?: true
    description?: true
    cuisineType?: true
    logoUrl?: true
    bannerUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurant to aggregate.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type RestaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithAggregationInput | RestaurantOrderByWithAggregationInput[]
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum
    having?: RestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }

  export type RestaurantGroupByOutputType = {
    id: string
    companyId: string
    name: string
    slug: string
    description: string | null
    cuisineType: string | null
    logoUrl: string | null
    bannerUrl: string | null
    status: $Enums.RestaurantStatus
    createdAt: Date
    updatedAt: Date
    _count: RestaurantCountAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    cuisineType?: boolean
    logoUrl?: boolean
    bannerUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    branches?: boolean | Restaurant$branchesArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    cuisineType?: boolean
    logoUrl?: boolean
    bannerUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    cuisineType?: boolean
    logoUrl?: boolean
    bannerUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectScalar = {
    id?: boolean
    companyId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    cuisineType?: boolean
    logoUrl?: boolean
    bannerUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RestaurantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "name" | "slug" | "description" | "cuisineType" | "logoUrl" | "bannerUrl" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["restaurant"]>
  export type RestaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    branches?: boolean | Restaurant$branchesArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RestaurantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type RestaurantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $RestaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurant"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      branches: Prisma.$BranchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      name: string
      slug: string
      description: string | null
      cuisineType: string | null
      logoUrl: string | null
      bannerUrl: string | null
      status: $Enums.RestaurantStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["restaurant"]>
    composites: {}
  }

  type RestaurantGetPayload<S extends boolean | null | undefined | RestaurantDefaultArgs> = $Result.GetResult<Prisma.$RestaurantPayload, S>

  type RestaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantCountAggregateInputType | true
    }

  export interface RestaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurant'], meta: { name: 'Restaurant' } }
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {RestaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantFindUniqueArgs>(args: SelectSubset<T, RestaurantFindUniqueArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantFindFirstArgs>(args?: SelectSubset<T, RestaurantFindFirstArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantFindManyArgs>(args?: SelectSubset<T, RestaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurant.
     * @param {RestaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
     */
    create<T extends RestaurantCreateArgs>(args: SelectSubset<T, RestaurantCreateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurants.
     * @param {RestaurantCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantCreateManyArgs>(args?: SelectSubset<T, RestaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Restaurants and returns the data saved in the database.
     * @param {RestaurantCreateManyAndReturnArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Restaurants and only return the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestaurantCreateManyAndReturnArgs>(args?: SelectSubset<T, RestaurantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Restaurant.
     * @param {RestaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
     */
    delete<T extends RestaurantDeleteArgs>(args: SelectSubset<T, RestaurantDeleteArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurant.
     * @param {RestaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantUpdateArgs>(args: SelectSubset<T, RestaurantUpdateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantDeleteManyArgs>(args?: SelectSubset<T, RestaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantUpdateManyArgs>(args: SelectSubset<T, RestaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants and returns the data updated in the database.
     * @param {RestaurantUpdateManyAndReturnArgs} args - Arguments to update many Restaurants.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Restaurants and only return the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RestaurantUpdateManyAndReturnArgs>(args: SelectSubset<T, RestaurantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Restaurant.
     * @param {RestaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantUpsertArgs>(args: SelectSubset<T, RestaurantUpsertArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends RestaurantCountArgs>(
      args?: Subset<T, RestaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurant model
   */
  readonly fields: RestaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    branches<T extends Restaurant$branchesArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$branchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Restaurant model
   */
  interface RestaurantFieldRefs {
    readonly id: FieldRef<"Restaurant", 'String'>
    readonly companyId: FieldRef<"Restaurant", 'String'>
    readonly name: FieldRef<"Restaurant", 'String'>
    readonly slug: FieldRef<"Restaurant", 'String'>
    readonly description: FieldRef<"Restaurant", 'String'>
    readonly cuisineType: FieldRef<"Restaurant", 'String'>
    readonly logoUrl: FieldRef<"Restaurant", 'String'>
    readonly bannerUrl: FieldRef<"Restaurant", 'String'>
    readonly status: FieldRef<"Restaurant", 'RestaurantStatus'>
    readonly createdAt: FieldRef<"Restaurant", 'DateTime'>
    readonly updatedAt: FieldRef<"Restaurant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Restaurant findUnique
   */
  export type RestaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findUniqueOrThrow
   */
  export type RestaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findFirst
   */
  export type RestaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findFirstOrThrow
   */
  export type RestaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findMany
   */
  export type RestaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant create
   */
  export type RestaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurant.
     */
    data: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
  }

  /**
   * Restaurant createMany
   */
  export type RestaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restaurant createManyAndReturn
   */
  export type RestaurantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Restaurant update
   */
  export type RestaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurant.
     */
    data: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
    /**
     * Choose, which Restaurant to update.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant updateMany
   */
  export type RestaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to update.
     */
    limit?: number
  }

  /**
   * Restaurant updateManyAndReturn
   */
  export type RestaurantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Restaurant upsert
   */
  export type RestaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurant to update in case it exists.
     */
    where: RestaurantWhereUniqueInput
    /**
     * In case the Restaurant found by the `where` argument doesn't exist, create a new Restaurant with this data.
     */
    create: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
    /**
     * In case the Restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
  }

  /**
   * Restaurant delete
   */
  export type RestaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter which Restaurant to delete.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant deleteMany
   */
  export type RestaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to delete
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to delete.
     */
    limit?: number
  }

  /**
   * Restaurant.branches
   */
  export type Restaurant$branchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    cursor?: BranchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Restaurant without action
   */
  export type RestaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
  }


  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _avg: BranchAvgAggregateOutputType | null
    _sum: BranchSumAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchAvgAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type BranchSumAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type BranchMinAggregateOutputType = {
    id: string | null
    restaurantId: string | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    status: $Enums.BranchStatus | null
    isMainBranch: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BranchMaxAggregateOutputType = {
    id: string | null
    restaurantId: string | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    status: $Enums.BranchStatus | null
    isMainBranch: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    restaurantId: number
    name: number
    phone: number
    email: number
    address: number
    city: number
    state: number
    country: number
    postalCode: number
    latitude: number
    longitude: number
    status: number
    isMainBranch: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BranchAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type BranchSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type BranchMinAggregateInputType = {
    id?: true
    restaurantId?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    latitude?: true
    longitude?: true
    status?: true
    isMainBranch?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    restaurantId?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    latitude?: true
    longitude?: true
    status?: true
    isMainBranch?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    restaurantId?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    latitude?: true
    longitude?: true
    status?: true
    isMainBranch?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BranchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BranchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _avg?: BranchAvgAggregateInputType
    _sum?: BranchSumAggregateInputType
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: string
    restaurantId: string
    name: string
    phone: string | null
    email: string | null
    address: string
    city: string
    state: string | null
    country: string
    postalCode: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    status: $Enums.BranchStatus
    isMainBranch: boolean
    createdAt: Date
    updatedAt: Date
    _count: BranchCountAggregateOutputType | null
    _avg: BranchAvgAggregateOutputType | null
    _sum: BranchSumAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restaurantId?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    isMainBranch?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    operatingHours?: boolean | Branch$operatingHoursArgs<ExtArgs>
    staffAssignments?: boolean | Branch$staffAssignmentsArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restaurantId?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    isMainBranch?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restaurantId?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    isMainBranch?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectScalar = {
    id?: boolean
    restaurantId?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    isMainBranch?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BranchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "restaurantId" | "name" | "phone" | "email" | "address" | "city" | "state" | "country" | "postalCode" | "latitude" | "longitude" | "status" | "isMainBranch" | "createdAt" | "updatedAt", ExtArgs["result"]["branch"]>
  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    operatingHours?: boolean | Branch$operatingHoursArgs<ExtArgs>
    staffAssignments?: boolean | Branch$staffAssignmentsArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BranchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type BranchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      operatingHours: Prisma.$OperatingHoursPayload<ExtArgs>[]
      staffAssignments: Prisma.$StaffAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      restaurantId: string
      name: string
      phone: string | null
      email: string | null
      address: string
      city: string
      state: string | null
      country: string
      postalCode: string | null
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      status: $Enums.BranchStatus
      isMainBranch: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }

  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchFindUniqueArgs>(args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Branch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchFindFirstArgs>(args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchFindManyArgs>(args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
     */
    create<T extends BranchCreateArgs>(args: SelectSubset<T, BranchCreateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Branches.
     * @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchCreateManyArgs>(args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Branches and returns the data saved in the database.
     * @param {BranchCreateManyAndReturnArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BranchCreateManyAndReturnArgs>(args?: SelectSubset<T, BranchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
     */
    delete<T extends BranchDeleteArgs>(args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchUpdateArgs>(args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchDeleteManyArgs>(args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchUpdateManyArgs>(args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches and returns the data updated in the database.
     * @param {BranchUpdateManyAndReturnArgs} args - Arguments to update many Branches.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BranchUpdateManyAndReturnArgs>(args: SelectSubset<T, BranchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
     */
    upsert<T extends BranchUpsertArgs>(args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operatingHours<T extends Branch$operatingHoursArgs<ExtArgs> = {}>(args?: Subset<T, Branch$operatingHoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staffAssignments<T extends Branch$staffAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$staffAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Branch model
   */
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'String'>
    readonly restaurantId: FieldRef<"Branch", 'String'>
    readonly name: FieldRef<"Branch", 'String'>
    readonly phone: FieldRef<"Branch", 'String'>
    readonly email: FieldRef<"Branch", 'String'>
    readonly address: FieldRef<"Branch", 'String'>
    readonly city: FieldRef<"Branch", 'String'>
    readonly state: FieldRef<"Branch", 'String'>
    readonly country: FieldRef<"Branch", 'String'>
    readonly postalCode: FieldRef<"Branch", 'String'>
    readonly latitude: FieldRef<"Branch", 'Decimal'>
    readonly longitude: FieldRef<"Branch", 'Decimal'>
    readonly status: FieldRef<"Branch", 'BranchStatus'>
    readonly isMainBranch: FieldRef<"Branch", 'Boolean'>
    readonly createdAt: FieldRef<"Branch", 'DateTime'>
    readonly updatedAt: FieldRef<"Branch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }

  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch createManyAndReturn
   */
  export type BranchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch updateManyAndReturn
   */
  export type BranchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }

  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to delete.
     */
    limit?: number
  }

  /**
   * Branch.operatingHours
   */
  export type Branch$operatingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    where?: OperatingHoursWhereInput
    orderBy?: OperatingHoursOrderByWithRelationInput | OperatingHoursOrderByWithRelationInput[]
    cursor?: OperatingHoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperatingHoursScalarFieldEnum | OperatingHoursScalarFieldEnum[]
  }

  /**
   * Branch.staffAssignments
   */
  export type Branch$staffAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAssignment
     */
    select?: StaffAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAssignment
     */
    omit?: StaffAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAssignmentInclude<ExtArgs> | null
    where?: StaffAssignmentWhereInput
    orderBy?: StaffAssignmentOrderByWithRelationInput | StaffAssignmentOrderByWithRelationInput[]
    cursor?: StaffAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffAssignmentScalarFieldEnum | StaffAssignmentScalarFieldEnum[]
  }

  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
  }


  /**
   * Model OperatingHours
   */

  export type AggregateOperatingHours = {
    _count: OperatingHoursCountAggregateOutputType | null
    _min: OperatingHoursMinAggregateOutputType | null
    _max: OperatingHoursMaxAggregateOutputType | null
  }

  export type OperatingHoursMinAggregateOutputType = {
    id: string | null
    branchId: string | null
    day: $Enums.DayOfWeek | null
    openTime: string | null
    closeTime: string | null
    isClosed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OperatingHoursMaxAggregateOutputType = {
    id: string | null
    branchId: string | null
    day: $Enums.DayOfWeek | null
    openTime: string | null
    closeTime: string | null
    isClosed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OperatingHoursCountAggregateOutputType = {
    id: number
    branchId: number
    day: number
    openTime: number
    closeTime: number
    isClosed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OperatingHoursMinAggregateInputType = {
    id?: true
    branchId?: true
    day?: true
    openTime?: true
    closeTime?: true
    isClosed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OperatingHoursMaxAggregateInputType = {
    id?: true
    branchId?: true
    day?: true
    openTime?: true
    closeTime?: true
    isClosed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OperatingHoursCountAggregateInputType = {
    id?: true
    branchId?: true
    day?: true
    openTime?: true
    closeTime?: true
    isClosed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OperatingHoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OperatingHours to aggregate.
     */
    where?: OperatingHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperatingHours to fetch.
     */
    orderBy?: OperatingHoursOrderByWithRelationInput | OperatingHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperatingHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperatingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperatingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OperatingHours
    **/
    _count?: true | OperatingHoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperatingHoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperatingHoursMaxAggregateInputType
  }

  export type GetOperatingHoursAggregateType<T extends OperatingHoursAggregateArgs> = {
        [P in keyof T & keyof AggregateOperatingHours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperatingHours[P]>
      : GetScalarType<T[P], AggregateOperatingHours[P]>
  }




  export type OperatingHoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperatingHoursWhereInput
    orderBy?: OperatingHoursOrderByWithAggregationInput | OperatingHoursOrderByWithAggregationInput[]
    by: OperatingHoursScalarFieldEnum[] | OperatingHoursScalarFieldEnum
    having?: OperatingHoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperatingHoursCountAggregateInputType | true
    _min?: OperatingHoursMinAggregateInputType
    _max?: OperatingHoursMaxAggregateInputType
  }

  export type OperatingHoursGroupByOutputType = {
    id: string
    branchId: string
    day: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed: boolean
    createdAt: Date
    updatedAt: Date
    _count: OperatingHoursCountAggregateOutputType | null
    _min: OperatingHoursMinAggregateOutputType | null
    _max: OperatingHoursMaxAggregateOutputType | null
  }

  type GetOperatingHoursGroupByPayload<T extends OperatingHoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperatingHoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperatingHoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperatingHoursGroupByOutputType[P]>
            : GetScalarType<T[P], OperatingHoursGroupByOutputType[P]>
        }
      >
    >


  export type OperatingHoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    day?: boolean
    openTime?: boolean
    closeTime?: boolean
    isClosed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operatingHours"]>

  export type OperatingHoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    day?: boolean
    openTime?: boolean
    closeTime?: boolean
    isClosed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operatingHours"]>

  export type OperatingHoursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    day?: boolean
    openTime?: boolean
    closeTime?: boolean
    isClosed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operatingHours"]>

  export type OperatingHoursSelectScalar = {
    id?: boolean
    branchId?: boolean
    day?: boolean
    openTime?: boolean
    closeTime?: boolean
    isClosed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OperatingHoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "branchId" | "day" | "openTime" | "closeTime" | "isClosed" | "createdAt" | "updatedAt", ExtArgs["result"]["operatingHours"]>
  export type OperatingHoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type OperatingHoursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type OperatingHoursIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }

  export type $OperatingHoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OperatingHours"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      branchId: string
      day: $Enums.DayOfWeek
      openTime: string
      closeTime: string
      isClosed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["operatingHours"]>
    composites: {}
  }

  type OperatingHoursGetPayload<S extends boolean | null | undefined | OperatingHoursDefaultArgs> = $Result.GetResult<Prisma.$OperatingHoursPayload, S>

  type OperatingHoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OperatingHoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperatingHoursCountAggregateInputType | true
    }

  export interface OperatingHoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OperatingHours'], meta: { name: 'OperatingHours' } }
    /**
     * Find zero or one OperatingHours that matches the filter.
     * @param {OperatingHoursFindUniqueArgs} args - Arguments to find a OperatingHours
     * @example
     * // Get one OperatingHours
     * const operatingHours = await prisma.operatingHours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperatingHoursFindUniqueArgs>(args: SelectSubset<T, OperatingHoursFindUniqueArgs<ExtArgs>>): Prisma__OperatingHoursClient<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OperatingHours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OperatingHoursFindUniqueOrThrowArgs} args - Arguments to find a OperatingHours
     * @example
     * // Get one OperatingHours
     * const operatingHours = await prisma.operatingHours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperatingHoursFindUniqueOrThrowArgs>(args: SelectSubset<T, OperatingHoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperatingHoursClient<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OperatingHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHoursFindFirstArgs} args - Arguments to find a OperatingHours
     * @example
     * // Get one OperatingHours
     * const operatingHours = await prisma.operatingHours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperatingHoursFindFirstArgs>(args?: SelectSubset<T, OperatingHoursFindFirstArgs<ExtArgs>>): Prisma__OperatingHoursClient<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OperatingHours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHoursFindFirstOrThrowArgs} args - Arguments to find a OperatingHours
     * @example
     * // Get one OperatingHours
     * const operatingHours = await prisma.operatingHours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperatingHoursFindFirstOrThrowArgs>(args?: SelectSubset<T, OperatingHoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperatingHoursClient<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OperatingHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OperatingHours
     * const operatingHours = await prisma.operatingHours.findMany()
     * 
     * // Get first 10 OperatingHours
     * const operatingHours = await prisma.operatingHours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operatingHoursWithIdOnly = await prisma.operatingHours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperatingHoursFindManyArgs>(args?: SelectSubset<T, OperatingHoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OperatingHours.
     * @param {OperatingHoursCreateArgs} args - Arguments to create a OperatingHours.
     * @example
     * // Create one OperatingHours
     * const OperatingHours = await prisma.operatingHours.create({
     *   data: {
     *     // ... data to create a OperatingHours
     *   }
     * })
     * 
     */
    create<T extends OperatingHoursCreateArgs>(args: SelectSubset<T, OperatingHoursCreateArgs<ExtArgs>>): Prisma__OperatingHoursClient<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OperatingHours.
     * @param {OperatingHoursCreateManyArgs} args - Arguments to create many OperatingHours.
     * @example
     * // Create many OperatingHours
     * const operatingHours = await prisma.operatingHours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperatingHoursCreateManyArgs>(args?: SelectSubset<T, OperatingHoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OperatingHours and returns the data saved in the database.
     * @param {OperatingHoursCreateManyAndReturnArgs} args - Arguments to create many OperatingHours.
     * @example
     * // Create many OperatingHours
     * const operatingHours = await prisma.operatingHours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OperatingHours and only return the `id`
     * const operatingHoursWithIdOnly = await prisma.operatingHours.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperatingHoursCreateManyAndReturnArgs>(args?: SelectSubset<T, OperatingHoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OperatingHours.
     * @param {OperatingHoursDeleteArgs} args - Arguments to delete one OperatingHours.
     * @example
     * // Delete one OperatingHours
     * const OperatingHours = await prisma.operatingHours.delete({
     *   where: {
     *     // ... filter to delete one OperatingHours
     *   }
     * })
     * 
     */
    delete<T extends OperatingHoursDeleteArgs>(args: SelectSubset<T, OperatingHoursDeleteArgs<ExtArgs>>): Prisma__OperatingHoursClient<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OperatingHours.
     * @param {OperatingHoursUpdateArgs} args - Arguments to update one OperatingHours.
     * @example
     * // Update one OperatingHours
     * const operatingHours = await prisma.operatingHours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperatingHoursUpdateArgs>(args: SelectSubset<T, OperatingHoursUpdateArgs<ExtArgs>>): Prisma__OperatingHoursClient<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OperatingHours.
     * @param {OperatingHoursDeleteManyArgs} args - Arguments to filter OperatingHours to delete.
     * @example
     * // Delete a few OperatingHours
     * const { count } = await prisma.operatingHours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperatingHoursDeleteManyArgs>(args?: SelectSubset<T, OperatingHoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OperatingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OperatingHours
     * const operatingHours = await prisma.operatingHours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperatingHoursUpdateManyArgs>(args: SelectSubset<T, OperatingHoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OperatingHours and returns the data updated in the database.
     * @param {OperatingHoursUpdateManyAndReturnArgs} args - Arguments to update many OperatingHours.
     * @example
     * // Update many OperatingHours
     * const operatingHours = await prisma.operatingHours.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OperatingHours and only return the `id`
     * const operatingHoursWithIdOnly = await prisma.operatingHours.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OperatingHoursUpdateManyAndReturnArgs>(args: SelectSubset<T, OperatingHoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OperatingHours.
     * @param {OperatingHoursUpsertArgs} args - Arguments to update or create a OperatingHours.
     * @example
     * // Update or create a OperatingHours
     * const operatingHours = await prisma.operatingHours.upsert({
     *   create: {
     *     // ... data to create a OperatingHours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OperatingHours we want to update
     *   }
     * })
     */
    upsert<T extends OperatingHoursUpsertArgs>(args: SelectSubset<T, OperatingHoursUpsertArgs<ExtArgs>>): Prisma__OperatingHoursClient<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OperatingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHoursCountArgs} args - Arguments to filter OperatingHours to count.
     * @example
     * // Count the number of OperatingHours
     * const count = await prisma.operatingHours.count({
     *   where: {
     *     // ... the filter for the OperatingHours we want to count
     *   }
     * })
    **/
    count<T extends OperatingHoursCountArgs>(
      args?: Subset<T, OperatingHoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperatingHoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OperatingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OperatingHoursAggregateArgs>(args: Subset<T, OperatingHoursAggregateArgs>): Prisma.PrismaPromise<GetOperatingHoursAggregateType<T>>

    /**
     * Group by OperatingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHoursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OperatingHoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperatingHoursGroupByArgs['orderBy'] }
        : { orderBy?: OperatingHoursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OperatingHoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperatingHoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OperatingHours model
   */
  readonly fields: OperatingHoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OperatingHours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperatingHoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OperatingHours model
   */
  interface OperatingHoursFieldRefs {
    readonly id: FieldRef<"OperatingHours", 'String'>
    readonly branchId: FieldRef<"OperatingHours", 'String'>
    readonly day: FieldRef<"OperatingHours", 'DayOfWeek'>
    readonly openTime: FieldRef<"OperatingHours", 'String'>
    readonly closeTime: FieldRef<"OperatingHours", 'String'>
    readonly isClosed: FieldRef<"OperatingHours", 'Boolean'>
    readonly createdAt: FieldRef<"OperatingHours", 'DateTime'>
    readonly updatedAt: FieldRef<"OperatingHours", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OperatingHours findUnique
   */
  export type OperatingHoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    /**
     * Filter, which OperatingHours to fetch.
     */
    where: OperatingHoursWhereUniqueInput
  }

  /**
   * OperatingHours findUniqueOrThrow
   */
  export type OperatingHoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    /**
     * Filter, which OperatingHours to fetch.
     */
    where: OperatingHoursWhereUniqueInput
  }

  /**
   * OperatingHours findFirst
   */
  export type OperatingHoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    /**
     * Filter, which OperatingHours to fetch.
     */
    where?: OperatingHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperatingHours to fetch.
     */
    orderBy?: OperatingHoursOrderByWithRelationInput | OperatingHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OperatingHours.
     */
    cursor?: OperatingHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperatingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperatingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OperatingHours.
     */
    distinct?: OperatingHoursScalarFieldEnum | OperatingHoursScalarFieldEnum[]
  }

  /**
   * OperatingHours findFirstOrThrow
   */
  export type OperatingHoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    /**
     * Filter, which OperatingHours to fetch.
     */
    where?: OperatingHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperatingHours to fetch.
     */
    orderBy?: OperatingHoursOrderByWithRelationInput | OperatingHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OperatingHours.
     */
    cursor?: OperatingHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperatingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperatingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OperatingHours.
     */
    distinct?: OperatingHoursScalarFieldEnum | OperatingHoursScalarFieldEnum[]
  }

  /**
   * OperatingHours findMany
   */
  export type OperatingHoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    /**
     * Filter, which OperatingHours to fetch.
     */
    where?: OperatingHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperatingHours to fetch.
     */
    orderBy?: OperatingHoursOrderByWithRelationInput | OperatingHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OperatingHours.
     */
    cursor?: OperatingHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperatingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperatingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OperatingHours.
     */
    distinct?: OperatingHoursScalarFieldEnum | OperatingHoursScalarFieldEnum[]
  }

  /**
   * OperatingHours create
   */
  export type OperatingHoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    /**
     * The data needed to create a OperatingHours.
     */
    data: XOR<OperatingHoursCreateInput, OperatingHoursUncheckedCreateInput>
  }

  /**
   * OperatingHours createMany
   */
  export type OperatingHoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OperatingHours.
     */
    data: OperatingHoursCreateManyInput | OperatingHoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OperatingHours createManyAndReturn
   */
  export type OperatingHoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * The data used to create many OperatingHours.
     */
    data: OperatingHoursCreateManyInput | OperatingHoursCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OperatingHours update
   */
  export type OperatingHoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    /**
     * The data needed to update a OperatingHours.
     */
    data: XOR<OperatingHoursUpdateInput, OperatingHoursUncheckedUpdateInput>
    /**
     * Choose, which OperatingHours to update.
     */
    where: OperatingHoursWhereUniqueInput
  }

  /**
   * OperatingHours updateMany
   */
  export type OperatingHoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OperatingHours.
     */
    data: XOR<OperatingHoursUpdateManyMutationInput, OperatingHoursUncheckedUpdateManyInput>
    /**
     * Filter which OperatingHours to update
     */
    where?: OperatingHoursWhereInput
    /**
     * Limit how many OperatingHours to update.
     */
    limit?: number
  }

  /**
   * OperatingHours updateManyAndReturn
   */
  export type OperatingHoursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * The data used to update OperatingHours.
     */
    data: XOR<OperatingHoursUpdateManyMutationInput, OperatingHoursUncheckedUpdateManyInput>
    /**
     * Filter which OperatingHours to update
     */
    where?: OperatingHoursWhereInput
    /**
     * Limit how many OperatingHours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OperatingHours upsert
   */
  export type OperatingHoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    /**
     * The filter to search for the OperatingHours to update in case it exists.
     */
    where: OperatingHoursWhereUniqueInput
    /**
     * In case the OperatingHours found by the `where` argument doesn't exist, create a new OperatingHours with this data.
     */
    create: XOR<OperatingHoursCreateInput, OperatingHoursUncheckedCreateInput>
    /**
     * In case the OperatingHours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperatingHoursUpdateInput, OperatingHoursUncheckedUpdateInput>
  }

  /**
   * OperatingHours delete
   */
  export type OperatingHoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    /**
     * Filter which OperatingHours to delete.
     */
    where: OperatingHoursWhereUniqueInput
  }

  /**
   * OperatingHours deleteMany
   */
  export type OperatingHoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OperatingHours to delete
     */
    where?: OperatingHoursWhereInput
    /**
     * Limit how many OperatingHours to delete.
     */
    limit?: number
  }

  /**
   * OperatingHours without action
   */
  export type OperatingHoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
  }


  /**
   * Model StaffAssignment
   */

  export type AggregateStaffAssignment = {
    _count: StaffAssignmentCountAggregateOutputType | null
    _min: StaffAssignmentMinAggregateOutputType | null
    _max: StaffAssignmentMaxAggregateOutputType | null
  }

  export type StaffAssignmentMinAggregateOutputType = {
    id: string | null
    branchId: string | null
    userId: string | null
    role: string | null
    isActive: boolean | null
    assignedAt: Date | null
    updatedAt: Date | null
  }

  export type StaffAssignmentMaxAggregateOutputType = {
    id: string | null
    branchId: string | null
    userId: string | null
    role: string | null
    isActive: boolean | null
    assignedAt: Date | null
    updatedAt: Date | null
  }

  export type StaffAssignmentCountAggregateOutputType = {
    id: number
    branchId: number
    userId: number
    role: number
    isActive: number
    assignedAt: number
    updatedAt: number
    _all: number
  }


  export type StaffAssignmentMinAggregateInputType = {
    id?: true
    branchId?: true
    userId?: true
    role?: true
    isActive?: true
    assignedAt?: true
    updatedAt?: true
  }

  export type StaffAssignmentMaxAggregateInputType = {
    id?: true
    branchId?: true
    userId?: true
    role?: true
    isActive?: true
    assignedAt?: true
    updatedAt?: true
  }

  export type StaffAssignmentCountAggregateInputType = {
    id?: true
    branchId?: true
    userId?: true
    role?: true
    isActive?: true
    assignedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StaffAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffAssignment to aggregate.
     */
    where?: StaffAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAssignments to fetch.
     */
    orderBy?: StaffAssignmentOrderByWithRelationInput | StaffAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffAssignments
    **/
    _count?: true | StaffAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffAssignmentMaxAggregateInputType
  }

  export type GetStaffAssignmentAggregateType<T extends StaffAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffAssignment[P]>
      : GetScalarType<T[P], AggregateStaffAssignment[P]>
  }




  export type StaffAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffAssignmentWhereInput
    orderBy?: StaffAssignmentOrderByWithAggregationInput | StaffAssignmentOrderByWithAggregationInput[]
    by: StaffAssignmentScalarFieldEnum[] | StaffAssignmentScalarFieldEnum
    having?: StaffAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffAssignmentCountAggregateInputType | true
    _min?: StaffAssignmentMinAggregateInputType
    _max?: StaffAssignmentMaxAggregateInputType
  }

  export type StaffAssignmentGroupByOutputType = {
    id: string
    branchId: string
    userId: string
    role: string
    isActive: boolean
    assignedAt: Date
    updatedAt: Date
    _count: StaffAssignmentCountAggregateOutputType | null
    _min: StaffAssignmentMinAggregateOutputType | null
    _max: StaffAssignmentMaxAggregateOutputType | null
  }

  type GetStaffAssignmentGroupByPayload<T extends StaffAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], StaffAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type StaffAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    userId?: boolean
    role?: boolean
    isActive?: boolean
    assignedAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffAssignment"]>

  export type StaffAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    userId?: boolean
    role?: boolean
    isActive?: boolean
    assignedAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffAssignment"]>

  export type StaffAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    userId?: boolean
    role?: boolean
    isActive?: boolean
    assignedAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffAssignment"]>

  export type StaffAssignmentSelectScalar = {
    id?: boolean
    branchId?: boolean
    userId?: boolean
    role?: boolean
    isActive?: boolean
    assignedAt?: boolean
    updatedAt?: boolean
  }

  export type StaffAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "branchId" | "userId" | "role" | "isActive" | "assignedAt" | "updatedAt", ExtArgs["result"]["staffAssignment"]>
  export type StaffAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type StaffAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type StaffAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }

  export type $StaffAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffAssignment"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      branchId: string
      userId: string
      role: string
      isActive: boolean
      assignedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["staffAssignment"]>
    composites: {}
  }

  type StaffAssignmentGetPayload<S extends boolean | null | undefined | StaffAssignmentDefaultArgs> = $Result.GetResult<Prisma.$StaffAssignmentPayload, S>

  type StaffAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffAssignmentCountAggregateInputType | true
    }

  export interface StaffAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffAssignment'], meta: { name: 'StaffAssignment' } }
    /**
     * Find zero or one StaffAssignment that matches the filter.
     * @param {StaffAssignmentFindUniqueArgs} args - Arguments to find a StaffAssignment
     * @example
     * // Get one StaffAssignment
     * const staffAssignment = await prisma.staffAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffAssignmentFindUniqueArgs>(args: SelectSubset<T, StaffAssignmentFindUniqueArgs<ExtArgs>>): Prisma__StaffAssignmentClient<$Result.GetResult<Prisma.$StaffAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffAssignmentFindUniqueOrThrowArgs} args - Arguments to find a StaffAssignment
     * @example
     * // Get one StaffAssignment
     * const staffAssignment = await prisma.staffAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffAssignmentClient<$Result.GetResult<Prisma.$StaffAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAssignmentFindFirstArgs} args - Arguments to find a StaffAssignment
     * @example
     * // Get one StaffAssignment
     * const staffAssignment = await prisma.staffAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffAssignmentFindFirstArgs>(args?: SelectSubset<T, StaffAssignmentFindFirstArgs<ExtArgs>>): Prisma__StaffAssignmentClient<$Result.GetResult<Prisma.$StaffAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAssignmentFindFirstOrThrowArgs} args - Arguments to find a StaffAssignment
     * @example
     * // Get one StaffAssignment
     * const staffAssignment = await prisma.staffAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffAssignmentClient<$Result.GetResult<Prisma.$StaffAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffAssignments
     * const staffAssignments = await prisma.staffAssignment.findMany()
     * 
     * // Get first 10 StaffAssignments
     * const staffAssignments = await prisma.staffAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffAssignmentWithIdOnly = await prisma.staffAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffAssignmentFindManyArgs>(args?: SelectSubset<T, StaffAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffAssignment.
     * @param {StaffAssignmentCreateArgs} args - Arguments to create a StaffAssignment.
     * @example
     * // Create one StaffAssignment
     * const StaffAssignment = await prisma.staffAssignment.create({
     *   data: {
     *     // ... data to create a StaffAssignment
     *   }
     * })
     * 
     */
    create<T extends StaffAssignmentCreateArgs>(args: SelectSubset<T, StaffAssignmentCreateArgs<ExtArgs>>): Prisma__StaffAssignmentClient<$Result.GetResult<Prisma.$StaffAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffAssignments.
     * @param {StaffAssignmentCreateManyArgs} args - Arguments to create many StaffAssignments.
     * @example
     * // Create many StaffAssignments
     * const staffAssignment = await prisma.staffAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffAssignmentCreateManyArgs>(args?: SelectSubset<T, StaffAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffAssignments and returns the data saved in the database.
     * @param {StaffAssignmentCreateManyAndReturnArgs} args - Arguments to create many StaffAssignments.
     * @example
     * // Create many StaffAssignments
     * const staffAssignment = await prisma.staffAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffAssignments and only return the `id`
     * const staffAssignmentWithIdOnly = await prisma.staffAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaffAssignment.
     * @param {StaffAssignmentDeleteArgs} args - Arguments to delete one StaffAssignment.
     * @example
     * // Delete one StaffAssignment
     * const StaffAssignment = await prisma.staffAssignment.delete({
     *   where: {
     *     // ... filter to delete one StaffAssignment
     *   }
     * })
     * 
     */
    delete<T extends StaffAssignmentDeleteArgs>(args: SelectSubset<T, StaffAssignmentDeleteArgs<ExtArgs>>): Prisma__StaffAssignmentClient<$Result.GetResult<Prisma.$StaffAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffAssignment.
     * @param {StaffAssignmentUpdateArgs} args - Arguments to update one StaffAssignment.
     * @example
     * // Update one StaffAssignment
     * const staffAssignment = await prisma.staffAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffAssignmentUpdateArgs>(args: SelectSubset<T, StaffAssignmentUpdateArgs<ExtArgs>>): Prisma__StaffAssignmentClient<$Result.GetResult<Prisma.$StaffAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffAssignments.
     * @param {StaffAssignmentDeleteManyArgs} args - Arguments to filter StaffAssignments to delete.
     * @example
     * // Delete a few StaffAssignments
     * const { count } = await prisma.staffAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffAssignmentDeleteManyArgs>(args?: SelectSubset<T, StaffAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffAssignments
     * const staffAssignment = await prisma.staffAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffAssignmentUpdateManyArgs>(args: SelectSubset<T, StaffAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffAssignments and returns the data updated in the database.
     * @param {StaffAssignmentUpdateManyAndReturnArgs} args - Arguments to update many StaffAssignments.
     * @example
     * // Update many StaffAssignments
     * const staffAssignment = await prisma.staffAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaffAssignments and only return the `id`
     * const staffAssignmentWithIdOnly = await prisma.staffAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaffAssignment.
     * @param {StaffAssignmentUpsertArgs} args - Arguments to update or create a StaffAssignment.
     * @example
     * // Update or create a StaffAssignment
     * const staffAssignment = await prisma.staffAssignment.upsert({
     *   create: {
     *     // ... data to create a StaffAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffAssignment we want to update
     *   }
     * })
     */
    upsert<T extends StaffAssignmentUpsertArgs>(args: SelectSubset<T, StaffAssignmentUpsertArgs<ExtArgs>>): Prisma__StaffAssignmentClient<$Result.GetResult<Prisma.$StaffAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAssignmentCountArgs} args - Arguments to filter StaffAssignments to count.
     * @example
     * // Count the number of StaffAssignments
     * const count = await prisma.staffAssignment.count({
     *   where: {
     *     // ... the filter for the StaffAssignments we want to count
     *   }
     * })
    **/
    count<T extends StaffAssignmentCountArgs>(
      args?: Subset<T, StaffAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAssignmentAggregateArgs>(args: Subset<T, StaffAssignmentAggregateArgs>): Prisma.PrismaPromise<GetStaffAssignmentAggregateType<T>>

    /**
     * Group by StaffAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: StaffAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffAssignment model
   */
  readonly fields: StaffAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StaffAssignment model
   */
  interface StaffAssignmentFieldRefs {
    readonly id: FieldRef<"StaffAssignment", 'String'>
    readonly branchId: FieldRef<"StaffAssignment", 'String'>
    readonly userId: FieldRef<"StaffAssignment", 'String'>
    readonly role: FieldRef<"StaffAssignment", 'String'>
    readonly isActive: FieldRef<"StaffAssignment", 'Boolean'>
    readonly assignedAt: FieldRef<"StaffAssignment", 'DateTime'>
    readonly updatedAt: FieldRef<"StaffAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StaffAssignment findUnique
   */
  export type StaffAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAssignment
     */
    select?: StaffAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAssignment
     */
    omit?: StaffAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which StaffAssignment to fetch.
     */
    where: StaffAssignmentWhereUniqueInput
  }

  /**
   * StaffAssignment findUniqueOrThrow
   */
  export type StaffAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAssignment
     */
    select?: StaffAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAssignment
     */
    omit?: StaffAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which StaffAssignment to fetch.
     */
    where: StaffAssignmentWhereUniqueInput
  }

  /**
   * StaffAssignment findFirst
   */
  export type StaffAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAssignment
     */
    select?: StaffAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAssignment
     */
    omit?: StaffAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which StaffAssignment to fetch.
     */
    where?: StaffAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAssignments to fetch.
     */
    orderBy?: StaffAssignmentOrderByWithRelationInput | StaffAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffAssignments.
     */
    cursor?: StaffAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffAssignments.
     */
    distinct?: StaffAssignmentScalarFieldEnum | StaffAssignmentScalarFieldEnum[]
  }

  /**
   * StaffAssignment findFirstOrThrow
   */
  export type StaffAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAssignment
     */
    select?: StaffAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAssignment
     */
    omit?: StaffAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which StaffAssignment to fetch.
     */
    where?: StaffAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAssignments to fetch.
     */
    orderBy?: StaffAssignmentOrderByWithRelationInput | StaffAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffAssignments.
     */
    cursor?: StaffAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffAssignments.
     */
    distinct?: StaffAssignmentScalarFieldEnum | StaffAssignmentScalarFieldEnum[]
  }

  /**
   * StaffAssignment findMany
   */
  export type StaffAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAssignment
     */
    select?: StaffAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAssignment
     */
    omit?: StaffAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which StaffAssignments to fetch.
     */
    where?: StaffAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAssignments to fetch.
     */
    orderBy?: StaffAssignmentOrderByWithRelationInput | StaffAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffAssignments.
     */
    cursor?: StaffAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffAssignments.
     */
    distinct?: StaffAssignmentScalarFieldEnum | StaffAssignmentScalarFieldEnum[]
  }

  /**
   * StaffAssignment create
   */
  export type StaffAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAssignment
     */
    select?: StaffAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAssignment
     */
    omit?: StaffAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a StaffAssignment.
     */
    data: XOR<StaffAssignmentCreateInput, StaffAssignmentUncheckedCreateInput>
  }

  /**
   * StaffAssignment createMany
   */
  export type StaffAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffAssignments.
     */
    data: StaffAssignmentCreateManyInput | StaffAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaffAssignment createManyAndReturn
   */
  export type StaffAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAssignment
     */
    select?: StaffAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAssignment
     */
    omit?: StaffAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many StaffAssignments.
     */
    data: StaffAssignmentCreateManyInput | StaffAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffAssignment update
   */
  export type StaffAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAssignment
     */
    select?: StaffAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAssignment
     */
    omit?: StaffAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a StaffAssignment.
     */
    data: XOR<StaffAssignmentUpdateInput, StaffAssignmentUncheckedUpdateInput>
    /**
     * Choose, which StaffAssignment to update.
     */
    where: StaffAssignmentWhereUniqueInput
  }

  /**
   * StaffAssignment updateMany
   */
  export type StaffAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffAssignments.
     */
    data: XOR<StaffAssignmentUpdateManyMutationInput, StaffAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which StaffAssignments to update
     */
    where?: StaffAssignmentWhereInput
    /**
     * Limit how many StaffAssignments to update.
     */
    limit?: number
  }

  /**
   * StaffAssignment updateManyAndReturn
   */
  export type StaffAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAssignment
     */
    select?: StaffAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAssignment
     */
    omit?: StaffAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update StaffAssignments.
     */
    data: XOR<StaffAssignmentUpdateManyMutationInput, StaffAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which StaffAssignments to update
     */
    where?: StaffAssignmentWhereInput
    /**
     * Limit how many StaffAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffAssignment upsert
   */
  export type StaffAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAssignment
     */
    select?: StaffAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAssignment
     */
    omit?: StaffAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the StaffAssignment to update in case it exists.
     */
    where: StaffAssignmentWhereUniqueInput
    /**
     * In case the StaffAssignment found by the `where` argument doesn't exist, create a new StaffAssignment with this data.
     */
    create: XOR<StaffAssignmentCreateInput, StaffAssignmentUncheckedCreateInput>
    /**
     * In case the StaffAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffAssignmentUpdateInput, StaffAssignmentUncheckedUpdateInput>
  }

  /**
   * StaffAssignment delete
   */
  export type StaffAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAssignment
     */
    select?: StaffAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAssignment
     */
    omit?: StaffAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAssignmentInclude<ExtArgs> | null
    /**
     * Filter which StaffAssignment to delete.
     */
    where: StaffAssignmentWhereUniqueInput
  }

  /**
   * StaffAssignment deleteMany
   */
  export type StaffAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffAssignments to delete
     */
    where?: StaffAssignmentWhereInput
    /**
     * Limit how many StaffAssignments to delete.
     */
    limit?: number
  }

  /**
   * StaffAssignment without action
   */
  export type StaffAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAssignment
     */
    select?: StaffAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAssignment
     */
    omit?: StaffAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAssignmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    email: 'email',
    phone: 'phone',
    address: 'address',
    logoUrl: 'logoUrl',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const RestaurantScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    cuisineType: 'cuisineType',
    logoUrl: 'logoUrl',
    bannerUrl: 'bannerUrl',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


  export const BranchScalarFieldEnum: {
    id: 'id',
    restaurantId: 'restaurantId',
    name: 'name',
    phone: 'phone',
    email: 'email',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    postalCode: 'postalCode',
    latitude: 'latitude',
    longitude: 'longitude',
    status: 'status',
    isMainBranch: 'isMainBranch',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const OperatingHoursScalarFieldEnum: {
    id: 'id',
    branchId: 'branchId',
    day: 'day',
    openTime: 'openTime',
    closeTime: 'closeTime',
    isClosed: 'isClosed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OperatingHoursScalarFieldEnum = (typeof OperatingHoursScalarFieldEnum)[keyof typeof OperatingHoursScalarFieldEnum]


  export const StaffAssignmentScalarFieldEnum: {
    id: 'id',
    branchId: 'branchId',
    userId: 'userId',
    role: 'role',
    isActive: 'isActive',
    assignedAt: 'assignedAt',
    updatedAt: 'updatedAt'
  };

  export type StaffAssignmentScalarFieldEnum = (typeof StaffAssignmentScalarFieldEnum)[keyof typeof StaffAssignmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'CompanyStatus'
   */
  export type EnumCompanyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanyStatus'>
    


  /**
   * Reference to a field of type 'CompanyStatus[]'
   */
  export type ListEnumCompanyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanyStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RestaurantStatus'
   */
  export type EnumRestaurantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RestaurantStatus'>
    


  /**
   * Reference to a field of type 'RestaurantStatus[]'
   */
  export type ListEnumRestaurantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RestaurantStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'BranchStatus'
   */
  export type EnumBranchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BranchStatus'>
    


  /**
   * Reference to a field of type 'BranchStatus[]'
   */
  export type ListEnumBranchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BranchStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DayOfWeek'
   */
  export type EnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek'>
    


  /**
   * Reference to a field of type 'DayOfWeek[]'
   */
  export type ListEnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    slug?: StringFilter<"Company"> | string
    email?: StringFilter<"Company"> | string
    phone?: StringNullableFilter<"Company"> | string | null
    address?: StringNullableFilter<"Company"> | string | null
    logoUrl?: StringNullableFilter<"Company"> | string | null
    status?: EnumCompanyStatusFilter<"Company"> | $Enums.CompanyStatus
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    restaurants?: RestaurantListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurants?: RestaurantOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    email?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    phone?: StringNullableFilter<"Company"> | string | null
    address?: StringNullableFilter<"Company"> | string | null
    logoUrl?: StringNullableFilter<"Company"> | string | null
    status?: EnumCompanyStatusFilter<"Company"> | $Enums.CompanyStatus
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    restaurants?: RestaurantListRelationFilter
  }, "id" | "slug" | "email">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    slug?: StringWithAggregatesFilter<"Company"> | string
    email?: StringWithAggregatesFilter<"Company"> | string
    phone?: StringNullableWithAggregatesFilter<"Company"> | string | null
    address?: StringNullableWithAggregatesFilter<"Company"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Company"> | string | null
    status?: EnumCompanyStatusWithAggregatesFilter<"Company"> | $Enums.CompanyStatus
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type RestaurantWhereInput = {
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    id?: StringFilter<"Restaurant"> | string
    companyId?: StringFilter<"Restaurant"> | string
    name?: StringFilter<"Restaurant"> | string
    slug?: StringFilter<"Restaurant"> | string
    description?: StringNullableFilter<"Restaurant"> | string | null
    cuisineType?: StringNullableFilter<"Restaurant"> | string | null
    logoUrl?: StringNullableFilter<"Restaurant"> | string | null
    bannerUrl?: StringNullableFilter<"Restaurant"> | string | null
    status?: EnumRestaurantStatusFilter<"Restaurant"> | $Enums.RestaurantStatus
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    branches?: BranchListRelationFilter
  }

  export type RestaurantOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    cuisineType?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    branches?: BranchOrderByRelationAggregateInput
  }

  export type RestaurantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    companyId?: StringFilter<"Restaurant"> | string
    name?: StringFilter<"Restaurant"> | string
    description?: StringNullableFilter<"Restaurant"> | string | null
    cuisineType?: StringNullableFilter<"Restaurant"> | string | null
    logoUrl?: StringNullableFilter<"Restaurant"> | string | null
    bannerUrl?: StringNullableFilter<"Restaurant"> | string | null
    status?: EnumRestaurantStatusFilter<"Restaurant"> | $Enums.RestaurantStatus
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    branches?: BranchListRelationFilter
  }, "id" | "slug">

  export type RestaurantOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    cuisineType?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RestaurantCountOrderByAggregateInput
    _max?: RestaurantMaxOrderByAggregateInput
    _min?: RestaurantMinOrderByAggregateInput
  }

  export type RestaurantScalarWhereWithAggregatesInput = {
    AND?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    OR?: RestaurantScalarWhereWithAggregatesInput[]
    NOT?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Restaurant"> | string
    companyId?: StringWithAggregatesFilter<"Restaurant"> | string
    name?: StringWithAggregatesFilter<"Restaurant"> | string
    slug?: StringWithAggregatesFilter<"Restaurant"> | string
    description?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    cuisineType?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    bannerUrl?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    status?: EnumRestaurantStatusWithAggregatesFilter<"Restaurant"> | $Enums.RestaurantStatus
    createdAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
  }

  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: StringFilter<"Branch"> | string
    restaurantId?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    phone?: StringNullableFilter<"Branch"> | string | null
    email?: StringNullableFilter<"Branch"> | string | null
    address?: StringFilter<"Branch"> | string
    city?: StringFilter<"Branch"> | string
    state?: StringNullableFilter<"Branch"> | string | null
    country?: StringFilter<"Branch"> | string
    postalCode?: StringNullableFilter<"Branch"> | string | null
    latitude?: DecimalNullableFilter<"Branch"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Branch"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumBranchStatusFilter<"Branch"> | $Enums.BranchStatus
    isMainBranch?: BoolFilter<"Branch"> | boolean
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    operatingHours?: OperatingHoursListRelationFilter
    staffAssignments?: StaffAssignmentListRelationFilter
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    restaurantId?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrder
    postalCode?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    status?: SortOrder
    isMainBranch?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    operatingHours?: OperatingHoursOrderByRelationAggregateInput
    staffAssignments?: StaffAssignmentOrderByRelationAggregateInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    restaurantId?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    phone?: StringNullableFilter<"Branch"> | string | null
    email?: StringNullableFilter<"Branch"> | string | null
    address?: StringFilter<"Branch"> | string
    city?: StringFilter<"Branch"> | string
    state?: StringNullableFilter<"Branch"> | string | null
    country?: StringFilter<"Branch"> | string
    postalCode?: StringNullableFilter<"Branch"> | string | null
    latitude?: DecimalNullableFilter<"Branch"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Branch"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumBranchStatusFilter<"Branch"> | $Enums.BranchStatus
    isMainBranch?: BoolFilter<"Branch"> | boolean
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    operatingHours?: OperatingHoursListRelationFilter
    staffAssignments?: StaffAssignmentListRelationFilter
  }, "id">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    restaurantId?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrder
    postalCode?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    status?: SortOrder
    isMainBranch?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BranchCountOrderByAggregateInput
    _avg?: BranchAvgOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
    _sum?: BranchSumOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Branch"> | string
    restaurantId?: StringWithAggregatesFilter<"Branch"> | string
    name?: StringWithAggregatesFilter<"Branch"> | string
    phone?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    email?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    address?: StringWithAggregatesFilter<"Branch"> | string
    city?: StringWithAggregatesFilter<"Branch"> | string
    state?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    country?: StringWithAggregatesFilter<"Branch"> | string
    postalCode?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    latitude?: DecimalNullableWithAggregatesFilter<"Branch"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"Branch"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumBranchStatusWithAggregatesFilter<"Branch"> | $Enums.BranchStatus
    isMainBranch?: BoolWithAggregatesFilter<"Branch"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
  }

  export type OperatingHoursWhereInput = {
    AND?: OperatingHoursWhereInput | OperatingHoursWhereInput[]
    OR?: OperatingHoursWhereInput[]
    NOT?: OperatingHoursWhereInput | OperatingHoursWhereInput[]
    id?: StringFilter<"OperatingHours"> | string
    branchId?: StringFilter<"OperatingHours"> | string
    day?: EnumDayOfWeekFilter<"OperatingHours"> | $Enums.DayOfWeek
    openTime?: StringFilter<"OperatingHours"> | string
    closeTime?: StringFilter<"OperatingHours"> | string
    isClosed?: BoolFilter<"OperatingHours"> | boolean
    createdAt?: DateTimeFilter<"OperatingHours"> | Date | string
    updatedAt?: DateTimeFilter<"OperatingHours"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
  }

  export type OperatingHoursOrderByWithRelationInput = {
    id?: SortOrder
    branchId?: SortOrder
    day?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
  }

  export type OperatingHoursWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    branchId_day?: OperatingHoursBranchIdDayCompoundUniqueInput
    AND?: OperatingHoursWhereInput | OperatingHoursWhereInput[]
    OR?: OperatingHoursWhereInput[]
    NOT?: OperatingHoursWhereInput | OperatingHoursWhereInput[]
    branchId?: StringFilter<"OperatingHours"> | string
    day?: EnumDayOfWeekFilter<"OperatingHours"> | $Enums.DayOfWeek
    openTime?: StringFilter<"OperatingHours"> | string
    closeTime?: StringFilter<"OperatingHours"> | string
    isClosed?: BoolFilter<"OperatingHours"> | boolean
    createdAt?: DateTimeFilter<"OperatingHours"> | Date | string
    updatedAt?: DateTimeFilter<"OperatingHours"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
  }, "id" | "branchId_day">

  export type OperatingHoursOrderByWithAggregationInput = {
    id?: SortOrder
    branchId?: SortOrder
    day?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OperatingHoursCountOrderByAggregateInput
    _max?: OperatingHoursMaxOrderByAggregateInput
    _min?: OperatingHoursMinOrderByAggregateInput
  }

  export type OperatingHoursScalarWhereWithAggregatesInput = {
    AND?: OperatingHoursScalarWhereWithAggregatesInput | OperatingHoursScalarWhereWithAggregatesInput[]
    OR?: OperatingHoursScalarWhereWithAggregatesInput[]
    NOT?: OperatingHoursScalarWhereWithAggregatesInput | OperatingHoursScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OperatingHours"> | string
    branchId?: StringWithAggregatesFilter<"OperatingHours"> | string
    day?: EnumDayOfWeekWithAggregatesFilter<"OperatingHours"> | $Enums.DayOfWeek
    openTime?: StringWithAggregatesFilter<"OperatingHours"> | string
    closeTime?: StringWithAggregatesFilter<"OperatingHours"> | string
    isClosed?: BoolWithAggregatesFilter<"OperatingHours"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"OperatingHours"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OperatingHours"> | Date | string
  }

  export type StaffAssignmentWhereInput = {
    AND?: StaffAssignmentWhereInput | StaffAssignmentWhereInput[]
    OR?: StaffAssignmentWhereInput[]
    NOT?: StaffAssignmentWhereInput | StaffAssignmentWhereInput[]
    id?: StringFilter<"StaffAssignment"> | string
    branchId?: StringFilter<"StaffAssignment"> | string
    userId?: StringFilter<"StaffAssignment"> | string
    role?: StringFilter<"StaffAssignment"> | string
    isActive?: BoolFilter<"StaffAssignment"> | boolean
    assignedAt?: DateTimeFilter<"StaffAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"StaffAssignment"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
  }

  export type StaffAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    branchId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    assignedAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
  }

  export type StaffAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    branchId_userId?: StaffAssignmentBranchIdUserIdCompoundUniqueInput
    AND?: StaffAssignmentWhereInput | StaffAssignmentWhereInput[]
    OR?: StaffAssignmentWhereInput[]
    NOT?: StaffAssignmentWhereInput | StaffAssignmentWhereInput[]
    branchId?: StringFilter<"StaffAssignment"> | string
    userId?: StringFilter<"StaffAssignment"> | string
    role?: StringFilter<"StaffAssignment"> | string
    isActive?: BoolFilter<"StaffAssignment"> | boolean
    assignedAt?: DateTimeFilter<"StaffAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"StaffAssignment"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
  }, "id" | "branchId_userId">

  export type StaffAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    branchId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    assignedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StaffAssignmentCountOrderByAggregateInput
    _max?: StaffAssignmentMaxOrderByAggregateInput
    _min?: StaffAssignmentMinOrderByAggregateInput
  }

  export type StaffAssignmentScalarWhereWithAggregatesInput = {
    AND?: StaffAssignmentScalarWhereWithAggregatesInput | StaffAssignmentScalarWhereWithAggregatesInput[]
    OR?: StaffAssignmentScalarWhereWithAggregatesInput[]
    NOT?: StaffAssignmentScalarWhereWithAggregatesInput | StaffAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StaffAssignment"> | string
    branchId?: StringWithAggregatesFilter<"StaffAssignment"> | string
    userId?: StringWithAggregatesFilter<"StaffAssignment"> | string
    role?: StringWithAggregatesFilter<"StaffAssignment"> | string
    isActive?: BoolWithAggregatesFilter<"StaffAssignment"> | boolean
    assignedAt?: DateTimeWithAggregatesFilter<"StaffAssignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StaffAssignment"> | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logoUrl?: string | null
    status?: $Enums.CompanyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurants?: RestaurantCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logoUrl?: string | null
    status?: $Enums.CompanyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurants?: RestaurantUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCompanyStatusFieldUpdateOperationsInput | $Enums.CompanyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurants?: RestaurantUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCompanyStatusFieldUpdateOperationsInput | $Enums.CompanyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurants?: RestaurantUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logoUrl?: string | null
    status?: $Enums.CompanyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCompanyStatusFieldUpdateOperationsInput | $Enums.CompanyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCompanyStatusFieldUpdateOperationsInput | $Enums.CompanyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    cuisineType?: string | null
    logoUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.RestaurantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutRestaurantsInput
    branches?: BranchCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateInput = {
    id?: string
    companyId: string
    name: string
    slug: string
    description?: string | null
    cuisineType?: string | null
    logoUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.RestaurantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    branches?: BranchUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cuisineType?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRestaurantStatusFieldUpdateOperationsInput | $Enums.RestaurantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutRestaurantsNestedInput
    branches?: BranchUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cuisineType?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRestaurantStatusFieldUpdateOperationsInput | $Enums.RestaurantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branches?: BranchUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateManyInput = {
    id?: string
    companyId: string
    name: string
    slug: string
    description?: string | null
    cuisineType?: string | null
    logoUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.RestaurantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cuisineType?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRestaurantStatusFieldUpdateOperationsInput | $Enums.RestaurantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cuisineType?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRestaurantStatusFieldUpdateOperationsInput | $Enums.RestaurantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchCreateInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    address: string
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.BranchStatus
    isMainBranch?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutBranchesInput
    operatingHours?: OperatingHoursCreateNestedManyWithoutBranchInput
    staffAssignments?: StaffAssignmentCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: string
    restaurantId: string
    name: string
    phone?: string | null
    email?: string | null
    address: string
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.BranchStatus
    isMainBranch?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    operatingHours?: OperatingHoursUncheckedCreateNestedManyWithoutBranchInput
    staffAssignments?: StaffAssignmentUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumBranchStatusFieldUpdateOperationsInput | $Enums.BranchStatus
    isMainBranch?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutBranchesNestedInput
    operatingHours?: OperatingHoursUpdateManyWithoutBranchNestedInput
    staffAssignments?: StaffAssignmentUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumBranchStatusFieldUpdateOperationsInput | $Enums.BranchStatus
    isMainBranch?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operatingHours?: OperatingHoursUncheckedUpdateManyWithoutBranchNestedInput
    staffAssignments?: StaffAssignmentUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: string
    restaurantId: string
    name: string
    phone?: string | null
    email?: string | null
    address: string
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.BranchStatus
    isMainBranch?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumBranchStatusFieldUpdateOperationsInput | $Enums.BranchStatus
    isMainBranch?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumBranchStatusFieldUpdateOperationsInput | $Enums.BranchStatus
    isMainBranch?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatingHoursCreateInput = {
    id?: string
    day: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutOperatingHoursInput
  }

  export type OperatingHoursUncheckedCreateInput = {
    id?: string
    branchId: string
    day: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperatingHoursUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutOperatingHoursNestedInput
  }

  export type OperatingHoursUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatingHoursCreateManyInput = {
    id?: string
    branchId: string
    day: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperatingHoursUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatingHoursUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAssignmentCreateInput = {
    id?: string
    userId: string
    role: string
    isActive?: boolean
    assignedAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutStaffAssignmentsInput
  }

  export type StaffAssignmentUncheckedCreateInput = {
    id?: string
    branchId: string
    userId: string
    role: string
    isActive?: boolean
    assignedAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutStaffAssignmentsNestedInput
  }

  export type StaffAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAssignmentCreateManyInput = {
    id?: string
    branchId: string
    userId: string
    role: string
    isActive?: boolean
    assignedAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumCompanyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyStatus | EnumCompanyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CompanyStatus[] | ListEnumCompanyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanyStatus[] | ListEnumCompanyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanyStatusFilter<$PrismaModel> | $Enums.CompanyStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RestaurantListRelationFilter = {
    every?: RestaurantWhereInput
    some?: RestaurantWhereInput
    none?: RestaurantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RestaurantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    logoUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    logoUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    logoUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCompanyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyStatus | EnumCompanyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CompanyStatus[] | ListEnumCompanyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanyStatus[] | ListEnumCompanyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanyStatusWithAggregatesFilter<$PrismaModel> | $Enums.CompanyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompanyStatusFilter<$PrismaModel>
    _max?: NestedEnumCompanyStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRestaurantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RestaurantStatus | EnumRestaurantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RestaurantStatus[] | ListEnumRestaurantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RestaurantStatus[] | ListEnumRestaurantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRestaurantStatusFilter<$PrismaModel> | $Enums.RestaurantStatus
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type BranchListRelationFilter = {
    every?: BranchWhereInput
    some?: BranchWhereInput
    none?: BranchWhereInput
  }

  export type BranchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    cuisineType?: SortOrder
    logoUrl?: SortOrder
    bannerUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    cuisineType?: SortOrder
    logoUrl?: SortOrder
    bannerUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    cuisineType?: SortOrder
    logoUrl?: SortOrder
    bannerUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRestaurantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RestaurantStatus | EnumRestaurantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RestaurantStatus[] | ListEnumRestaurantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RestaurantStatus[] | ListEnumRestaurantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRestaurantStatusWithAggregatesFilter<$PrismaModel> | $Enums.RestaurantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRestaurantStatusFilter<$PrismaModel>
    _max?: NestedEnumRestaurantStatusFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumBranchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BranchStatus | EnumBranchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BranchStatus[] | ListEnumBranchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BranchStatus[] | ListEnumBranchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBranchStatusFilter<$PrismaModel> | $Enums.BranchStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RestaurantScalarRelationFilter = {
    is?: RestaurantWhereInput
    isNot?: RestaurantWhereInput
  }

  export type OperatingHoursListRelationFilter = {
    every?: OperatingHoursWhereInput
    some?: OperatingHoursWhereInput
    none?: OperatingHoursWhereInput
  }

  export type StaffAssignmentListRelationFilter = {
    every?: StaffAssignmentWhereInput
    some?: StaffAssignmentWhereInput
    none?: StaffAssignmentWhereInput
  }

  export type OperatingHoursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    isMainBranch?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    isMainBranch?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    isMainBranch?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumBranchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BranchStatus | EnumBranchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BranchStatus[] | ListEnumBranchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BranchStatus[] | ListEnumBranchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBranchStatusWithAggregatesFilter<$PrismaModel> | $Enums.BranchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBranchStatusFilter<$PrismaModel>
    _max?: NestedEnumBranchStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type BranchScalarRelationFilter = {
    is?: BranchWhereInput
    isNot?: BranchWhereInput
  }

  export type OperatingHoursBranchIdDayCompoundUniqueInput = {
    branchId: string
    day: $Enums.DayOfWeek
  }

  export type OperatingHoursCountOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    day?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperatingHoursMaxOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    day?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperatingHoursMinOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    day?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type StaffAssignmentBranchIdUserIdCompoundUniqueInput = {
    branchId: string
    userId: string
  }

  export type StaffAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    assignedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    assignedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    assignedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantCreateNestedManyWithoutCompanyInput = {
    create?: XOR<RestaurantCreateWithoutCompanyInput, RestaurantUncheckedCreateWithoutCompanyInput> | RestaurantCreateWithoutCompanyInput[] | RestaurantUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutCompanyInput | RestaurantCreateOrConnectWithoutCompanyInput[]
    createMany?: RestaurantCreateManyCompanyInputEnvelope
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
  }

  export type RestaurantUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<RestaurantCreateWithoutCompanyInput, RestaurantUncheckedCreateWithoutCompanyInput> | RestaurantCreateWithoutCompanyInput[] | RestaurantUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutCompanyInput | RestaurantCreateOrConnectWithoutCompanyInput[]
    createMany?: RestaurantCreateManyCompanyInputEnvelope
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumCompanyStatusFieldUpdateOperationsInput = {
    set?: $Enums.CompanyStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RestaurantUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<RestaurantCreateWithoutCompanyInput, RestaurantUncheckedCreateWithoutCompanyInput> | RestaurantCreateWithoutCompanyInput[] | RestaurantUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutCompanyInput | RestaurantCreateOrConnectWithoutCompanyInput[]
    upsert?: RestaurantUpsertWithWhereUniqueWithoutCompanyInput | RestaurantUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: RestaurantCreateManyCompanyInputEnvelope
    set?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    disconnect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    delete?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    update?: RestaurantUpdateWithWhereUniqueWithoutCompanyInput | RestaurantUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: RestaurantUpdateManyWithWhereWithoutCompanyInput | RestaurantUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
  }

  export type RestaurantUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<RestaurantCreateWithoutCompanyInput, RestaurantUncheckedCreateWithoutCompanyInput> | RestaurantCreateWithoutCompanyInput[] | RestaurantUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutCompanyInput | RestaurantCreateOrConnectWithoutCompanyInput[]
    upsert?: RestaurantUpsertWithWhereUniqueWithoutCompanyInput | RestaurantUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: RestaurantCreateManyCompanyInputEnvelope
    set?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    disconnect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    delete?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    update?: RestaurantUpdateWithWhereUniqueWithoutCompanyInput | RestaurantUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: RestaurantUpdateManyWithWhereWithoutCompanyInput | RestaurantUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutRestaurantsInput = {
    create?: XOR<CompanyCreateWithoutRestaurantsInput, CompanyUncheckedCreateWithoutRestaurantsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRestaurantsInput
    connect?: CompanyWhereUniqueInput
  }

  export type BranchCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<BranchCreateWithoutRestaurantInput, BranchUncheckedCreateWithoutRestaurantInput> | BranchCreateWithoutRestaurantInput[] | BranchUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutRestaurantInput | BranchCreateOrConnectWithoutRestaurantInput[]
    createMany?: BranchCreateManyRestaurantInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type BranchUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<BranchCreateWithoutRestaurantInput, BranchUncheckedCreateWithoutRestaurantInput> | BranchCreateWithoutRestaurantInput[] | BranchUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutRestaurantInput | BranchCreateOrConnectWithoutRestaurantInput[]
    createMany?: BranchCreateManyRestaurantInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type EnumRestaurantStatusFieldUpdateOperationsInput = {
    set?: $Enums.RestaurantStatus
  }

  export type CompanyUpdateOneRequiredWithoutRestaurantsNestedInput = {
    create?: XOR<CompanyCreateWithoutRestaurantsInput, CompanyUncheckedCreateWithoutRestaurantsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRestaurantsInput
    upsert?: CompanyUpsertWithoutRestaurantsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutRestaurantsInput, CompanyUpdateWithoutRestaurantsInput>, CompanyUncheckedUpdateWithoutRestaurantsInput>
  }

  export type BranchUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<BranchCreateWithoutRestaurantInput, BranchUncheckedCreateWithoutRestaurantInput> | BranchCreateWithoutRestaurantInput[] | BranchUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutRestaurantInput | BranchCreateOrConnectWithoutRestaurantInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutRestaurantInput | BranchUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: BranchCreateManyRestaurantInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutRestaurantInput | BranchUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutRestaurantInput | BranchUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type BranchUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<BranchCreateWithoutRestaurantInput, BranchUncheckedCreateWithoutRestaurantInput> | BranchCreateWithoutRestaurantInput[] | BranchUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutRestaurantInput | BranchCreateOrConnectWithoutRestaurantInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutRestaurantInput | BranchUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: BranchCreateManyRestaurantInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutRestaurantInput | BranchUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutRestaurantInput | BranchUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutBranchesInput = {
    create?: XOR<RestaurantCreateWithoutBranchesInput, RestaurantUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutBranchesInput
    connect?: RestaurantWhereUniqueInput
  }

  export type OperatingHoursCreateNestedManyWithoutBranchInput = {
    create?: XOR<OperatingHoursCreateWithoutBranchInput, OperatingHoursUncheckedCreateWithoutBranchInput> | OperatingHoursCreateWithoutBranchInput[] | OperatingHoursUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: OperatingHoursCreateOrConnectWithoutBranchInput | OperatingHoursCreateOrConnectWithoutBranchInput[]
    createMany?: OperatingHoursCreateManyBranchInputEnvelope
    connect?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
  }

  export type StaffAssignmentCreateNestedManyWithoutBranchInput = {
    create?: XOR<StaffAssignmentCreateWithoutBranchInput, StaffAssignmentUncheckedCreateWithoutBranchInput> | StaffAssignmentCreateWithoutBranchInput[] | StaffAssignmentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StaffAssignmentCreateOrConnectWithoutBranchInput | StaffAssignmentCreateOrConnectWithoutBranchInput[]
    createMany?: StaffAssignmentCreateManyBranchInputEnvelope
    connect?: StaffAssignmentWhereUniqueInput | StaffAssignmentWhereUniqueInput[]
  }

  export type OperatingHoursUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<OperatingHoursCreateWithoutBranchInput, OperatingHoursUncheckedCreateWithoutBranchInput> | OperatingHoursCreateWithoutBranchInput[] | OperatingHoursUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: OperatingHoursCreateOrConnectWithoutBranchInput | OperatingHoursCreateOrConnectWithoutBranchInput[]
    createMany?: OperatingHoursCreateManyBranchInputEnvelope
    connect?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
  }

  export type StaffAssignmentUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<StaffAssignmentCreateWithoutBranchInput, StaffAssignmentUncheckedCreateWithoutBranchInput> | StaffAssignmentCreateWithoutBranchInput[] | StaffAssignmentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StaffAssignmentCreateOrConnectWithoutBranchInput | StaffAssignmentCreateOrConnectWithoutBranchInput[]
    createMany?: StaffAssignmentCreateManyBranchInputEnvelope
    connect?: StaffAssignmentWhereUniqueInput | StaffAssignmentWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumBranchStatusFieldUpdateOperationsInput = {
    set?: $Enums.BranchStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RestaurantUpdateOneRequiredWithoutBranchesNestedInput = {
    create?: XOR<RestaurantCreateWithoutBranchesInput, RestaurantUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutBranchesInput
    upsert?: RestaurantUpsertWithoutBranchesInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutBranchesInput, RestaurantUpdateWithoutBranchesInput>, RestaurantUncheckedUpdateWithoutBranchesInput>
  }

  export type OperatingHoursUpdateManyWithoutBranchNestedInput = {
    create?: XOR<OperatingHoursCreateWithoutBranchInput, OperatingHoursUncheckedCreateWithoutBranchInput> | OperatingHoursCreateWithoutBranchInput[] | OperatingHoursUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: OperatingHoursCreateOrConnectWithoutBranchInput | OperatingHoursCreateOrConnectWithoutBranchInput[]
    upsert?: OperatingHoursUpsertWithWhereUniqueWithoutBranchInput | OperatingHoursUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: OperatingHoursCreateManyBranchInputEnvelope
    set?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
    disconnect?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
    delete?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
    connect?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
    update?: OperatingHoursUpdateWithWhereUniqueWithoutBranchInput | OperatingHoursUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: OperatingHoursUpdateManyWithWhereWithoutBranchInput | OperatingHoursUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: OperatingHoursScalarWhereInput | OperatingHoursScalarWhereInput[]
  }

  export type StaffAssignmentUpdateManyWithoutBranchNestedInput = {
    create?: XOR<StaffAssignmentCreateWithoutBranchInput, StaffAssignmentUncheckedCreateWithoutBranchInput> | StaffAssignmentCreateWithoutBranchInput[] | StaffAssignmentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StaffAssignmentCreateOrConnectWithoutBranchInput | StaffAssignmentCreateOrConnectWithoutBranchInput[]
    upsert?: StaffAssignmentUpsertWithWhereUniqueWithoutBranchInput | StaffAssignmentUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: StaffAssignmentCreateManyBranchInputEnvelope
    set?: StaffAssignmentWhereUniqueInput | StaffAssignmentWhereUniqueInput[]
    disconnect?: StaffAssignmentWhereUniqueInput | StaffAssignmentWhereUniqueInput[]
    delete?: StaffAssignmentWhereUniqueInput | StaffAssignmentWhereUniqueInput[]
    connect?: StaffAssignmentWhereUniqueInput | StaffAssignmentWhereUniqueInput[]
    update?: StaffAssignmentUpdateWithWhereUniqueWithoutBranchInput | StaffAssignmentUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: StaffAssignmentUpdateManyWithWhereWithoutBranchInput | StaffAssignmentUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: StaffAssignmentScalarWhereInput | StaffAssignmentScalarWhereInput[]
  }

  export type OperatingHoursUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<OperatingHoursCreateWithoutBranchInput, OperatingHoursUncheckedCreateWithoutBranchInput> | OperatingHoursCreateWithoutBranchInput[] | OperatingHoursUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: OperatingHoursCreateOrConnectWithoutBranchInput | OperatingHoursCreateOrConnectWithoutBranchInput[]
    upsert?: OperatingHoursUpsertWithWhereUniqueWithoutBranchInput | OperatingHoursUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: OperatingHoursCreateManyBranchInputEnvelope
    set?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
    disconnect?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
    delete?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
    connect?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
    update?: OperatingHoursUpdateWithWhereUniqueWithoutBranchInput | OperatingHoursUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: OperatingHoursUpdateManyWithWhereWithoutBranchInput | OperatingHoursUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: OperatingHoursScalarWhereInput | OperatingHoursScalarWhereInput[]
  }

  export type StaffAssignmentUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<StaffAssignmentCreateWithoutBranchInput, StaffAssignmentUncheckedCreateWithoutBranchInput> | StaffAssignmentCreateWithoutBranchInput[] | StaffAssignmentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StaffAssignmentCreateOrConnectWithoutBranchInput | StaffAssignmentCreateOrConnectWithoutBranchInput[]
    upsert?: StaffAssignmentUpsertWithWhereUniqueWithoutBranchInput | StaffAssignmentUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: StaffAssignmentCreateManyBranchInputEnvelope
    set?: StaffAssignmentWhereUniqueInput | StaffAssignmentWhereUniqueInput[]
    disconnect?: StaffAssignmentWhereUniqueInput | StaffAssignmentWhereUniqueInput[]
    delete?: StaffAssignmentWhereUniqueInput | StaffAssignmentWhereUniqueInput[]
    connect?: StaffAssignmentWhereUniqueInput | StaffAssignmentWhereUniqueInput[]
    update?: StaffAssignmentUpdateWithWhereUniqueWithoutBranchInput | StaffAssignmentUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: StaffAssignmentUpdateManyWithWhereWithoutBranchInput | StaffAssignmentUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: StaffAssignmentScalarWhereInput | StaffAssignmentScalarWhereInput[]
  }

  export type BranchCreateNestedOneWithoutOperatingHoursInput = {
    create?: XOR<BranchCreateWithoutOperatingHoursInput, BranchUncheckedCreateWithoutOperatingHoursInput>
    connectOrCreate?: BranchCreateOrConnectWithoutOperatingHoursInput
    connect?: BranchWhereUniqueInput
  }

  export type EnumDayOfWeekFieldUpdateOperationsInput = {
    set?: $Enums.DayOfWeek
  }

  export type BranchUpdateOneRequiredWithoutOperatingHoursNestedInput = {
    create?: XOR<BranchCreateWithoutOperatingHoursInput, BranchUncheckedCreateWithoutOperatingHoursInput>
    connectOrCreate?: BranchCreateOrConnectWithoutOperatingHoursInput
    upsert?: BranchUpsertWithoutOperatingHoursInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutOperatingHoursInput, BranchUpdateWithoutOperatingHoursInput>, BranchUncheckedUpdateWithoutOperatingHoursInput>
  }

  export type BranchCreateNestedOneWithoutStaffAssignmentsInput = {
    create?: XOR<BranchCreateWithoutStaffAssignmentsInput, BranchUncheckedCreateWithoutStaffAssignmentsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutStaffAssignmentsInput
    connect?: BranchWhereUniqueInput
  }

  export type BranchUpdateOneRequiredWithoutStaffAssignmentsNestedInput = {
    create?: XOR<BranchCreateWithoutStaffAssignmentsInput, BranchUncheckedCreateWithoutStaffAssignmentsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutStaffAssignmentsInput
    upsert?: BranchUpsertWithoutStaffAssignmentsInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutStaffAssignmentsInput, BranchUpdateWithoutStaffAssignmentsInput>, BranchUncheckedUpdateWithoutStaffAssignmentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumCompanyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyStatus | EnumCompanyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CompanyStatus[] | ListEnumCompanyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanyStatus[] | ListEnumCompanyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanyStatusFilter<$PrismaModel> | $Enums.CompanyStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCompanyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyStatus | EnumCompanyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CompanyStatus[] | ListEnumCompanyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanyStatus[] | ListEnumCompanyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanyStatusWithAggregatesFilter<$PrismaModel> | $Enums.CompanyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompanyStatusFilter<$PrismaModel>
    _max?: NestedEnumCompanyStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRestaurantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RestaurantStatus | EnumRestaurantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RestaurantStatus[] | ListEnumRestaurantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RestaurantStatus[] | ListEnumRestaurantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRestaurantStatusFilter<$PrismaModel> | $Enums.RestaurantStatus
  }

  export type NestedEnumRestaurantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RestaurantStatus | EnumRestaurantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RestaurantStatus[] | ListEnumRestaurantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RestaurantStatus[] | ListEnumRestaurantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRestaurantStatusWithAggregatesFilter<$PrismaModel> | $Enums.RestaurantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRestaurantStatusFilter<$PrismaModel>
    _max?: NestedEnumRestaurantStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumBranchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BranchStatus | EnumBranchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BranchStatus[] | ListEnumBranchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BranchStatus[] | ListEnumBranchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBranchStatusFilter<$PrismaModel> | $Enums.BranchStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumBranchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BranchStatus | EnumBranchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BranchStatus[] | ListEnumBranchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BranchStatus[] | ListEnumBranchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBranchStatusWithAggregatesFilter<$PrismaModel> | $Enums.BranchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBranchStatusFilter<$PrismaModel>
    _max?: NestedEnumBranchStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type RestaurantCreateWithoutCompanyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    cuisineType?: string | null
    logoUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.RestaurantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    branches?: BranchCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    cuisineType?: string | null
    logoUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.RestaurantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    branches?: BranchUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutCompanyInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutCompanyInput, RestaurantUncheckedCreateWithoutCompanyInput>
  }

  export type RestaurantCreateManyCompanyInputEnvelope = {
    data: RestaurantCreateManyCompanyInput | RestaurantCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithWhereUniqueWithoutCompanyInput = {
    where: RestaurantWhereUniqueInput
    update: XOR<RestaurantUpdateWithoutCompanyInput, RestaurantUncheckedUpdateWithoutCompanyInput>
    create: XOR<RestaurantCreateWithoutCompanyInput, RestaurantUncheckedCreateWithoutCompanyInput>
  }

  export type RestaurantUpdateWithWhereUniqueWithoutCompanyInput = {
    where: RestaurantWhereUniqueInput
    data: XOR<RestaurantUpdateWithoutCompanyInput, RestaurantUncheckedUpdateWithoutCompanyInput>
  }

  export type RestaurantUpdateManyWithWhereWithoutCompanyInput = {
    where: RestaurantScalarWhereInput
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyWithoutCompanyInput>
  }

  export type RestaurantScalarWhereInput = {
    AND?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
    OR?: RestaurantScalarWhereInput[]
    NOT?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
    id?: StringFilter<"Restaurant"> | string
    companyId?: StringFilter<"Restaurant"> | string
    name?: StringFilter<"Restaurant"> | string
    slug?: StringFilter<"Restaurant"> | string
    description?: StringNullableFilter<"Restaurant"> | string | null
    cuisineType?: StringNullableFilter<"Restaurant"> | string | null
    logoUrl?: StringNullableFilter<"Restaurant"> | string | null
    bannerUrl?: StringNullableFilter<"Restaurant"> | string | null
    status?: EnumRestaurantStatusFilter<"Restaurant"> | $Enums.RestaurantStatus
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
  }

  export type CompanyCreateWithoutRestaurantsInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logoUrl?: string | null
    status?: $Enums.CompanyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUncheckedCreateWithoutRestaurantsInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    address?: string | null
    logoUrl?: string | null
    status?: $Enums.CompanyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyCreateOrConnectWithoutRestaurantsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutRestaurantsInput, CompanyUncheckedCreateWithoutRestaurantsInput>
  }

  export type BranchCreateWithoutRestaurantInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    address: string
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.BranchStatus
    isMainBranch?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    operatingHours?: OperatingHoursCreateNestedManyWithoutBranchInput
    staffAssignments?: StaffAssignmentCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutRestaurantInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    address: string
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.BranchStatus
    isMainBranch?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    operatingHours?: OperatingHoursUncheckedCreateNestedManyWithoutBranchInput
    staffAssignments?: StaffAssignmentUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutRestaurantInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutRestaurantInput, BranchUncheckedCreateWithoutRestaurantInput>
  }

  export type BranchCreateManyRestaurantInputEnvelope = {
    data: BranchCreateManyRestaurantInput | BranchCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutRestaurantsInput = {
    update: XOR<CompanyUpdateWithoutRestaurantsInput, CompanyUncheckedUpdateWithoutRestaurantsInput>
    create: XOR<CompanyCreateWithoutRestaurantsInput, CompanyUncheckedCreateWithoutRestaurantsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutRestaurantsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutRestaurantsInput, CompanyUncheckedUpdateWithoutRestaurantsInput>
  }

  export type CompanyUpdateWithoutRestaurantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCompanyStatusFieldUpdateOperationsInput | $Enums.CompanyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateWithoutRestaurantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCompanyStatusFieldUpdateOperationsInput | $Enums.CompanyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: BranchWhereUniqueInput
    update: XOR<BranchUpdateWithoutRestaurantInput, BranchUncheckedUpdateWithoutRestaurantInput>
    create: XOR<BranchCreateWithoutRestaurantInput, BranchUncheckedCreateWithoutRestaurantInput>
  }

  export type BranchUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: BranchWhereUniqueInput
    data: XOR<BranchUpdateWithoutRestaurantInput, BranchUncheckedUpdateWithoutRestaurantInput>
  }

  export type BranchUpdateManyWithWhereWithoutRestaurantInput = {
    where: BranchScalarWhereInput
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type BranchScalarWhereInput = {
    AND?: BranchScalarWhereInput | BranchScalarWhereInput[]
    OR?: BranchScalarWhereInput[]
    NOT?: BranchScalarWhereInput | BranchScalarWhereInput[]
    id?: StringFilter<"Branch"> | string
    restaurantId?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    phone?: StringNullableFilter<"Branch"> | string | null
    email?: StringNullableFilter<"Branch"> | string | null
    address?: StringFilter<"Branch"> | string
    city?: StringFilter<"Branch"> | string
    state?: StringNullableFilter<"Branch"> | string | null
    country?: StringFilter<"Branch"> | string
    postalCode?: StringNullableFilter<"Branch"> | string | null
    latitude?: DecimalNullableFilter<"Branch"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Branch"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumBranchStatusFilter<"Branch"> | $Enums.BranchStatus
    isMainBranch?: BoolFilter<"Branch"> | boolean
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
  }

  export type RestaurantCreateWithoutBranchesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    cuisineType?: string | null
    logoUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.RestaurantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutRestaurantsInput
  }

  export type RestaurantUncheckedCreateWithoutBranchesInput = {
    id?: string
    companyId: string
    name: string
    slug: string
    description?: string | null
    cuisineType?: string | null
    logoUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.RestaurantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantCreateOrConnectWithoutBranchesInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutBranchesInput, RestaurantUncheckedCreateWithoutBranchesInput>
  }

  export type OperatingHoursCreateWithoutBranchInput = {
    id?: string
    day: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperatingHoursUncheckedCreateWithoutBranchInput = {
    id?: string
    day: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperatingHoursCreateOrConnectWithoutBranchInput = {
    where: OperatingHoursWhereUniqueInput
    create: XOR<OperatingHoursCreateWithoutBranchInput, OperatingHoursUncheckedCreateWithoutBranchInput>
  }

  export type OperatingHoursCreateManyBranchInputEnvelope = {
    data: OperatingHoursCreateManyBranchInput | OperatingHoursCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type StaffAssignmentCreateWithoutBranchInput = {
    id?: string
    userId: string
    role: string
    isActive?: boolean
    assignedAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffAssignmentUncheckedCreateWithoutBranchInput = {
    id?: string
    userId: string
    role: string
    isActive?: boolean
    assignedAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffAssignmentCreateOrConnectWithoutBranchInput = {
    where: StaffAssignmentWhereUniqueInput
    create: XOR<StaffAssignmentCreateWithoutBranchInput, StaffAssignmentUncheckedCreateWithoutBranchInput>
  }

  export type StaffAssignmentCreateManyBranchInputEnvelope = {
    data: StaffAssignmentCreateManyBranchInput | StaffAssignmentCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithoutBranchesInput = {
    update: XOR<RestaurantUpdateWithoutBranchesInput, RestaurantUncheckedUpdateWithoutBranchesInput>
    create: XOR<RestaurantCreateWithoutBranchesInput, RestaurantUncheckedCreateWithoutBranchesInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutBranchesInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutBranchesInput, RestaurantUncheckedUpdateWithoutBranchesInput>
  }

  export type RestaurantUpdateWithoutBranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cuisineType?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRestaurantStatusFieldUpdateOperationsInput | $Enums.RestaurantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutRestaurantsNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutBranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cuisineType?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRestaurantStatusFieldUpdateOperationsInput | $Enums.RestaurantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatingHoursUpsertWithWhereUniqueWithoutBranchInput = {
    where: OperatingHoursWhereUniqueInput
    update: XOR<OperatingHoursUpdateWithoutBranchInput, OperatingHoursUncheckedUpdateWithoutBranchInput>
    create: XOR<OperatingHoursCreateWithoutBranchInput, OperatingHoursUncheckedCreateWithoutBranchInput>
  }

  export type OperatingHoursUpdateWithWhereUniqueWithoutBranchInput = {
    where: OperatingHoursWhereUniqueInput
    data: XOR<OperatingHoursUpdateWithoutBranchInput, OperatingHoursUncheckedUpdateWithoutBranchInput>
  }

  export type OperatingHoursUpdateManyWithWhereWithoutBranchInput = {
    where: OperatingHoursScalarWhereInput
    data: XOR<OperatingHoursUpdateManyMutationInput, OperatingHoursUncheckedUpdateManyWithoutBranchInput>
  }

  export type OperatingHoursScalarWhereInput = {
    AND?: OperatingHoursScalarWhereInput | OperatingHoursScalarWhereInput[]
    OR?: OperatingHoursScalarWhereInput[]
    NOT?: OperatingHoursScalarWhereInput | OperatingHoursScalarWhereInput[]
    id?: StringFilter<"OperatingHours"> | string
    branchId?: StringFilter<"OperatingHours"> | string
    day?: EnumDayOfWeekFilter<"OperatingHours"> | $Enums.DayOfWeek
    openTime?: StringFilter<"OperatingHours"> | string
    closeTime?: StringFilter<"OperatingHours"> | string
    isClosed?: BoolFilter<"OperatingHours"> | boolean
    createdAt?: DateTimeFilter<"OperatingHours"> | Date | string
    updatedAt?: DateTimeFilter<"OperatingHours"> | Date | string
  }

  export type StaffAssignmentUpsertWithWhereUniqueWithoutBranchInput = {
    where: StaffAssignmentWhereUniqueInput
    update: XOR<StaffAssignmentUpdateWithoutBranchInput, StaffAssignmentUncheckedUpdateWithoutBranchInput>
    create: XOR<StaffAssignmentCreateWithoutBranchInput, StaffAssignmentUncheckedCreateWithoutBranchInput>
  }

  export type StaffAssignmentUpdateWithWhereUniqueWithoutBranchInput = {
    where: StaffAssignmentWhereUniqueInput
    data: XOR<StaffAssignmentUpdateWithoutBranchInput, StaffAssignmentUncheckedUpdateWithoutBranchInput>
  }

  export type StaffAssignmentUpdateManyWithWhereWithoutBranchInput = {
    where: StaffAssignmentScalarWhereInput
    data: XOR<StaffAssignmentUpdateManyMutationInput, StaffAssignmentUncheckedUpdateManyWithoutBranchInput>
  }

  export type StaffAssignmentScalarWhereInput = {
    AND?: StaffAssignmentScalarWhereInput | StaffAssignmentScalarWhereInput[]
    OR?: StaffAssignmentScalarWhereInput[]
    NOT?: StaffAssignmentScalarWhereInput | StaffAssignmentScalarWhereInput[]
    id?: StringFilter<"StaffAssignment"> | string
    branchId?: StringFilter<"StaffAssignment"> | string
    userId?: StringFilter<"StaffAssignment"> | string
    role?: StringFilter<"StaffAssignment"> | string
    isActive?: BoolFilter<"StaffAssignment"> | boolean
    assignedAt?: DateTimeFilter<"StaffAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"StaffAssignment"> | Date | string
  }

  export type BranchCreateWithoutOperatingHoursInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    address: string
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.BranchStatus
    isMainBranch?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutBranchesInput
    staffAssignments?: StaffAssignmentCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutOperatingHoursInput = {
    id?: string
    restaurantId: string
    name: string
    phone?: string | null
    email?: string | null
    address: string
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.BranchStatus
    isMainBranch?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    staffAssignments?: StaffAssignmentUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutOperatingHoursInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutOperatingHoursInput, BranchUncheckedCreateWithoutOperatingHoursInput>
  }

  export type BranchUpsertWithoutOperatingHoursInput = {
    update: XOR<BranchUpdateWithoutOperatingHoursInput, BranchUncheckedUpdateWithoutOperatingHoursInput>
    create: XOR<BranchCreateWithoutOperatingHoursInput, BranchUncheckedCreateWithoutOperatingHoursInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutOperatingHoursInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutOperatingHoursInput, BranchUncheckedUpdateWithoutOperatingHoursInput>
  }

  export type BranchUpdateWithoutOperatingHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumBranchStatusFieldUpdateOperationsInput | $Enums.BranchStatus
    isMainBranch?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutBranchesNestedInput
    staffAssignments?: StaffAssignmentUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutOperatingHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumBranchStatusFieldUpdateOperationsInput | $Enums.BranchStatus
    isMainBranch?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAssignments?: StaffAssignmentUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateWithoutStaffAssignmentsInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    address: string
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.BranchStatus
    isMainBranch?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutBranchesInput
    operatingHours?: OperatingHoursCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutStaffAssignmentsInput = {
    id?: string
    restaurantId: string
    name: string
    phone?: string | null
    email?: string | null
    address: string
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.BranchStatus
    isMainBranch?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    operatingHours?: OperatingHoursUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutStaffAssignmentsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutStaffAssignmentsInput, BranchUncheckedCreateWithoutStaffAssignmentsInput>
  }

  export type BranchUpsertWithoutStaffAssignmentsInput = {
    update: XOR<BranchUpdateWithoutStaffAssignmentsInput, BranchUncheckedUpdateWithoutStaffAssignmentsInput>
    create: XOR<BranchCreateWithoutStaffAssignmentsInput, BranchUncheckedCreateWithoutStaffAssignmentsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutStaffAssignmentsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutStaffAssignmentsInput, BranchUncheckedUpdateWithoutStaffAssignmentsInput>
  }

  export type BranchUpdateWithoutStaffAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumBranchStatusFieldUpdateOperationsInput | $Enums.BranchStatus
    isMainBranch?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutBranchesNestedInput
    operatingHours?: OperatingHoursUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutStaffAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumBranchStatusFieldUpdateOperationsInput | $Enums.BranchStatus
    isMainBranch?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operatingHours?: OperatingHoursUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type RestaurantCreateManyCompanyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    cuisineType?: string | null
    logoUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.RestaurantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cuisineType?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRestaurantStatusFieldUpdateOperationsInput | $Enums.RestaurantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branches?: BranchUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cuisineType?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRestaurantStatusFieldUpdateOperationsInput | $Enums.RestaurantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branches?: BranchUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cuisineType?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRestaurantStatusFieldUpdateOperationsInput | $Enums.RestaurantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchCreateManyRestaurantInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    address: string
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.BranchStatus
    isMainBranch?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumBranchStatusFieldUpdateOperationsInput | $Enums.BranchStatus
    isMainBranch?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operatingHours?: OperatingHoursUpdateManyWithoutBranchNestedInput
    staffAssignments?: StaffAssignmentUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumBranchStatusFieldUpdateOperationsInput | $Enums.BranchStatus
    isMainBranch?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operatingHours?: OperatingHoursUncheckedUpdateManyWithoutBranchNestedInput
    staffAssignments?: StaffAssignmentUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumBranchStatusFieldUpdateOperationsInput | $Enums.BranchStatus
    isMainBranch?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatingHoursCreateManyBranchInput = {
    id?: string
    day: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffAssignmentCreateManyBranchInput = {
    id?: string
    userId: string
    role: string
    isActive?: boolean
    assignedAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperatingHoursUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatingHoursUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatingHoursUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAssignmentUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAssignmentUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAssignmentUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}