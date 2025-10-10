
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model LocationAttribute
 * 
 */
export type LocationAttribute = $Result.DefaultSelection<Prisma.$LocationAttributePayload>
/**
 * Model LocationTour
 * 
 */
export type LocationTour = $Result.DefaultSelection<Prisma.$LocationTourPayload>
/**
 * Model Office
 * 
 */
export type Office = $Result.DefaultSelection<Prisma.$OfficePayload>
/**
 * Model Tour
 * 
 */
export type Tour = $Result.DefaultSelection<Prisma.$TourPayload>
/**
 * Model TourType
 * 
 */
export type TourType = $Result.DefaultSelection<Prisma.$TourTypePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model Passkey
 * 
 */
export type Passkey = $Result.DefaultSelection<Prisma.$PasskeyPayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locationAttribute`: Exposes CRUD operations for the **LocationAttribute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LocationAttributes
    * const locationAttributes = await prisma.locationAttribute.findMany()
    * ```
    */
  get locationAttribute(): Prisma.LocationAttributeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locationTour`: Exposes CRUD operations for the **LocationTour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LocationTours
    * const locationTours = await prisma.locationTour.findMany()
    * ```
    */
  get locationTour(): Prisma.LocationTourDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.office`: Exposes CRUD operations for the **Office** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offices
    * const offices = await prisma.office.findMany()
    * ```
    */
  get office(): Prisma.OfficeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tour`: Exposes CRUD operations for the **Tour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tours
    * const tours = await prisma.tour.findMany()
    * ```
    */
  get tour(): Prisma.TourDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourType`: Exposes CRUD operations for the **TourType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourTypes
    * const tourTypes = await prisma.tourType.findMany()
    * ```
    */
  get tourType(): Prisma.TourTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passkey`: Exposes CRUD operations for the **Passkey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passkeys
    * const passkeys = await prisma.passkey.findMany()
    * ```
    */
  get passkey(): Prisma.PasskeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    Customer: 'Customer',
    Location: 'Location',
    LocationAttribute: 'LocationAttribute',
    LocationTour: 'LocationTour',
    Office: 'Office',
    Tour: 'Tour',
    TourType: 'TourType',
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Passkey: 'Passkey',
    Setting: 'Setting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customer" | "location" | "locationAttribute" | "locationTour" | "office" | "tour" | "tourType" | "user" | "session" | "account" | "verification" | "passkey" | "setting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      LocationAttribute: {
        payload: Prisma.$LocationAttributePayload<ExtArgs>
        fields: Prisma.LocationAttributeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationAttributeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAttributePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationAttributeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAttributePayload>
          }
          findFirst: {
            args: Prisma.LocationAttributeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAttributePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationAttributeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAttributePayload>
          }
          findMany: {
            args: Prisma.LocationAttributeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAttributePayload>[]
          }
          create: {
            args: Prisma.LocationAttributeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAttributePayload>
          }
          createMany: {
            args: Prisma.LocationAttributeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationAttributeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAttributePayload>[]
          }
          delete: {
            args: Prisma.LocationAttributeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAttributePayload>
          }
          update: {
            args: Prisma.LocationAttributeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAttributePayload>
          }
          deleteMany: {
            args: Prisma.LocationAttributeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationAttributeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationAttributeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAttributePayload>[]
          }
          upsert: {
            args: Prisma.LocationAttributeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAttributePayload>
          }
          aggregate: {
            args: Prisma.LocationAttributeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocationAttribute>
          }
          groupBy: {
            args: Prisma.LocationAttributeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationAttributeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationAttributeCountArgs<ExtArgs>
            result: $Utils.Optional<LocationAttributeCountAggregateOutputType> | number
          }
        }
      }
      LocationTour: {
        payload: Prisma.$LocationTourPayload<ExtArgs>
        fields: Prisma.LocationTourFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationTourFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTourPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationTourFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTourPayload>
          }
          findFirst: {
            args: Prisma.LocationTourFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTourPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationTourFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTourPayload>
          }
          findMany: {
            args: Prisma.LocationTourFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTourPayload>[]
          }
          create: {
            args: Prisma.LocationTourCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTourPayload>
          }
          createMany: {
            args: Prisma.LocationTourCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationTourCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTourPayload>[]
          }
          delete: {
            args: Prisma.LocationTourDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTourPayload>
          }
          update: {
            args: Prisma.LocationTourUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTourPayload>
          }
          deleteMany: {
            args: Prisma.LocationTourDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationTourUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationTourUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTourPayload>[]
          }
          upsert: {
            args: Prisma.LocationTourUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationTourPayload>
          }
          aggregate: {
            args: Prisma.LocationTourAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocationTour>
          }
          groupBy: {
            args: Prisma.LocationTourGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationTourGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationTourCountArgs<ExtArgs>
            result: $Utils.Optional<LocationTourCountAggregateOutputType> | number
          }
        }
      }
      Office: {
        payload: Prisma.$OfficePayload<ExtArgs>
        fields: Prisma.OfficeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfficeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfficeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>
          }
          findFirst: {
            args: Prisma.OfficeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfficeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>
          }
          findMany: {
            args: Prisma.OfficeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>[]
          }
          create: {
            args: Prisma.OfficeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>
          }
          createMany: {
            args: Prisma.OfficeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfficeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>[]
          }
          delete: {
            args: Prisma.OfficeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>
          }
          update: {
            args: Prisma.OfficeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>
          }
          deleteMany: {
            args: Prisma.OfficeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfficeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfficeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>[]
          }
          upsert: {
            args: Prisma.OfficeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>
          }
          aggregate: {
            args: Prisma.OfficeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffice>
          }
          groupBy: {
            args: Prisma.OfficeGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfficeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfficeCountArgs<ExtArgs>
            result: $Utils.Optional<OfficeCountAggregateOutputType> | number
          }
        }
      }
      Tour: {
        payload: Prisma.$TourPayload<ExtArgs>
        fields: Prisma.TourFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          findFirst: {
            args: Prisma.TourFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          findMany: {
            args: Prisma.TourFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          create: {
            args: Prisma.TourCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          createMany: {
            args: Prisma.TourCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          delete: {
            args: Prisma.TourDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          update: {
            args: Prisma.TourUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          deleteMany: {
            args: Prisma.TourDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          upsert: {
            args: Prisma.TourUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          aggregate: {
            args: Prisma.TourAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTour>
          }
          groupBy: {
            args: Prisma.TourGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourCountArgs<ExtArgs>
            result: $Utils.Optional<TourCountAggregateOutputType> | number
          }
        }
      }
      TourType: {
        payload: Prisma.$TourTypePayload<ExtArgs>
        fields: Prisma.TourTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>
          }
          findFirst: {
            args: Prisma.TourTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>
          }
          findMany: {
            args: Prisma.TourTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>[]
          }
          create: {
            args: Prisma.TourTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>
          }
          createMany: {
            args: Prisma.TourTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>[]
          }
          delete: {
            args: Prisma.TourTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>
          }
          update: {
            args: Prisma.TourTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>
          }
          deleteMany: {
            args: Prisma.TourTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>[]
          }
          upsert: {
            args: Prisma.TourTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>
          }
          aggregate: {
            args: Prisma.TourTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourType>
          }
          groupBy: {
            args: Prisma.TourTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourTypeCountArgs<ExtArgs>
            result: $Utils.Optional<TourTypeCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      Passkey: {
        payload: Prisma.$PasskeyPayload<ExtArgs>
        fields: Prisma.PasskeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasskeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasskeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>
          }
          findFirst: {
            args: Prisma.PasskeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasskeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>
          }
          findMany: {
            args: Prisma.PasskeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>[]
          }
          create: {
            args: Prisma.PasskeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>
          }
          createMany: {
            args: Prisma.PasskeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasskeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>[]
          }
          delete: {
            args: Prisma.PasskeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>
          }
          update: {
            args: Prisma.PasskeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>
          }
          deleteMany: {
            args: Prisma.PasskeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasskeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasskeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>[]
          }
          upsert: {
            args: Prisma.PasskeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>
          }
          aggregate: {
            args: Prisma.PasskeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasskey>
          }
          groupBy: {
            args: Prisma.PasskeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasskeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasskeyCountArgs<ExtArgs>
            result: $Utils.Optional<PasskeyCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    customer?: CustomerOmit
    location?: LocationOmit
    locationAttribute?: LocationAttributeOmit
    locationTour?: LocationTourOmit
    office?: OfficeOmit
    tour?: TourOmit
    tourType?: TourTypeOmit
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    passkey?: PasskeyOmit
    setting?: SettingOmit
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
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    attributes: number
    locationTours: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | LocationCountOutputTypeCountAttributesArgs
    locationTours?: boolean | LocationCountOutputTypeCountLocationToursArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationAttributeWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountLocationToursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationTourWhereInput
  }


  /**
   * Count Type LocationAttributeCountOutputType
   */

  export type LocationAttributeCountOutputType = {
    locationTours: number
  }

  export type LocationAttributeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locationTours?: boolean | LocationAttributeCountOutputTypeCountLocationToursArgs
  }

  // Custom InputTypes
  /**
   * LocationAttributeCountOutputType without action
   */
  export type LocationAttributeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAttributeCountOutputType
     */
    select?: LocationAttributeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationAttributeCountOutputType without action
   */
  export type LocationAttributeCountOutputTypeCountLocationToursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationTourWhereInput
  }


  /**
   * Count Type TourCountOutputType
   */

  export type TourCountOutputType = {
    customers: number
    locationTours: number
  }

  export type TourCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | TourCountOutputTypeCountCustomersArgs
    locationTours?: boolean | TourCountOutputTypeCountLocationToursArgs
  }

  // Custom InputTypes
  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourCountOutputType
     */
    select?: TourCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountLocationToursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationTourWhereInput
  }


  /**
   * Count Type TourTypeCountOutputType
   */

  export type TourTypeCountOutputType = {
    tours: number
  }

  export type TourTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tours?: boolean | TourTypeCountOutputTypeCountToursArgs
  }

  // Custom InputTypes
  /**
   * TourTypeCountOutputType without action
   */
  export type TourTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourTypeCountOutputType
     */
    select?: TourTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TourTypeCountOutputType without action
   */
  export type TourTypeCountOutputTypeCountToursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    passkeys: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    passkeys?: boolean | UserCountOutputTypeCountPasskeysArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasskeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasskeyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
    status: number | null
    tourId: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
    status: number | null
    tourId: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    contactMethod: string | null
    status: number | null
    notes: string | null
    createdAt: Date | null
    tourId: number | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    contactMethod: string | null
    status: number | null
    notes: string | null
    createdAt: Date | null
    tourId: number | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    phoneNumber: number
    contactMethod: number
    status: number
    notes: number
    createdAt: number
    tourId: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
    status?: true
    tourId?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
    status?: true
    tourId?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    contactMethod?: true
    status?: true
    notes?: true
    createdAt?: true
    tourId?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    contactMethod?: true
    status?: true
    notes?: true
    createdAt?: true
    tourId?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    contactMethod?: true
    status?: true
    notes?: true
    createdAt?: true
    tourId?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    name: string
    phoneNumber: string
    contactMethod: string
    status: number
    notes: string | null
    createdAt: Date
    tourId: number | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    contactMethod?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    tourId?: boolean
    tour?: boolean | Customer$tourArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    contactMethod?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    tourId?: boolean
    tour?: boolean | Customer$tourArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    contactMethod?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    tourId?: boolean
    tour?: boolean | Customer$tourArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    contactMethod?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    tourId?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phoneNumber" | "contactMethod" | "status" | "notes" | "createdAt" | "tourId", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | Customer$tourArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | Customer$tourArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | Customer$tourArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phoneNumber: string
      contactMethod: string
      status: number
      notes: string | null
      createdAt: Date
      tourId: number | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends Customer$tourArgs<ExtArgs> = {}>(args?: Subset<T, Customer$tourArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phoneNumber: FieldRef<"Customer", 'String'>
    readonly contactMethod: FieldRef<"Customer", 'String'>
    readonly status: FieldRef<"Customer", 'Int'>
    readonly notes: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly tourId: FieldRef<"Customer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.tour
   */
  export type Customer$tourArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    where?: TourWhereInput
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    name: string | null
    order: number | null
    isActive: boolean | null
    isOffice: boolean | null
    showOnService: boolean | null
    showOnEurope: boolean | null
    slug: string | null
    createdAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    order: number | null
    isActive: boolean | null
    isOffice: boolean | null
    showOnService: boolean | null
    showOnEurope: boolean | null
    slug: string | null
    createdAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    image: number
    order: number
    isActive: number
    isOffice: number
    showOnService: number
    showOnEurope: number
    seo: number
    slug: number
    createdAt: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    order?: true
    isActive?: true
    isOffice?: true
    showOnService?: true
    showOnEurope?: true
    slug?: true
    createdAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    order?: true
    isActive?: true
    isOffice?: true
    showOnService?: true
    showOnEurope?: true
    slug?: true
    createdAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    order?: true
    isActive?: true
    isOffice?: true
    showOnService?: true
    showOnEurope?: true
    seo?: true
    slug?: true
    createdAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    name: string
    image: JsonValue | null
    order: number
    isActive: boolean | null
    isOffice: boolean | null
    showOnService: boolean
    showOnEurope: boolean
    seo: JsonValue | null
    slug: string | null
    createdAt: Date
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    order?: boolean
    isActive?: boolean
    isOffice?: boolean
    showOnService?: boolean
    showOnEurope?: boolean
    seo?: boolean
    slug?: boolean
    createdAt?: boolean
    attributes?: boolean | Location$attributesArgs<ExtArgs>
    locationTours?: boolean | Location$locationToursArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    order?: boolean
    isActive?: boolean
    isOffice?: boolean
    showOnService?: boolean
    showOnEurope?: boolean
    seo?: boolean
    slug?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    order?: boolean
    isActive?: boolean
    isOffice?: boolean
    showOnService?: boolean
    showOnEurope?: boolean
    seo?: boolean
    slug?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    order?: boolean
    isActive?: boolean
    isOffice?: boolean
    showOnService?: boolean
    showOnEurope?: boolean
    seo?: boolean
    slug?: boolean
    createdAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "order" | "isActive" | "isOffice" | "showOnService" | "showOnEurope" | "seo" | "slug" | "createdAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | Location$attributesArgs<ExtArgs>
    locationTours?: boolean | Location$locationToursArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      attributes: Prisma.$LocationAttributePayload<ExtArgs>[]
      locationTours: Prisma.$LocationTourPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: Prisma.JsonValue | null
      order: number
      isActive: boolean | null
      isOffice: boolean | null
      showOnService: boolean
      showOnEurope: boolean
      seo: Prisma.JsonValue | null
      slug: string | null
      createdAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attributes<T extends Location$attributesArgs<ExtArgs> = {}>(args?: Subset<T, Location$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationAttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    locationTours<T extends Location$locationToursArgs<ExtArgs> = {}>(args?: Subset<T, Location$locationToursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationTourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly name: FieldRef<"Location", 'String'>
    readonly image: FieldRef<"Location", 'Json'>
    readonly order: FieldRef<"Location", 'Int'>
    readonly isActive: FieldRef<"Location", 'Boolean'>
    readonly isOffice: FieldRef<"Location", 'Boolean'>
    readonly showOnService: FieldRef<"Location", 'Boolean'>
    readonly showOnEurope: FieldRef<"Location", 'Boolean'>
    readonly seo: FieldRef<"Location", 'Json'>
    readonly slug: FieldRef<"Location", 'String'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.attributes
   */
  export type Location$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAttribute
     */
    select?: LocationAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAttribute
     */
    omit?: LocationAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAttributeInclude<ExtArgs> | null
    where?: LocationAttributeWhereInput
    orderBy?: LocationAttributeOrderByWithRelationInput | LocationAttributeOrderByWithRelationInput[]
    cursor?: LocationAttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationAttributeScalarFieldEnum | LocationAttributeScalarFieldEnum[]
  }

  /**
   * Location.locationTours
   */
  export type Location$locationToursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationTour
     */
    select?: LocationTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationTour
     */
    omit?: LocationTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTourInclude<ExtArgs> | null
    where?: LocationTourWhereInput
    orderBy?: LocationTourOrderByWithRelationInput | LocationTourOrderByWithRelationInput[]
    cursor?: LocationTourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationTourScalarFieldEnum | LocationTourScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model LocationAttribute
   */

  export type AggregateLocationAttribute = {
    _count: LocationAttributeCountAggregateOutputType | null
    _avg: LocationAttributeAvgAggregateOutputType | null
    _sum: LocationAttributeSumAggregateOutputType | null
    _min: LocationAttributeMinAggregateOutputType | null
    _max: LocationAttributeMaxAggregateOutputType | null
  }

  export type LocationAttributeAvgAggregateOutputType = {
    id: number | null
    order: number | null
    locationId: number | null
  }

  export type LocationAttributeSumAggregateOutputType = {
    id: number | null
    order: number | null
    locationId: number | null
  }

  export type LocationAttributeMinAggregateOutputType = {
    id: number | null
    title: string | null
    order: number | null
    locationId: number | null
    createdAt: Date | null
  }

  export type LocationAttributeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    order: number | null
    locationId: number | null
    createdAt: Date | null
  }

  export type LocationAttributeCountAggregateOutputType = {
    id: number
    title: number
    order: number
    seo: number
    locationId: number
    createdAt: number
    _all: number
  }


  export type LocationAttributeAvgAggregateInputType = {
    id?: true
    order?: true
    locationId?: true
  }

  export type LocationAttributeSumAggregateInputType = {
    id?: true
    order?: true
    locationId?: true
  }

  export type LocationAttributeMinAggregateInputType = {
    id?: true
    title?: true
    order?: true
    locationId?: true
    createdAt?: true
  }

  export type LocationAttributeMaxAggregateInputType = {
    id?: true
    title?: true
    order?: true
    locationId?: true
    createdAt?: true
  }

  export type LocationAttributeCountAggregateInputType = {
    id?: true
    title?: true
    order?: true
    seo?: true
    locationId?: true
    createdAt?: true
    _all?: true
  }

  export type LocationAttributeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationAttribute to aggregate.
     */
    where?: LocationAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationAttributes to fetch.
     */
    orderBy?: LocationAttributeOrderByWithRelationInput | LocationAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LocationAttributes
    **/
    _count?: true | LocationAttributeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAttributeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationAttributeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationAttributeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationAttributeMaxAggregateInputType
  }

  export type GetLocationAttributeAggregateType<T extends LocationAttributeAggregateArgs> = {
        [P in keyof T & keyof AggregateLocationAttribute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocationAttribute[P]>
      : GetScalarType<T[P], AggregateLocationAttribute[P]>
  }




  export type LocationAttributeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationAttributeWhereInput
    orderBy?: LocationAttributeOrderByWithAggregationInput | LocationAttributeOrderByWithAggregationInput[]
    by: LocationAttributeScalarFieldEnum[] | LocationAttributeScalarFieldEnum
    having?: LocationAttributeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationAttributeCountAggregateInputType | true
    _avg?: LocationAttributeAvgAggregateInputType
    _sum?: LocationAttributeSumAggregateInputType
    _min?: LocationAttributeMinAggregateInputType
    _max?: LocationAttributeMaxAggregateInputType
  }

  export type LocationAttributeGroupByOutputType = {
    id: number
    title: string | null
    order: number | null
    seo: JsonValue | null
    locationId: number | null
    createdAt: Date
    _count: LocationAttributeCountAggregateOutputType | null
    _avg: LocationAttributeAvgAggregateOutputType | null
    _sum: LocationAttributeSumAggregateOutputType | null
    _min: LocationAttributeMinAggregateOutputType | null
    _max: LocationAttributeMaxAggregateOutputType | null
  }

  type GetLocationAttributeGroupByPayload<T extends LocationAttributeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationAttributeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationAttributeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationAttributeGroupByOutputType[P]>
            : GetScalarType<T[P], LocationAttributeGroupByOutputType[P]>
        }
      >
    >


  export type LocationAttributeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    order?: boolean
    seo?: boolean
    locationId?: boolean
    createdAt?: boolean
    location?: boolean | LocationAttribute$locationArgs<ExtArgs>
    locationTours?: boolean | LocationAttribute$locationToursArgs<ExtArgs>
    _count?: boolean | LocationAttributeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationAttribute"]>

  export type LocationAttributeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    order?: boolean
    seo?: boolean
    locationId?: boolean
    createdAt?: boolean
    location?: boolean | LocationAttribute$locationArgs<ExtArgs>
  }, ExtArgs["result"]["locationAttribute"]>

  export type LocationAttributeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    order?: boolean
    seo?: boolean
    locationId?: boolean
    createdAt?: boolean
    location?: boolean | LocationAttribute$locationArgs<ExtArgs>
  }, ExtArgs["result"]["locationAttribute"]>

  export type LocationAttributeSelectScalar = {
    id?: boolean
    title?: boolean
    order?: boolean
    seo?: boolean
    locationId?: boolean
    createdAt?: boolean
  }

  export type LocationAttributeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "order" | "seo" | "locationId" | "createdAt", ExtArgs["result"]["locationAttribute"]>
  export type LocationAttributeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationAttribute$locationArgs<ExtArgs>
    locationTours?: boolean | LocationAttribute$locationToursArgs<ExtArgs>
    _count?: boolean | LocationAttributeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationAttributeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationAttribute$locationArgs<ExtArgs>
  }
  export type LocationAttributeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationAttribute$locationArgs<ExtArgs>
  }

  export type $LocationAttributePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LocationAttribute"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs> | null
      locationTours: Prisma.$LocationTourPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      order: number | null
      seo: Prisma.JsonValue | null
      locationId: number | null
      createdAt: Date
    }, ExtArgs["result"]["locationAttribute"]>
    composites: {}
  }

  type LocationAttributeGetPayload<S extends boolean | null | undefined | LocationAttributeDefaultArgs> = $Result.GetResult<Prisma.$LocationAttributePayload, S>

  type LocationAttributeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationAttributeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationAttributeCountAggregateInputType | true
    }

  export interface LocationAttributeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LocationAttribute'], meta: { name: 'LocationAttribute' } }
    /**
     * Find zero or one LocationAttribute that matches the filter.
     * @param {LocationAttributeFindUniqueArgs} args - Arguments to find a LocationAttribute
     * @example
     * // Get one LocationAttribute
     * const locationAttribute = await prisma.locationAttribute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationAttributeFindUniqueArgs>(args: SelectSubset<T, LocationAttributeFindUniqueArgs<ExtArgs>>): Prisma__LocationAttributeClient<$Result.GetResult<Prisma.$LocationAttributePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LocationAttribute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationAttributeFindUniqueOrThrowArgs} args - Arguments to find a LocationAttribute
     * @example
     * // Get one LocationAttribute
     * const locationAttribute = await prisma.locationAttribute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationAttributeFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationAttributeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationAttributeClient<$Result.GetResult<Prisma.$LocationAttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocationAttribute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAttributeFindFirstArgs} args - Arguments to find a LocationAttribute
     * @example
     * // Get one LocationAttribute
     * const locationAttribute = await prisma.locationAttribute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationAttributeFindFirstArgs>(args?: SelectSubset<T, LocationAttributeFindFirstArgs<ExtArgs>>): Prisma__LocationAttributeClient<$Result.GetResult<Prisma.$LocationAttributePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocationAttribute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAttributeFindFirstOrThrowArgs} args - Arguments to find a LocationAttribute
     * @example
     * // Get one LocationAttribute
     * const locationAttribute = await prisma.locationAttribute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationAttributeFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationAttributeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationAttributeClient<$Result.GetResult<Prisma.$LocationAttributePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LocationAttributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAttributeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocationAttributes
     * const locationAttributes = await prisma.locationAttribute.findMany()
     * 
     * // Get first 10 LocationAttributes
     * const locationAttributes = await prisma.locationAttribute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationAttributeWithIdOnly = await prisma.locationAttribute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationAttributeFindManyArgs>(args?: SelectSubset<T, LocationAttributeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationAttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LocationAttribute.
     * @param {LocationAttributeCreateArgs} args - Arguments to create a LocationAttribute.
     * @example
     * // Create one LocationAttribute
     * const LocationAttribute = await prisma.locationAttribute.create({
     *   data: {
     *     // ... data to create a LocationAttribute
     *   }
     * })
     * 
     */
    create<T extends LocationAttributeCreateArgs>(args: SelectSubset<T, LocationAttributeCreateArgs<ExtArgs>>): Prisma__LocationAttributeClient<$Result.GetResult<Prisma.$LocationAttributePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LocationAttributes.
     * @param {LocationAttributeCreateManyArgs} args - Arguments to create many LocationAttributes.
     * @example
     * // Create many LocationAttributes
     * const locationAttribute = await prisma.locationAttribute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationAttributeCreateManyArgs>(args?: SelectSubset<T, LocationAttributeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LocationAttributes and returns the data saved in the database.
     * @param {LocationAttributeCreateManyAndReturnArgs} args - Arguments to create many LocationAttributes.
     * @example
     * // Create many LocationAttributes
     * const locationAttribute = await prisma.locationAttribute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LocationAttributes and only return the `id`
     * const locationAttributeWithIdOnly = await prisma.locationAttribute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationAttributeCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationAttributeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationAttributePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LocationAttribute.
     * @param {LocationAttributeDeleteArgs} args - Arguments to delete one LocationAttribute.
     * @example
     * // Delete one LocationAttribute
     * const LocationAttribute = await prisma.locationAttribute.delete({
     *   where: {
     *     // ... filter to delete one LocationAttribute
     *   }
     * })
     * 
     */
    delete<T extends LocationAttributeDeleteArgs>(args: SelectSubset<T, LocationAttributeDeleteArgs<ExtArgs>>): Prisma__LocationAttributeClient<$Result.GetResult<Prisma.$LocationAttributePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LocationAttribute.
     * @param {LocationAttributeUpdateArgs} args - Arguments to update one LocationAttribute.
     * @example
     * // Update one LocationAttribute
     * const locationAttribute = await prisma.locationAttribute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationAttributeUpdateArgs>(args: SelectSubset<T, LocationAttributeUpdateArgs<ExtArgs>>): Prisma__LocationAttributeClient<$Result.GetResult<Prisma.$LocationAttributePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LocationAttributes.
     * @param {LocationAttributeDeleteManyArgs} args - Arguments to filter LocationAttributes to delete.
     * @example
     * // Delete a few LocationAttributes
     * const { count } = await prisma.locationAttribute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationAttributeDeleteManyArgs>(args?: SelectSubset<T, LocationAttributeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAttributeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocationAttributes
     * const locationAttribute = await prisma.locationAttribute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationAttributeUpdateManyArgs>(args: SelectSubset<T, LocationAttributeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationAttributes and returns the data updated in the database.
     * @param {LocationAttributeUpdateManyAndReturnArgs} args - Arguments to update many LocationAttributes.
     * @example
     * // Update many LocationAttributes
     * const locationAttribute = await prisma.locationAttribute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LocationAttributes and only return the `id`
     * const locationAttributeWithIdOnly = await prisma.locationAttribute.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocationAttributeUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationAttributeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationAttributePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LocationAttribute.
     * @param {LocationAttributeUpsertArgs} args - Arguments to update or create a LocationAttribute.
     * @example
     * // Update or create a LocationAttribute
     * const locationAttribute = await prisma.locationAttribute.upsert({
     *   create: {
     *     // ... data to create a LocationAttribute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocationAttribute we want to update
     *   }
     * })
     */
    upsert<T extends LocationAttributeUpsertArgs>(args: SelectSubset<T, LocationAttributeUpsertArgs<ExtArgs>>): Prisma__LocationAttributeClient<$Result.GetResult<Prisma.$LocationAttributePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LocationAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAttributeCountArgs} args - Arguments to filter LocationAttributes to count.
     * @example
     * // Count the number of LocationAttributes
     * const count = await prisma.locationAttribute.count({
     *   where: {
     *     // ... the filter for the LocationAttributes we want to count
     *   }
     * })
    **/
    count<T extends LocationAttributeCountArgs>(
      args?: Subset<T, LocationAttributeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationAttributeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LocationAttribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAttributeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAttributeAggregateArgs>(args: Subset<T, LocationAttributeAggregateArgs>): Prisma.PrismaPromise<GetLocationAttributeAggregateType<T>>

    /**
     * Group by LocationAttribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAttributeGroupByArgs} args - Group by arguments.
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
      T extends LocationAttributeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationAttributeGroupByArgs['orderBy'] }
        : { orderBy?: LocationAttributeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationAttributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationAttributeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LocationAttribute model
   */
  readonly fields: LocationAttributeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LocationAttribute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationAttributeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationAttribute$locationArgs<ExtArgs> = {}>(args?: Subset<T, LocationAttribute$locationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    locationTours<T extends LocationAttribute$locationToursArgs<ExtArgs> = {}>(args?: Subset<T, LocationAttribute$locationToursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationTourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LocationAttribute model
   */
  interface LocationAttributeFieldRefs {
    readonly id: FieldRef<"LocationAttribute", 'Int'>
    readonly title: FieldRef<"LocationAttribute", 'String'>
    readonly order: FieldRef<"LocationAttribute", 'Int'>
    readonly seo: FieldRef<"LocationAttribute", 'Json'>
    readonly locationId: FieldRef<"LocationAttribute", 'Int'>
    readonly createdAt: FieldRef<"LocationAttribute", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LocationAttribute findUnique
   */
  export type LocationAttributeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAttribute
     */
    select?: LocationAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAttribute
     */
    omit?: LocationAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAttributeInclude<ExtArgs> | null
    /**
     * Filter, which LocationAttribute to fetch.
     */
    where: LocationAttributeWhereUniqueInput
  }

  /**
   * LocationAttribute findUniqueOrThrow
   */
  export type LocationAttributeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAttribute
     */
    select?: LocationAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAttribute
     */
    omit?: LocationAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAttributeInclude<ExtArgs> | null
    /**
     * Filter, which LocationAttribute to fetch.
     */
    where: LocationAttributeWhereUniqueInput
  }

  /**
   * LocationAttribute findFirst
   */
  export type LocationAttributeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAttribute
     */
    select?: LocationAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAttribute
     */
    omit?: LocationAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAttributeInclude<ExtArgs> | null
    /**
     * Filter, which LocationAttribute to fetch.
     */
    where?: LocationAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationAttributes to fetch.
     */
    orderBy?: LocationAttributeOrderByWithRelationInput | LocationAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationAttributes.
     */
    cursor?: LocationAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationAttributes.
     */
    distinct?: LocationAttributeScalarFieldEnum | LocationAttributeScalarFieldEnum[]
  }

  /**
   * LocationAttribute findFirstOrThrow
   */
  export type LocationAttributeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAttribute
     */
    select?: LocationAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAttribute
     */
    omit?: LocationAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAttributeInclude<ExtArgs> | null
    /**
     * Filter, which LocationAttribute to fetch.
     */
    where?: LocationAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationAttributes to fetch.
     */
    orderBy?: LocationAttributeOrderByWithRelationInput | LocationAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationAttributes.
     */
    cursor?: LocationAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationAttributes.
     */
    distinct?: LocationAttributeScalarFieldEnum | LocationAttributeScalarFieldEnum[]
  }

  /**
   * LocationAttribute findMany
   */
  export type LocationAttributeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAttribute
     */
    select?: LocationAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAttribute
     */
    omit?: LocationAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAttributeInclude<ExtArgs> | null
    /**
     * Filter, which LocationAttributes to fetch.
     */
    where?: LocationAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationAttributes to fetch.
     */
    orderBy?: LocationAttributeOrderByWithRelationInput | LocationAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LocationAttributes.
     */
    cursor?: LocationAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationAttributes.
     */
    skip?: number
    distinct?: LocationAttributeScalarFieldEnum | LocationAttributeScalarFieldEnum[]
  }

  /**
   * LocationAttribute create
   */
  export type LocationAttributeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAttribute
     */
    select?: LocationAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAttribute
     */
    omit?: LocationAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAttributeInclude<ExtArgs> | null
    /**
     * The data needed to create a LocationAttribute.
     */
    data?: XOR<LocationAttributeCreateInput, LocationAttributeUncheckedCreateInput>
  }

  /**
   * LocationAttribute createMany
   */
  export type LocationAttributeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocationAttributes.
     */
    data: LocationAttributeCreateManyInput | LocationAttributeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LocationAttribute createManyAndReturn
   */
  export type LocationAttributeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAttribute
     */
    select?: LocationAttributeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAttribute
     */
    omit?: LocationAttributeOmit<ExtArgs> | null
    /**
     * The data used to create many LocationAttributes.
     */
    data: LocationAttributeCreateManyInput | LocationAttributeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAttributeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocationAttribute update
   */
  export type LocationAttributeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAttribute
     */
    select?: LocationAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAttribute
     */
    omit?: LocationAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAttributeInclude<ExtArgs> | null
    /**
     * The data needed to update a LocationAttribute.
     */
    data: XOR<LocationAttributeUpdateInput, LocationAttributeUncheckedUpdateInput>
    /**
     * Choose, which LocationAttribute to update.
     */
    where: LocationAttributeWhereUniqueInput
  }

  /**
   * LocationAttribute updateMany
   */
  export type LocationAttributeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LocationAttributes.
     */
    data: XOR<LocationAttributeUpdateManyMutationInput, LocationAttributeUncheckedUpdateManyInput>
    /**
     * Filter which LocationAttributes to update
     */
    where?: LocationAttributeWhereInput
    /**
     * Limit how many LocationAttributes to update.
     */
    limit?: number
  }

  /**
   * LocationAttribute updateManyAndReturn
   */
  export type LocationAttributeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAttribute
     */
    select?: LocationAttributeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAttribute
     */
    omit?: LocationAttributeOmit<ExtArgs> | null
    /**
     * The data used to update LocationAttributes.
     */
    data: XOR<LocationAttributeUpdateManyMutationInput, LocationAttributeUncheckedUpdateManyInput>
    /**
     * Filter which LocationAttributes to update
     */
    where?: LocationAttributeWhereInput
    /**
     * Limit how many LocationAttributes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAttributeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocationAttribute upsert
   */
  export type LocationAttributeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAttribute
     */
    select?: LocationAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAttribute
     */
    omit?: LocationAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAttributeInclude<ExtArgs> | null
    /**
     * The filter to search for the LocationAttribute to update in case it exists.
     */
    where: LocationAttributeWhereUniqueInput
    /**
     * In case the LocationAttribute found by the `where` argument doesn't exist, create a new LocationAttribute with this data.
     */
    create: XOR<LocationAttributeCreateInput, LocationAttributeUncheckedCreateInput>
    /**
     * In case the LocationAttribute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationAttributeUpdateInput, LocationAttributeUncheckedUpdateInput>
  }

  /**
   * LocationAttribute delete
   */
  export type LocationAttributeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAttribute
     */
    select?: LocationAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAttribute
     */
    omit?: LocationAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAttributeInclude<ExtArgs> | null
    /**
     * Filter which LocationAttribute to delete.
     */
    where: LocationAttributeWhereUniqueInput
  }

  /**
   * LocationAttribute deleteMany
   */
  export type LocationAttributeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationAttributes to delete
     */
    where?: LocationAttributeWhereInput
    /**
     * Limit how many LocationAttributes to delete.
     */
    limit?: number
  }

  /**
   * LocationAttribute.location
   */
  export type LocationAttribute$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * LocationAttribute.locationTours
   */
  export type LocationAttribute$locationToursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationTour
     */
    select?: LocationTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationTour
     */
    omit?: LocationTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTourInclude<ExtArgs> | null
    where?: LocationTourWhereInput
    orderBy?: LocationTourOrderByWithRelationInput | LocationTourOrderByWithRelationInput[]
    cursor?: LocationTourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationTourScalarFieldEnum | LocationTourScalarFieldEnum[]
  }

  /**
   * LocationAttribute without action
   */
  export type LocationAttributeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAttribute
     */
    select?: LocationAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAttribute
     */
    omit?: LocationAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAttributeInclude<ExtArgs> | null
  }


  /**
   * Model LocationTour
   */

  export type AggregateLocationTour = {
    _count: LocationTourCountAggregateOutputType | null
    _avg: LocationTourAvgAggregateOutputType | null
    _sum: LocationTourSumAggregateOutputType | null
    _min: LocationTourMinAggregateOutputType | null
    _max: LocationTourMaxAggregateOutputType | null
  }

  export type LocationTourAvgAggregateOutputType = {
    id: number | null
    locationId: number | null
    locationAttrId: number | null
    tourId: number | null
  }

  export type LocationTourSumAggregateOutputType = {
    id: number | null
    locationId: number | null
    locationAttrId: number | null
    tourId: number | null
  }

  export type LocationTourMinAggregateOutputType = {
    id: number | null
    locationId: number | null
    locationAttrId: number | null
    tourId: number | null
    createdAt: Date | null
  }

  export type LocationTourMaxAggregateOutputType = {
    id: number | null
    locationId: number | null
    locationAttrId: number | null
    tourId: number | null
    createdAt: Date | null
  }

  export type LocationTourCountAggregateOutputType = {
    id: number
    locationId: number
    locationAttrId: number
    tourId: number
    createdAt: number
    _all: number
  }


  export type LocationTourAvgAggregateInputType = {
    id?: true
    locationId?: true
    locationAttrId?: true
    tourId?: true
  }

  export type LocationTourSumAggregateInputType = {
    id?: true
    locationId?: true
    locationAttrId?: true
    tourId?: true
  }

  export type LocationTourMinAggregateInputType = {
    id?: true
    locationId?: true
    locationAttrId?: true
    tourId?: true
    createdAt?: true
  }

  export type LocationTourMaxAggregateInputType = {
    id?: true
    locationId?: true
    locationAttrId?: true
    tourId?: true
    createdAt?: true
  }

  export type LocationTourCountAggregateInputType = {
    id?: true
    locationId?: true
    locationAttrId?: true
    tourId?: true
    createdAt?: true
    _all?: true
  }

  export type LocationTourAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationTour to aggregate.
     */
    where?: LocationTourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationTours to fetch.
     */
    orderBy?: LocationTourOrderByWithRelationInput | LocationTourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationTourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationTours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationTours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LocationTours
    **/
    _count?: true | LocationTourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationTourAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationTourSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationTourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationTourMaxAggregateInputType
  }

  export type GetLocationTourAggregateType<T extends LocationTourAggregateArgs> = {
        [P in keyof T & keyof AggregateLocationTour]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocationTour[P]>
      : GetScalarType<T[P], AggregateLocationTour[P]>
  }




  export type LocationTourGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationTourWhereInput
    orderBy?: LocationTourOrderByWithAggregationInput | LocationTourOrderByWithAggregationInput[]
    by: LocationTourScalarFieldEnum[] | LocationTourScalarFieldEnum
    having?: LocationTourScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationTourCountAggregateInputType | true
    _avg?: LocationTourAvgAggregateInputType
    _sum?: LocationTourSumAggregateInputType
    _min?: LocationTourMinAggregateInputType
    _max?: LocationTourMaxAggregateInputType
  }

  export type LocationTourGroupByOutputType = {
    id: number
    locationId: number
    locationAttrId: number
    tourId: number
    createdAt: Date
    _count: LocationTourCountAggregateOutputType | null
    _avg: LocationTourAvgAggregateOutputType | null
    _sum: LocationTourSumAggregateOutputType | null
    _min: LocationTourMinAggregateOutputType | null
    _max: LocationTourMaxAggregateOutputType | null
  }

  type GetLocationTourGroupByPayload<T extends LocationTourGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationTourGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationTourGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationTourGroupByOutputType[P]>
            : GetScalarType<T[P], LocationTourGroupByOutputType[P]>
        }
      >
    >


  export type LocationTourSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    locationAttrId?: boolean
    tourId?: boolean
    createdAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    locationAttr?: boolean | LocationAttributeDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationTour"]>

  export type LocationTourSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    locationAttrId?: boolean
    tourId?: boolean
    createdAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    locationAttr?: boolean | LocationAttributeDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationTour"]>

  export type LocationTourSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    locationAttrId?: boolean
    tourId?: boolean
    createdAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    locationAttr?: boolean | LocationAttributeDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationTour"]>

  export type LocationTourSelectScalar = {
    id?: boolean
    locationId?: boolean
    locationAttrId?: boolean
    tourId?: boolean
    createdAt?: boolean
  }

  export type LocationTourOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locationId" | "locationAttrId" | "tourId" | "createdAt", ExtArgs["result"]["locationTour"]>
  export type LocationTourInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    locationAttr?: boolean | LocationAttributeDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type LocationTourIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    locationAttr?: boolean | LocationAttributeDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type LocationTourIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    locationAttr?: boolean | LocationAttributeDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $LocationTourPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LocationTour"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      locationAttr: Prisma.$LocationAttributePayload<ExtArgs>
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      locationId: number
      locationAttrId: number
      tourId: number
      createdAt: Date
    }, ExtArgs["result"]["locationTour"]>
    composites: {}
  }

  type LocationTourGetPayload<S extends boolean | null | undefined | LocationTourDefaultArgs> = $Result.GetResult<Prisma.$LocationTourPayload, S>

  type LocationTourCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationTourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationTourCountAggregateInputType | true
    }

  export interface LocationTourDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LocationTour'], meta: { name: 'LocationTour' } }
    /**
     * Find zero or one LocationTour that matches the filter.
     * @param {LocationTourFindUniqueArgs} args - Arguments to find a LocationTour
     * @example
     * // Get one LocationTour
     * const locationTour = await prisma.locationTour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationTourFindUniqueArgs>(args: SelectSubset<T, LocationTourFindUniqueArgs<ExtArgs>>): Prisma__LocationTourClient<$Result.GetResult<Prisma.$LocationTourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LocationTour that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationTourFindUniqueOrThrowArgs} args - Arguments to find a LocationTour
     * @example
     * // Get one LocationTour
     * const locationTour = await prisma.locationTour.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationTourFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationTourFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationTourClient<$Result.GetResult<Prisma.$LocationTourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocationTour that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTourFindFirstArgs} args - Arguments to find a LocationTour
     * @example
     * // Get one LocationTour
     * const locationTour = await prisma.locationTour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationTourFindFirstArgs>(args?: SelectSubset<T, LocationTourFindFirstArgs<ExtArgs>>): Prisma__LocationTourClient<$Result.GetResult<Prisma.$LocationTourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocationTour that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTourFindFirstOrThrowArgs} args - Arguments to find a LocationTour
     * @example
     * // Get one LocationTour
     * const locationTour = await prisma.locationTour.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationTourFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationTourFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationTourClient<$Result.GetResult<Prisma.$LocationTourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LocationTours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTourFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocationTours
     * const locationTours = await prisma.locationTour.findMany()
     * 
     * // Get first 10 LocationTours
     * const locationTours = await prisma.locationTour.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationTourWithIdOnly = await prisma.locationTour.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationTourFindManyArgs>(args?: SelectSubset<T, LocationTourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationTourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LocationTour.
     * @param {LocationTourCreateArgs} args - Arguments to create a LocationTour.
     * @example
     * // Create one LocationTour
     * const LocationTour = await prisma.locationTour.create({
     *   data: {
     *     // ... data to create a LocationTour
     *   }
     * })
     * 
     */
    create<T extends LocationTourCreateArgs>(args: SelectSubset<T, LocationTourCreateArgs<ExtArgs>>): Prisma__LocationTourClient<$Result.GetResult<Prisma.$LocationTourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LocationTours.
     * @param {LocationTourCreateManyArgs} args - Arguments to create many LocationTours.
     * @example
     * // Create many LocationTours
     * const locationTour = await prisma.locationTour.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationTourCreateManyArgs>(args?: SelectSubset<T, LocationTourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LocationTours and returns the data saved in the database.
     * @param {LocationTourCreateManyAndReturnArgs} args - Arguments to create many LocationTours.
     * @example
     * // Create many LocationTours
     * const locationTour = await prisma.locationTour.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LocationTours and only return the `id`
     * const locationTourWithIdOnly = await prisma.locationTour.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationTourCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationTourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationTourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LocationTour.
     * @param {LocationTourDeleteArgs} args - Arguments to delete one LocationTour.
     * @example
     * // Delete one LocationTour
     * const LocationTour = await prisma.locationTour.delete({
     *   where: {
     *     // ... filter to delete one LocationTour
     *   }
     * })
     * 
     */
    delete<T extends LocationTourDeleteArgs>(args: SelectSubset<T, LocationTourDeleteArgs<ExtArgs>>): Prisma__LocationTourClient<$Result.GetResult<Prisma.$LocationTourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LocationTour.
     * @param {LocationTourUpdateArgs} args - Arguments to update one LocationTour.
     * @example
     * // Update one LocationTour
     * const locationTour = await prisma.locationTour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationTourUpdateArgs>(args: SelectSubset<T, LocationTourUpdateArgs<ExtArgs>>): Prisma__LocationTourClient<$Result.GetResult<Prisma.$LocationTourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LocationTours.
     * @param {LocationTourDeleteManyArgs} args - Arguments to filter LocationTours to delete.
     * @example
     * // Delete a few LocationTours
     * const { count } = await prisma.locationTour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationTourDeleteManyArgs>(args?: SelectSubset<T, LocationTourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationTours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocationTours
     * const locationTour = await prisma.locationTour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationTourUpdateManyArgs>(args: SelectSubset<T, LocationTourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationTours and returns the data updated in the database.
     * @param {LocationTourUpdateManyAndReturnArgs} args - Arguments to update many LocationTours.
     * @example
     * // Update many LocationTours
     * const locationTour = await prisma.locationTour.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LocationTours and only return the `id`
     * const locationTourWithIdOnly = await prisma.locationTour.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocationTourUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationTourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationTourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LocationTour.
     * @param {LocationTourUpsertArgs} args - Arguments to update or create a LocationTour.
     * @example
     * // Update or create a LocationTour
     * const locationTour = await prisma.locationTour.upsert({
     *   create: {
     *     // ... data to create a LocationTour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocationTour we want to update
     *   }
     * })
     */
    upsert<T extends LocationTourUpsertArgs>(args: SelectSubset<T, LocationTourUpsertArgs<ExtArgs>>): Prisma__LocationTourClient<$Result.GetResult<Prisma.$LocationTourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LocationTours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTourCountArgs} args - Arguments to filter LocationTours to count.
     * @example
     * // Count the number of LocationTours
     * const count = await prisma.locationTour.count({
     *   where: {
     *     // ... the filter for the LocationTours we want to count
     *   }
     * })
    **/
    count<T extends LocationTourCountArgs>(
      args?: Subset<T, LocationTourCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationTourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LocationTour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationTourAggregateArgs>(args: Subset<T, LocationTourAggregateArgs>): Prisma.PrismaPromise<GetLocationTourAggregateType<T>>

    /**
     * Group by LocationTour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTourGroupByArgs} args - Group by arguments.
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
      T extends LocationTourGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationTourGroupByArgs['orderBy'] }
        : { orderBy?: LocationTourGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationTourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationTourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LocationTour model
   */
  readonly fields: LocationTourFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LocationTour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationTourClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    locationAttr<T extends LocationAttributeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationAttributeDefaultArgs<ExtArgs>>): Prisma__LocationAttributeClient<$Result.GetResult<Prisma.$LocationAttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LocationTour model
   */
  interface LocationTourFieldRefs {
    readonly id: FieldRef<"LocationTour", 'Int'>
    readonly locationId: FieldRef<"LocationTour", 'Int'>
    readonly locationAttrId: FieldRef<"LocationTour", 'Int'>
    readonly tourId: FieldRef<"LocationTour", 'Int'>
    readonly createdAt: FieldRef<"LocationTour", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LocationTour findUnique
   */
  export type LocationTourFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationTour
     */
    select?: LocationTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationTour
     */
    omit?: LocationTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTourInclude<ExtArgs> | null
    /**
     * Filter, which LocationTour to fetch.
     */
    where: LocationTourWhereUniqueInput
  }

  /**
   * LocationTour findUniqueOrThrow
   */
  export type LocationTourFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationTour
     */
    select?: LocationTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationTour
     */
    omit?: LocationTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTourInclude<ExtArgs> | null
    /**
     * Filter, which LocationTour to fetch.
     */
    where: LocationTourWhereUniqueInput
  }

  /**
   * LocationTour findFirst
   */
  export type LocationTourFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationTour
     */
    select?: LocationTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationTour
     */
    omit?: LocationTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTourInclude<ExtArgs> | null
    /**
     * Filter, which LocationTour to fetch.
     */
    where?: LocationTourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationTours to fetch.
     */
    orderBy?: LocationTourOrderByWithRelationInput | LocationTourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationTours.
     */
    cursor?: LocationTourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationTours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationTours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationTours.
     */
    distinct?: LocationTourScalarFieldEnum | LocationTourScalarFieldEnum[]
  }

  /**
   * LocationTour findFirstOrThrow
   */
  export type LocationTourFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationTour
     */
    select?: LocationTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationTour
     */
    omit?: LocationTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTourInclude<ExtArgs> | null
    /**
     * Filter, which LocationTour to fetch.
     */
    where?: LocationTourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationTours to fetch.
     */
    orderBy?: LocationTourOrderByWithRelationInput | LocationTourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationTours.
     */
    cursor?: LocationTourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationTours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationTours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationTours.
     */
    distinct?: LocationTourScalarFieldEnum | LocationTourScalarFieldEnum[]
  }

  /**
   * LocationTour findMany
   */
  export type LocationTourFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationTour
     */
    select?: LocationTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationTour
     */
    omit?: LocationTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTourInclude<ExtArgs> | null
    /**
     * Filter, which LocationTours to fetch.
     */
    where?: LocationTourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationTours to fetch.
     */
    orderBy?: LocationTourOrderByWithRelationInput | LocationTourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LocationTours.
     */
    cursor?: LocationTourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationTours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationTours.
     */
    skip?: number
    distinct?: LocationTourScalarFieldEnum | LocationTourScalarFieldEnum[]
  }

  /**
   * LocationTour create
   */
  export type LocationTourCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationTour
     */
    select?: LocationTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationTour
     */
    omit?: LocationTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTourInclude<ExtArgs> | null
    /**
     * The data needed to create a LocationTour.
     */
    data: XOR<LocationTourCreateInput, LocationTourUncheckedCreateInput>
  }

  /**
   * LocationTour createMany
   */
  export type LocationTourCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocationTours.
     */
    data: LocationTourCreateManyInput | LocationTourCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LocationTour createManyAndReturn
   */
  export type LocationTourCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationTour
     */
    select?: LocationTourSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocationTour
     */
    omit?: LocationTourOmit<ExtArgs> | null
    /**
     * The data used to create many LocationTours.
     */
    data: LocationTourCreateManyInput | LocationTourCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTourIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocationTour update
   */
  export type LocationTourUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationTour
     */
    select?: LocationTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationTour
     */
    omit?: LocationTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTourInclude<ExtArgs> | null
    /**
     * The data needed to update a LocationTour.
     */
    data: XOR<LocationTourUpdateInput, LocationTourUncheckedUpdateInput>
    /**
     * Choose, which LocationTour to update.
     */
    where: LocationTourWhereUniqueInput
  }

  /**
   * LocationTour updateMany
   */
  export type LocationTourUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LocationTours.
     */
    data: XOR<LocationTourUpdateManyMutationInput, LocationTourUncheckedUpdateManyInput>
    /**
     * Filter which LocationTours to update
     */
    where?: LocationTourWhereInput
    /**
     * Limit how many LocationTours to update.
     */
    limit?: number
  }

  /**
   * LocationTour updateManyAndReturn
   */
  export type LocationTourUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationTour
     */
    select?: LocationTourSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocationTour
     */
    omit?: LocationTourOmit<ExtArgs> | null
    /**
     * The data used to update LocationTours.
     */
    data: XOR<LocationTourUpdateManyMutationInput, LocationTourUncheckedUpdateManyInput>
    /**
     * Filter which LocationTours to update
     */
    where?: LocationTourWhereInput
    /**
     * Limit how many LocationTours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTourIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocationTour upsert
   */
  export type LocationTourUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationTour
     */
    select?: LocationTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationTour
     */
    omit?: LocationTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTourInclude<ExtArgs> | null
    /**
     * The filter to search for the LocationTour to update in case it exists.
     */
    where: LocationTourWhereUniqueInput
    /**
     * In case the LocationTour found by the `where` argument doesn't exist, create a new LocationTour with this data.
     */
    create: XOR<LocationTourCreateInput, LocationTourUncheckedCreateInput>
    /**
     * In case the LocationTour was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationTourUpdateInput, LocationTourUncheckedUpdateInput>
  }

  /**
   * LocationTour delete
   */
  export type LocationTourDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationTour
     */
    select?: LocationTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationTour
     */
    omit?: LocationTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTourInclude<ExtArgs> | null
    /**
     * Filter which LocationTour to delete.
     */
    where: LocationTourWhereUniqueInput
  }

  /**
   * LocationTour deleteMany
   */
  export type LocationTourDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationTours to delete
     */
    where?: LocationTourWhereInput
    /**
     * Limit how many LocationTours to delete.
     */
    limit?: number
  }

  /**
   * LocationTour without action
   */
  export type LocationTourDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationTour
     */
    select?: LocationTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationTour
     */
    omit?: LocationTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTourInclude<ExtArgs> | null
  }


  /**
   * Model Office
   */

  export type AggregateOffice = {
    _count: OfficeCountAggregateOutputType | null
    _avg: OfficeAvgAggregateOutputType | null
    _sum: OfficeSumAggregateOutputType | null
    _min: OfficeMinAggregateOutputType | null
    _max: OfficeMaxAggregateOutputType | null
  }

  export type OfficeAvgAggregateOutputType = {
    id: number | null
    bestTours: number | null
  }

  export type OfficeSumAggregateOutputType = {
    id: number | null
    bestTours: number[]
  }

  export type OfficeMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    contactNumber: string | null
    email: string | null
    logo: string | null
    slug: string | null
    currency: string | null
    primaryColor: string | null
    secondaryColor: string | null
    thirdColor: string | null
    bgPrimaryColor: string | null
    bgSecondaryColor: string | null
    primaryFont: string | null
    status: boolean | null
    createdAt: Date | null
  }

  export type OfficeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    contactNumber: string | null
    email: string | null
    logo: string | null
    slug: string | null
    currency: string | null
    primaryColor: string | null
    secondaryColor: string | null
    thirdColor: string | null
    bgPrimaryColor: string | null
    bgSecondaryColor: string | null
    primaryFont: string | null
    status: boolean | null
    createdAt: Date | null
  }

  export type OfficeCountAggregateOutputType = {
    id: number
    name: number
    address: number
    contactNumber: number
    email: number
    logo: number
    slug: number
    currency: number
    bestTours: number
    primaryColor: number
    secondaryColor: number
    thirdColor: number
    bgPrimaryColor: number
    bgSecondaryColor: number
    primaryFont: number
    socialMedia: number
    seo: number
    status: number
    createdAt: number
    _all: number
  }


  export type OfficeAvgAggregateInputType = {
    id?: true
    bestTours?: true
  }

  export type OfficeSumAggregateInputType = {
    id?: true
    bestTours?: true
  }

  export type OfficeMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    contactNumber?: true
    email?: true
    logo?: true
    slug?: true
    currency?: true
    primaryColor?: true
    secondaryColor?: true
    thirdColor?: true
    bgPrimaryColor?: true
    bgSecondaryColor?: true
    primaryFont?: true
    status?: true
    createdAt?: true
  }

  export type OfficeMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    contactNumber?: true
    email?: true
    logo?: true
    slug?: true
    currency?: true
    primaryColor?: true
    secondaryColor?: true
    thirdColor?: true
    bgPrimaryColor?: true
    bgSecondaryColor?: true
    primaryFont?: true
    status?: true
    createdAt?: true
  }

  export type OfficeCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    contactNumber?: true
    email?: true
    logo?: true
    slug?: true
    currency?: true
    bestTours?: true
    primaryColor?: true
    secondaryColor?: true
    thirdColor?: true
    bgPrimaryColor?: true
    bgSecondaryColor?: true
    primaryFont?: true
    socialMedia?: true
    seo?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type OfficeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Office to aggregate.
     */
    where?: OfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offices to fetch.
     */
    orderBy?: OfficeOrderByWithRelationInput | OfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offices
    **/
    _count?: true | OfficeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfficeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfficeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfficeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfficeMaxAggregateInputType
  }

  export type GetOfficeAggregateType<T extends OfficeAggregateArgs> = {
        [P in keyof T & keyof AggregateOffice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffice[P]>
      : GetScalarType<T[P], AggregateOffice[P]>
  }




  export type OfficeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficeWhereInput
    orderBy?: OfficeOrderByWithAggregationInput | OfficeOrderByWithAggregationInput[]
    by: OfficeScalarFieldEnum[] | OfficeScalarFieldEnum
    having?: OfficeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfficeCountAggregateInputType | true
    _avg?: OfficeAvgAggregateInputType
    _sum?: OfficeSumAggregateInputType
    _min?: OfficeMinAggregateInputType
    _max?: OfficeMaxAggregateInputType
  }

  export type OfficeGroupByOutputType = {
    id: number
    name: string | null
    address: string | null
    contactNumber: string | null
    email: string | null
    logo: string | null
    slug: string | null
    currency: string
    bestTours: number[]
    primaryColor: string | null
    secondaryColor: string | null
    thirdColor: string | null
    bgPrimaryColor: string | null
    bgSecondaryColor: string | null
    primaryFont: string | null
    socialMedia: JsonValue[]
    seo: JsonValue | null
    status: boolean | null
    createdAt: Date
    _count: OfficeCountAggregateOutputType | null
    _avg: OfficeAvgAggregateOutputType | null
    _sum: OfficeSumAggregateOutputType | null
    _min: OfficeMinAggregateOutputType | null
    _max: OfficeMaxAggregateOutputType | null
  }

  type GetOfficeGroupByPayload<T extends OfficeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfficeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfficeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfficeGroupByOutputType[P]>
            : GetScalarType<T[P], OfficeGroupByOutputType[P]>
        }
      >
    >


  export type OfficeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    contactNumber?: boolean
    email?: boolean
    logo?: boolean
    slug?: boolean
    currency?: boolean
    bestTours?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    thirdColor?: boolean
    bgPrimaryColor?: boolean
    bgSecondaryColor?: boolean
    primaryFont?: boolean
    socialMedia?: boolean
    seo?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["office"]>

  export type OfficeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    contactNumber?: boolean
    email?: boolean
    logo?: boolean
    slug?: boolean
    currency?: boolean
    bestTours?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    thirdColor?: boolean
    bgPrimaryColor?: boolean
    bgSecondaryColor?: boolean
    primaryFont?: boolean
    socialMedia?: boolean
    seo?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["office"]>

  export type OfficeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    contactNumber?: boolean
    email?: boolean
    logo?: boolean
    slug?: boolean
    currency?: boolean
    bestTours?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    thirdColor?: boolean
    bgPrimaryColor?: boolean
    bgSecondaryColor?: boolean
    primaryFont?: boolean
    socialMedia?: boolean
    seo?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["office"]>

  export type OfficeSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    contactNumber?: boolean
    email?: boolean
    logo?: boolean
    slug?: boolean
    currency?: boolean
    bestTours?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    thirdColor?: boolean
    bgPrimaryColor?: boolean
    bgSecondaryColor?: boolean
    primaryFont?: boolean
    socialMedia?: boolean
    seo?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type OfficeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "contactNumber" | "email" | "logo" | "slug" | "currency" | "bestTours" | "primaryColor" | "secondaryColor" | "thirdColor" | "bgPrimaryColor" | "bgSecondaryColor" | "primaryFont" | "socialMedia" | "seo" | "status" | "createdAt", ExtArgs["result"]["office"]>

  export type $OfficePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Office"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      address: string | null
      contactNumber: string | null
      email: string | null
      logo: string | null
      slug: string | null
      currency: string
      bestTours: number[]
      primaryColor: string | null
      secondaryColor: string | null
      thirdColor: string | null
      bgPrimaryColor: string | null
      bgSecondaryColor: string | null
      primaryFont: string | null
      socialMedia: Prisma.JsonValue[]
      seo: Prisma.JsonValue | null
      status: boolean | null
      createdAt: Date
    }, ExtArgs["result"]["office"]>
    composites: {}
  }

  type OfficeGetPayload<S extends boolean | null | undefined | OfficeDefaultArgs> = $Result.GetResult<Prisma.$OfficePayload, S>

  type OfficeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfficeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfficeCountAggregateInputType | true
    }

  export interface OfficeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Office'], meta: { name: 'Office' } }
    /**
     * Find zero or one Office that matches the filter.
     * @param {OfficeFindUniqueArgs} args - Arguments to find a Office
     * @example
     * // Get one Office
     * const office = await prisma.office.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfficeFindUniqueArgs>(args: SelectSubset<T, OfficeFindUniqueArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Office that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfficeFindUniqueOrThrowArgs} args - Arguments to find a Office
     * @example
     * // Get one Office
     * const office = await prisma.office.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfficeFindUniqueOrThrowArgs>(args: SelectSubset<T, OfficeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Office that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeFindFirstArgs} args - Arguments to find a Office
     * @example
     * // Get one Office
     * const office = await prisma.office.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfficeFindFirstArgs>(args?: SelectSubset<T, OfficeFindFirstArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Office that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeFindFirstOrThrowArgs} args - Arguments to find a Office
     * @example
     * // Get one Office
     * const office = await prisma.office.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfficeFindFirstOrThrowArgs>(args?: SelectSubset<T, OfficeFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Offices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offices
     * const offices = await prisma.office.findMany()
     * 
     * // Get first 10 Offices
     * const offices = await prisma.office.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const officeWithIdOnly = await prisma.office.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfficeFindManyArgs>(args?: SelectSubset<T, OfficeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Office.
     * @param {OfficeCreateArgs} args - Arguments to create a Office.
     * @example
     * // Create one Office
     * const Office = await prisma.office.create({
     *   data: {
     *     // ... data to create a Office
     *   }
     * })
     * 
     */
    create<T extends OfficeCreateArgs>(args: SelectSubset<T, OfficeCreateArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Offices.
     * @param {OfficeCreateManyArgs} args - Arguments to create many Offices.
     * @example
     * // Create many Offices
     * const office = await prisma.office.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfficeCreateManyArgs>(args?: SelectSubset<T, OfficeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Offices and returns the data saved in the database.
     * @param {OfficeCreateManyAndReturnArgs} args - Arguments to create many Offices.
     * @example
     * // Create many Offices
     * const office = await prisma.office.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Offices and only return the `id`
     * const officeWithIdOnly = await prisma.office.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfficeCreateManyAndReturnArgs>(args?: SelectSubset<T, OfficeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Office.
     * @param {OfficeDeleteArgs} args - Arguments to delete one Office.
     * @example
     * // Delete one Office
     * const Office = await prisma.office.delete({
     *   where: {
     *     // ... filter to delete one Office
     *   }
     * })
     * 
     */
    delete<T extends OfficeDeleteArgs>(args: SelectSubset<T, OfficeDeleteArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Office.
     * @param {OfficeUpdateArgs} args - Arguments to update one Office.
     * @example
     * // Update one Office
     * const office = await prisma.office.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfficeUpdateArgs>(args: SelectSubset<T, OfficeUpdateArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Offices.
     * @param {OfficeDeleteManyArgs} args - Arguments to filter Offices to delete.
     * @example
     * // Delete a few Offices
     * const { count } = await prisma.office.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfficeDeleteManyArgs>(args?: SelectSubset<T, OfficeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offices
     * const office = await prisma.office.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfficeUpdateManyArgs>(args: SelectSubset<T, OfficeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offices and returns the data updated in the database.
     * @param {OfficeUpdateManyAndReturnArgs} args - Arguments to update many Offices.
     * @example
     * // Update many Offices
     * const office = await prisma.office.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Offices and only return the `id`
     * const officeWithIdOnly = await prisma.office.updateManyAndReturn({
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
    updateManyAndReturn<T extends OfficeUpdateManyAndReturnArgs>(args: SelectSubset<T, OfficeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Office.
     * @param {OfficeUpsertArgs} args - Arguments to update or create a Office.
     * @example
     * // Update or create a Office
     * const office = await prisma.office.upsert({
     *   create: {
     *     // ... data to create a Office
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Office we want to update
     *   }
     * })
     */
    upsert<T extends OfficeUpsertArgs>(args: SelectSubset<T, OfficeUpsertArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Offices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeCountArgs} args - Arguments to filter Offices to count.
     * @example
     * // Count the number of Offices
     * const count = await prisma.office.count({
     *   where: {
     *     // ... the filter for the Offices we want to count
     *   }
     * })
    **/
    count<T extends OfficeCountArgs>(
      args?: Subset<T, OfficeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfficeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Office.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfficeAggregateArgs>(args: Subset<T, OfficeAggregateArgs>): Prisma.PrismaPromise<GetOfficeAggregateType<T>>

    /**
     * Group by Office.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeGroupByArgs} args - Group by arguments.
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
      T extends OfficeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfficeGroupByArgs['orderBy'] }
        : { orderBy?: OfficeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OfficeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfficeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Office model
   */
  readonly fields: OfficeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Office.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfficeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Office model
   */
  interface OfficeFieldRefs {
    readonly id: FieldRef<"Office", 'Int'>
    readonly name: FieldRef<"Office", 'String'>
    readonly address: FieldRef<"Office", 'String'>
    readonly contactNumber: FieldRef<"Office", 'String'>
    readonly email: FieldRef<"Office", 'String'>
    readonly logo: FieldRef<"Office", 'String'>
    readonly slug: FieldRef<"Office", 'String'>
    readonly currency: FieldRef<"Office", 'String'>
    readonly bestTours: FieldRef<"Office", 'Int[]'>
    readonly primaryColor: FieldRef<"Office", 'String'>
    readonly secondaryColor: FieldRef<"Office", 'String'>
    readonly thirdColor: FieldRef<"Office", 'String'>
    readonly bgPrimaryColor: FieldRef<"Office", 'String'>
    readonly bgSecondaryColor: FieldRef<"Office", 'String'>
    readonly primaryFont: FieldRef<"Office", 'String'>
    readonly socialMedia: FieldRef<"Office", 'Json[]'>
    readonly seo: FieldRef<"Office", 'Json'>
    readonly status: FieldRef<"Office", 'Boolean'>
    readonly createdAt: FieldRef<"Office", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Office findUnique
   */
  export type OfficeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * Filter, which Office to fetch.
     */
    where: OfficeWhereUniqueInput
  }

  /**
   * Office findUniqueOrThrow
   */
  export type OfficeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * Filter, which Office to fetch.
     */
    where: OfficeWhereUniqueInput
  }

  /**
   * Office findFirst
   */
  export type OfficeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * Filter, which Office to fetch.
     */
    where?: OfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offices to fetch.
     */
    orderBy?: OfficeOrderByWithRelationInput | OfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offices.
     */
    cursor?: OfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offices.
     */
    distinct?: OfficeScalarFieldEnum | OfficeScalarFieldEnum[]
  }

  /**
   * Office findFirstOrThrow
   */
  export type OfficeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * Filter, which Office to fetch.
     */
    where?: OfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offices to fetch.
     */
    orderBy?: OfficeOrderByWithRelationInput | OfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offices.
     */
    cursor?: OfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offices.
     */
    distinct?: OfficeScalarFieldEnum | OfficeScalarFieldEnum[]
  }

  /**
   * Office findMany
   */
  export type OfficeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * Filter, which Offices to fetch.
     */
    where?: OfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offices to fetch.
     */
    orderBy?: OfficeOrderByWithRelationInput | OfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offices.
     */
    cursor?: OfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offices.
     */
    skip?: number
    distinct?: OfficeScalarFieldEnum | OfficeScalarFieldEnum[]
  }

  /**
   * Office create
   */
  export type OfficeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * The data needed to create a Office.
     */
    data: XOR<OfficeCreateInput, OfficeUncheckedCreateInput>
  }

  /**
   * Office createMany
   */
  export type OfficeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offices.
     */
    data: OfficeCreateManyInput | OfficeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Office createManyAndReturn
   */
  export type OfficeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * The data used to create many Offices.
     */
    data: OfficeCreateManyInput | OfficeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Office update
   */
  export type OfficeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * The data needed to update a Office.
     */
    data: XOR<OfficeUpdateInput, OfficeUncheckedUpdateInput>
    /**
     * Choose, which Office to update.
     */
    where: OfficeWhereUniqueInput
  }

  /**
   * Office updateMany
   */
  export type OfficeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offices.
     */
    data: XOR<OfficeUpdateManyMutationInput, OfficeUncheckedUpdateManyInput>
    /**
     * Filter which Offices to update
     */
    where?: OfficeWhereInput
    /**
     * Limit how many Offices to update.
     */
    limit?: number
  }

  /**
   * Office updateManyAndReturn
   */
  export type OfficeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * The data used to update Offices.
     */
    data: XOR<OfficeUpdateManyMutationInput, OfficeUncheckedUpdateManyInput>
    /**
     * Filter which Offices to update
     */
    where?: OfficeWhereInput
    /**
     * Limit how many Offices to update.
     */
    limit?: number
  }

  /**
   * Office upsert
   */
  export type OfficeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * The filter to search for the Office to update in case it exists.
     */
    where: OfficeWhereUniqueInput
    /**
     * In case the Office found by the `where` argument doesn't exist, create a new Office with this data.
     */
    create: XOR<OfficeCreateInput, OfficeUncheckedCreateInput>
    /**
     * In case the Office was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfficeUpdateInput, OfficeUncheckedUpdateInput>
  }

  /**
   * Office delete
   */
  export type OfficeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * Filter which Office to delete.
     */
    where: OfficeWhereUniqueInput
  }

  /**
   * Office deleteMany
   */
  export type OfficeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offices to delete
     */
    where?: OfficeWhereInput
    /**
     * Limit how many Offices to delete.
     */
    limit?: number
  }

  /**
   * Office without action
   */
  export type OfficeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
  }


  /**
   * Model Tour
   */

  export type AggregateTour = {
    _count: TourCountAggregateOutputType | null
    _avg: TourAvgAggregateOutputType | null
    _sum: TourSumAggregateOutputType | null
    _min: TourMinAggregateOutputType | null
    _max: TourMaxAggregateOutputType | null
  }

  export type TourAvgAggregateOutputType = {
    id: number | null
    numberOfDays: number | null
    priceSingle: number | null
    priceDouble: number | null
    priceSingleSa: number | null
    priceDoubleSa: number | null
    priceSingleJo: number | null
    priceDoubleJo: number | null
    typeId: number | null
  }

  export type TourSumAggregateOutputType = {
    id: number | null
    numberOfDays: number | null
    priceSingle: number | null
    priceDouble: number | null
    priceSingleSa: number | null
    priceDoubleSa: number | null
    priceSingleJo: number | null
    priceDoubleJo: number | null
    typeId: number | null
  }

  export type TourMinAggregateOutputType = {
    id: number | null
    name: string | null
    numberOfDays: number | null
    code: string | null
    slug: string | null
    isActive: boolean | null
    isTicketIncluded: boolean | null
    priceSingle: number | null
    priceDouble: number | null
    priceSingleSa: number | null
    priceDoubleSa: number | null
    priceSingleJo: number | null
    priceDoubleJo: number | null
    airpotComing: string | null
    airpotGoing: string | null
    additionalInfo: string | null
    typeId: number | null
    createdAt: Date | null
  }

  export type TourMaxAggregateOutputType = {
    id: number | null
    name: string | null
    numberOfDays: number | null
    code: string | null
    slug: string | null
    isActive: boolean | null
    isTicketIncluded: boolean | null
    priceSingle: number | null
    priceDouble: number | null
    priceSingleSa: number | null
    priceDoubleSa: number | null
    priceSingleJo: number | null
    priceDoubleJo: number | null
    airpotComing: string | null
    airpotGoing: string | null
    additionalInfo: string | null
    typeId: number | null
    createdAt: Date | null
  }

  export type TourCountAggregateOutputType = {
    id: number
    name: number
    numberOfDays: number
    code: number
    slug: number
    images: number
    seo: number
    isActive: number
    isTicketIncluded: number
    startDay: number
    priceSingle: number
    priceDouble: number
    priceSingleSa: number
    priceDoubleSa: number
    priceSingleJo: number
    priceDoubleJo: number
    tourPrices: number
    tourCountries: number
    tourHotels: number
    tourIncludes: number
    tourExcludes: number
    tourSections: number
    airpotComing: number
    airpotGoing: number
    additionalInfo: number
    additionalService: number
    externalFile: number
    typeId: number
    createdAt: number
    _all: number
  }


  export type TourAvgAggregateInputType = {
    id?: true
    numberOfDays?: true
    priceSingle?: true
    priceDouble?: true
    priceSingleSa?: true
    priceDoubleSa?: true
    priceSingleJo?: true
    priceDoubleJo?: true
    typeId?: true
  }

  export type TourSumAggregateInputType = {
    id?: true
    numberOfDays?: true
    priceSingle?: true
    priceDouble?: true
    priceSingleSa?: true
    priceDoubleSa?: true
    priceSingleJo?: true
    priceDoubleJo?: true
    typeId?: true
  }

  export type TourMinAggregateInputType = {
    id?: true
    name?: true
    numberOfDays?: true
    code?: true
    slug?: true
    isActive?: true
    isTicketIncluded?: true
    priceSingle?: true
    priceDouble?: true
    priceSingleSa?: true
    priceDoubleSa?: true
    priceSingleJo?: true
    priceDoubleJo?: true
    airpotComing?: true
    airpotGoing?: true
    additionalInfo?: true
    typeId?: true
    createdAt?: true
  }

  export type TourMaxAggregateInputType = {
    id?: true
    name?: true
    numberOfDays?: true
    code?: true
    slug?: true
    isActive?: true
    isTicketIncluded?: true
    priceSingle?: true
    priceDouble?: true
    priceSingleSa?: true
    priceDoubleSa?: true
    priceSingleJo?: true
    priceDoubleJo?: true
    airpotComing?: true
    airpotGoing?: true
    additionalInfo?: true
    typeId?: true
    createdAt?: true
  }

  export type TourCountAggregateInputType = {
    id?: true
    name?: true
    numberOfDays?: true
    code?: true
    slug?: true
    images?: true
    seo?: true
    isActive?: true
    isTicketIncluded?: true
    startDay?: true
    priceSingle?: true
    priceDouble?: true
    priceSingleSa?: true
    priceDoubleSa?: true
    priceSingleJo?: true
    priceDoubleJo?: true
    tourPrices?: true
    tourCountries?: true
    tourHotels?: true
    tourIncludes?: true
    tourExcludes?: true
    tourSections?: true
    airpotComing?: true
    airpotGoing?: true
    additionalInfo?: true
    additionalService?: true
    externalFile?: true
    typeId?: true
    createdAt?: true
    _all?: true
  }

  export type TourAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tour to aggregate.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tours
    **/
    _count?: true | TourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourMaxAggregateInputType
  }

  export type GetTourAggregateType<T extends TourAggregateArgs> = {
        [P in keyof T & keyof AggregateTour]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTour[P]>
      : GetScalarType<T[P], AggregateTour[P]>
  }




  export type TourGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourWhereInput
    orderBy?: TourOrderByWithAggregationInput | TourOrderByWithAggregationInput[]
    by: TourScalarFieldEnum[] | TourScalarFieldEnum
    having?: TourScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourCountAggregateInputType | true
    _avg?: TourAvgAggregateInputType
    _sum?: TourSumAggregateInputType
    _min?: TourMinAggregateInputType
    _max?: TourMaxAggregateInputType
  }

  export type TourGroupByOutputType = {
    id: number
    name: string
    numberOfDays: number
    code: string | null
    slug: string | null
    images: string[]
    seo: JsonValue | null
    isActive: boolean | null
    isTicketIncluded: boolean | null
    startDay: string[]
    priceSingle: number | null
    priceDouble: number | null
    priceSingleSa: number | null
    priceDoubleSa: number | null
    priceSingleJo: number | null
    priceDoubleJo: number | null
    tourPrices: JsonValue[]
    tourCountries: string[]
    tourHotels: string[]
    tourIncludes: JsonValue[]
    tourExcludes: JsonValue[]
    tourSections: JsonValue[]
    airpotComing: string | null
    airpotGoing: string | null
    additionalInfo: string | null
    additionalService: JsonValue[]
    externalFile: JsonValue | null
    typeId: number | null
    createdAt: Date
    _count: TourCountAggregateOutputType | null
    _avg: TourAvgAggregateOutputType | null
    _sum: TourSumAggregateOutputType | null
    _min: TourMinAggregateOutputType | null
    _max: TourMaxAggregateOutputType | null
  }

  type GetTourGroupByPayload<T extends TourGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourGroupByOutputType[P]>
            : GetScalarType<T[P], TourGroupByOutputType[P]>
        }
      >
    >


  export type TourSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    numberOfDays?: boolean
    code?: boolean
    slug?: boolean
    images?: boolean
    seo?: boolean
    isActive?: boolean
    isTicketIncluded?: boolean
    startDay?: boolean
    priceSingle?: boolean
    priceDouble?: boolean
    priceSingleSa?: boolean
    priceDoubleSa?: boolean
    priceSingleJo?: boolean
    priceDoubleJo?: boolean
    tourPrices?: boolean
    tourCountries?: boolean
    tourHotels?: boolean
    tourIncludes?: boolean
    tourExcludes?: boolean
    tourSections?: boolean
    airpotComing?: boolean
    airpotGoing?: boolean
    additionalInfo?: boolean
    additionalService?: boolean
    externalFile?: boolean
    typeId?: boolean
    createdAt?: boolean
    customers?: boolean | Tour$customersArgs<ExtArgs>
    tourType?: boolean | Tour$tourTypeArgs<ExtArgs>
    locationTours?: boolean | Tour$locationToursArgs<ExtArgs>
    _count?: boolean | TourCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tour"]>

  export type TourSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    numberOfDays?: boolean
    code?: boolean
    slug?: boolean
    images?: boolean
    seo?: boolean
    isActive?: boolean
    isTicketIncluded?: boolean
    startDay?: boolean
    priceSingle?: boolean
    priceDouble?: boolean
    priceSingleSa?: boolean
    priceDoubleSa?: boolean
    priceSingleJo?: boolean
    priceDoubleJo?: boolean
    tourPrices?: boolean
    tourCountries?: boolean
    tourHotels?: boolean
    tourIncludes?: boolean
    tourExcludes?: boolean
    tourSections?: boolean
    airpotComing?: boolean
    airpotGoing?: boolean
    additionalInfo?: boolean
    additionalService?: boolean
    externalFile?: boolean
    typeId?: boolean
    createdAt?: boolean
    tourType?: boolean | Tour$tourTypeArgs<ExtArgs>
  }, ExtArgs["result"]["tour"]>

  export type TourSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    numberOfDays?: boolean
    code?: boolean
    slug?: boolean
    images?: boolean
    seo?: boolean
    isActive?: boolean
    isTicketIncluded?: boolean
    startDay?: boolean
    priceSingle?: boolean
    priceDouble?: boolean
    priceSingleSa?: boolean
    priceDoubleSa?: boolean
    priceSingleJo?: boolean
    priceDoubleJo?: boolean
    tourPrices?: boolean
    tourCountries?: boolean
    tourHotels?: boolean
    tourIncludes?: boolean
    tourExcludes?: boolean
    tourSections?: boolean
    airpotComing?: boolean
    airpotGoing?: boolean
    additionalInfo?: boolean
    additionalService?: boolean
    externalFile?: boolean
    typeId?: boolean
    createdAt?: boolean
    tourType?: boolean | Tour$tourTypeArgs<ExtArgs>
  }, ExtArgs["result"]["tour"]>

  export type TourSelectScalar = {
    id?: boolean
    name?: boolean
    numberOfDays?: boolean
    code?: boolean
    slug?: boolean
    images?: boolean
    seo?: boolean
    isActive?: boolean
    isTicketIncluded?: boolean
    startDay?: boolean
    priceSingle?: boolean
    priceDouble?: boolean
    priceSingleSa?: boolean
    priceDoubleSa?: boolean
    priceSingleJo?: boolean
    priceDoubleJo?: boolean
    tourPrices?: boolean
    tourCountries?: boolean
    tourHotels?: boolean
    tourIncludes?: boolean
    tourExcludes?: boolean
    tourSections?: boolean
    airpotComing?: boolean
    airpotGoing?: boolean
    additionalInfo?: boolean
    additionalService?: boolean
    externalFile?: boolean
    typeId?: boolean
    createdAt?: boolean
  }

  export type TourOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "numberOfDays" | "code" | "slug" | "images" | "seo" | "isActive" | "isTicketIncluded" | "startDay" | "priceSingle" | "priceDouble" | "priceSingleSa" | "priceDoubleSa" | "priceSingleJo" | "priceDoubleJo" | "tourPrices" | "tourCountries" | "tourHotels" | "tourIncludes" | "tourExcludes" | "tourSections" | "airpotComing" | "airpotGoing" | "additionalInfo" | "additionalService" | "externalFile" | "typeId" | "createdAt", ExtArgs["result"]["tour"]>
  export type TourInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | Tour$customersArgs<ExtArgs>
    tourType?: boolean | Tour$tourTypeArgs<ExtArgs>
    locationTours?: boolean | Tour$locationToursArgs<ExtArgs>
    _count?: boolean | TourCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TourIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourType?: boolean | Tour$tourTypeArgs<ExtArgs>
  }
  export type TourIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourType?: boolean | Tour$tourTypeArgs<ExtArgs>
  }

  export type $TourPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tour"
    objects: {
      customers: Prisma.$CustomerPayload<ExtArgs>[]
      tourType: Prisma.$TourTypePayload<ExtArgs> | null
      locationTours: Prisma.$LocationTourPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      numberOfDays: number
      code: string | null
      slug: string | null
      images: string[]
      seo: Prisma.JsonValue | null
      isActive: boolean | null
      isTicketIncluded: boolean | null
      startDay: string[]
      priceSingle: number | null
      priceDouble: number | null
      priceSingleSa: number | null
      priceDoubleSa: number | null
      priceSingleJo: number | null
      priceDoubleJo: number | null
      tourPrices: Prisma.JsonValue[]
      tourCountries: string[]
      tourHotels: string[]
      tourIncludes: Prisma.JsonValue[]
      tourExcludes: Prisma.JsonValue[]
      tourSections: Prisma.JsonValue[]
      airpotComing: string | null
      airpotGoing: string | null
      additionalInfo: string | null
      additionalService: Prisma.JsonValue[]
      externalFile: Prisma.JsonValue | null
      typeId: number | null
      createdAt: Date
    }, ExtArgs["result"]["tour"]>
    composites: {}
  }

  type TourGetPayload<S extends boolean | null | undefined | TourDefaultArgs> = $Result.GetResult<Prisma.$TourPayload, S>

  type TourCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourCountAggregateInputType | true
    }

  export interface TourDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tour'], meta: { name: 'Tour' } }
    /**
     * Find zero or one Tour that matches the filter.
     * @param {TourFindUniqueArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourFindUniqueArgs>(args: SelectSubset<T, TourFindUniqueArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tour that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourFindUniqueOrThrowArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourFindUniqueOrThrowArgs>(args: SelectSubset<T, TourFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindFirstArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourFindFirstArgs>(args?: SelectSubset<T, TourFindFirstArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindFirstOrThrowArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourFindFirstOrThrowArgs>(args?: SelectSubset<T, TourFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tours
     * const tours = await prisma.tour.findMany()
     * 
     * // Get first 10 Tours
     * const tours = await prisma.tour.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourWithIdOnly = await prisma.tour.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourFindManyArgs>(args?: SelectSubset<T, TourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tour.
     * @param {TourCreateArgs} args - Arguments to create a Tour.
     * @example
     * // Create one Tour
     * const Tour = await prisma.tour.create({
     *   data: {
     *     // ... data to create a Tour
     *   }
     * })
     * 
     */
    create<T extends TourCreateArgs>(args: SelectSubset<T, TourCreateArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tours.
     * @param {TourCreateManyArgs} args - Arguments to create many Tours.
     * @example
     * // Create many Tours
     * const tour = await prisma.tour.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourCreateManyArgs>(args?: SelectSubset<T, TourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tours and returns the data saved in the database.
     * @param {TourCreateManyAndReturnArgs} args - Arguments to create many Tours.
     * @example
     * // Create many Tours
     * const tour = await prisma.tour.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tours and only return the `id`
     * const tourWithIdOnly = await prisma.tour.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourCreateManyAndReturnArgs>(args?: SelectSubset<T, TourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tour.
     * @param {TourDeleteArgs} args - Arguments to delete one Tour.
     * @example
     * // Delete one Tour
     * const Tour = await prisma.tour.delete({
     *   where: {
     *     // ... filter to delete one Tour
     *   }
     * })
     * 
     */
    delete<T extends TourDeleteArgs>(args: SelectSubset<T, TourDeleteArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tour.
     * @param {TourUpdateArgs} args - Arguments to update one Tour.
     * @example
     * // Update one Tour
     * const tour = await prisma.tour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourUpdateArgs>(args: SelectSubset<T, TourUpdateArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tours.
     * @param {TourDeleteManyArgs} args - Arguments to filter Tours to delete.
     * @example
     * // Delete a few Tours
     * const { count } = await prisma.tour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourDeleteManyArgs>(args?: SelectSubset<T, TourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tours
     * const tour = await prisma.tour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourUpdateManyArgs>(args: SelectSubset<T, TourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tours and returns the data updated in the database.
     * @param {TourUpdateManyAndReturnArgs} args - Arguments to update many Tours.
     * @example
     * // Update many Tours
     * const tour = await prisma.tour.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tours and only return the `id`
     * const tourWithIdOnly = await prisma.tour.updateManyAndReturn({
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
    updateManyAndReturn<T extends TourUpdateManyAndReturnArgs>(args: SelectSubset<T, TourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tour.
     * @param {TourUpsertArgs} args - Arguments to update or create a Tour.
     * @example
     * // Update or create a Tour
     * const tour = await prisma.tour.upsert({
     *   create: {
     *     // ... data to create a Tour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tour we want to update
     *   }
     * })
     */
    upsert<T extends TourUpsertArgs>(args: SelectSubset<T, TourUpsertArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourCountArgs} args - Arguments to filter Tours to count.
     * @example
     * // Count the number of Tours
     * const count = await prisma.tour.count({
     *   where: {
     *     // ... the filter for the Tours we want to count
     *   }
     * })
    **/
    count<T extends TourCountArgs>(
      args?: Subset<T, TourCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TourAggregateArgs>(args: Subset<T, TourAggregateArgs>): Prisma.PrismaPromise<GetTourAggregateType<T>>

    /**
     * Group by Tour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourGroupByArgs} args - Group by arguments.
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
      T extends TourGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourGroupByArgs['orderBy'] }
        : { orderBy?: TourGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tour model
   */
  readonly fields: TourFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends Tour$customersArgs<ExtArgs> = {}>(args?: Subset<T, Tour$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tourType<T extends Tour$tourTypeArgs<ExtArgs> = {}>(args?: Subset<T, Tour$tourTypeArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    locationTours<T extends Tour$locationToursArgs<ExtArgs> = {}>(args?: Subset<T, Tour$locationToursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationTourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tour model
   */
  interface TourFieldRefs {
    readonly id: FieldRef<"Tour", 'Int'>
    readonly name: FieldRef<"Tour", 'String'>
    readonly numberOfDays: FieldRef<"Tour", 'Int'>
    readonly code: FieldRef<"Tour", 'String'>
    readonly slug: FieldRef<"Tour", 'String'>
    readonly images: FieldRef<"Tour", 'String[]'>
    readonly seo: FieldRef<"Tour", 'Json'>
    readonly isActive: FieldRef<"Tour", 'Boolean'>
    readonly isTicketIncluded: FieldRef<"Tour", 'Boolean'>
    readonly startDay: FieldRef<"Tour", 'String[]'>
    readonly priceSingle: FieldRef<"Tour", 'Float'>
    readonly priceDouble: FieldRef<"Tour", 'Float'>
    readonly priceSingleSa: FieldRef<"Tour", 'Float'>
    readonly priceDoubleSa: FieldRef<"Tour", 'Float'>
    readonly priceSingleJo: FieldRef<"Tour", 'Float'>
    readonly priceDoubleJo: FieldRef<"Tour", 'Float'>
    readonly tourPrices: FieldRef<"Tour", 'Json[]'>
    readonly tourCountries: FieldRef<"Tour", 'String[]'>
    readonly tourHotels: FieldRef<"Tour", 'String[]'>
    readonly tourIncludes: FieldRef<"Tour", 'Json[]'>
    readonly tourExcludes: FieldRef<"Tour", 'Json[]'>
    readonly tourSections: FieldRef<"Tour", 'Json[]'>
    readonly airpotComing: FieldRef<"Tour", 'String'>
    readonly airpotGoing: FieldRef<"Tour", 'String'>
    readonly additionalInfo: FieldRef<"Tour", 'String'>
    readonly additionalService: FieldRef<"Tour", 'Json[]'>
    readonly externalFile: FieldRef<"Tour", 'Json'>
    readonly typeId: FieldRef<"Tour", 'Int'>
    readonly createdAt: FieldRef<"Tour", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tour findUnique
   */
  export type TourFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour findUniqueOrThrow
   */
  export type TourFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour findFirst
   */
  export type TourFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tours.
     */
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour findFirstOrThrow
   */
  export type TourFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tours.
     */
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour findMany
   */
  export type TourFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tours to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour create
   */
  export type TourCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The data needed to create a Tour.
     */
    data: XOR<TourCreateInput, TourUncheckedCreateInput>
  }

  /**
   * Tour createMany
   */
  export type TourCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tours.
     */
    data: TourCreateManyInput | TourCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tour createManyAndReturn
   */
  export type TourCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * The data used to create many Tours.
     */
    data: TourCreateManyInput | TourCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tour update
   */
  export type TourUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The data needed to update a Tour.
     */
    data: XOR<TourUpdateInput, TourUncheckedUpdateInput>
    /**
     * Choose, which Tour to update.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour updateMany
   */
  export type TourUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tours.
     */
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyInput>
    /**
     * Filter which Tours to update
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to update.
     */
    limit?: number
  }

  /**
   * Tour updateManyAndReturn
   */
  export type TourUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * The data used to update Tours.
     */
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyInput>
    /**
     * Filter which Tours to update
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tour upsert
   */
  export type TourUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The filter to search for the Tour to update in case it exists.
     */
    where: TourWhereUniqueInput
    /**
     * In case the Tour found by the `where` argument doesn't exist, create a new Tour with this data.
     */
    create: XOR<TourCreateInput, TourUncheckedCreateInput>
    /**
     * In case the Tour was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourUpdateInput, TourUncheckedUpdateInput>
  }

  /**
   * Tour delete
   */
  export type TourDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter which Tour to delete.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour deleteMany
   */
  export type TourDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tours to delete
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to delete.
     */
    limit?: number
  }

  /**
   * Tour.customers
   */
  export type Tour$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Tour.tourType
   */
  export type Tour$tourTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    where?: TourTypeWhereInput
  }

  /**
   * Tour.locationTours
   */
  export type Tour$locationToursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationTour
     */
    select?: LocationTourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationTour
     */
    omit?: LocationTourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationTourInclude<ExtArgs> | null
    where?: LocationTourWhereInput
    orderBy?: LocationTourOrderByWithRelationInput | LocationTourOrderByWithRelationInput[]
    cursor?: LocationTourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationTourScalarFieldEnum | LocationTourScalarFieldEnum[]
  }

  /**
   * Tour without action
   */
  export type TourDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
  }


  /**
   * Model TourType
   */

  export type AggregateTourType = {
    _count: TourTypeCountAggregateOutputType | null
    _avg: TourTypeAvgAggregateOutputType | null
    _sum: TourTypeSumAggregateOutputType | null
    _min: TourTypeMinAggregateOutputType | null
    _max: TourTypeMaxAggregateOutputType | null
  }

  export type TourTypeAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type TourTypeSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type TourTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    showOnService: boolean | null
    createdAt: Date | null
    order: number | null
  }

  export type TourTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    showOnService: boolean | null
    createdAt: Date | null
    order: number | null
  }

  export type TourTypeCountAggregateOutputType = {
    id: number
    name: number
    image: number
    showOnService: number
    createdAt: number
    order: number
    _all: number
  }


  export type TourTypeAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type TourTypeSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type TourTypeMinAggregateInputType = {
    id?: true
    name?: true
    showOnService?: true
    createdAt?: true
    order?: true
  }

  export type TourTypeMaxAggregateInputType = {
    id?: true
    name?: true
    showOnService?: true
    createdAt?: true
    order?: true
  }

  export type TourTypeCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    showOnService?: true
    createdAt?: true
    order?: true
    _all?: true
  }

  export type TourTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourType to aggregate.
     */
    where?: TourTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourTypes to fetch.
     */
    orderBy?: TourTypeOrderByWithRelationInput | TourTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourTypes
    **/
    _count?: true | TourTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourTypeMaxAggregateInputType
  }

  export type GetTourTypeAggregateType<T extends TourTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTourType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourType[P]>
      : GetScalarType<T[P], AggregateTourType[P]>
  }




  export type TourTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourTypeWhereInput
    orderBy?: TourTypeOrderByWithAggregationInput | TourTypeOrderByWithAggregationInput[]
    by: TourTypeScalarFieldEnum[] | TourTypeScalarFieldEnum
    having?: TourTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourTypeCountAggregateInputType | true
    _avg?: TourTypeAvgAggregateInputType
    _sum?: TourTypeSumAggregateInputType
    _min?: TourTypeMinAggregateInputType
    _max?: TourTypeMaxAggregateInputType
  }

  export type TourTypeGroupByOutputType = {
    id: number
    name: string | null
    image: JsonValue
    showOnService: boolean
    createdAt: Date
    order: number
    _count: TourTypeCountAggregateOutputType | null
    _avg: TourTypeAvgAggregateOutputType | null
    _sum: TourTypeSumAggregateOutputType | null
    _min: TourTypeMinAggregateOutputType | null
    _max: TourTypeMaxAggregateOutputType | null
  }

  type GetTourTypeGroupByPayload<T extends TourTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TourTypeGroupByOutputType[P]>
        }
      >
    >


  export type TourTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    showOnService?: boolean
    createdAt?: boolean
    order?: boolean
    tours?: boolean | TourType$toursArgs<ExtArgs>
    _count?: boolean | TourTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourType"]>

  export type TourTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    showOnService?: boolean
    createdAt?: boolean
    order?: boolean
  }, ExtArgs["result"]["tourType"]>

  export type TourTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    showOnService?: boolean
    createdAt?: boolean
    order?: boolean
  }, ExtArgs["result"]["tourType"]>

  export type TourTypeSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    showOnService?: boolean
    createdAt?: boolean
    order?: boolean
  }

  export type TourTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "showOnService" | "createdAt" | "order", ExtArgs["result"]["tourType"]>
  export type TourTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tours?: boolean | TourType$toursArgs<ExtArgs>
    _count?: boolean | TourTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TourTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TourTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TourTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourType"
    objects: {
      tours: Prisma.$TourPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      image: Prisma.JsonValue
      showOnService: boolean
      createdAt: Date
      order: number
    }, ExtArgs["result"]["tourType"]>
    composites: {}
  }

  type TourTypeGetPayload<S extends boolean | null | undefined | TourTypeDefaultArgs> = $Result.GetResult<Prisma.$TourTypePayload, S>

  type TourTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourTypeCountAggregateInputType | true
    }

  export interface TourTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourType'], meta: { name: 'TourType' } }
    /**
     * Find zero or one TourType that matches the filter.
     * @param {TourTypeFindUniqueArgs} args - Arguments to find a TourType
     * @example
     * // Get one TourType
     * const tourType = await prisma.tourType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourTypeFindUniqueArgs>(args: SelectSubset<T, TourTypeFindUniqueArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourTypeFindUniqueOrThrowArgs} args - Arguments to find a TourType
     * @example
     * // Get one TourType
     * const tourType = await prisma.tourType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TourTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeFindFirstArgs} args - Arguments to find a TourType
     * @example
     * // Get one TourType
     * const tourType = await prisma.tourType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourTypeFindFirstArgs>(args?: SelectSubset<T, TourTypeFindFirstArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeFindFirstOrThrowArgs} args - Arguments to find a TourType
     * @example
     * // Get one TourType
     * const tourType = await prisma.tourType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TourTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourTypes
     * const tourTypes = await prisma.tourType.findMany()
     * 
     * // Get first 10 TourTypes
     * const tourTypes = await prisma.tourType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourTypeWithIdOnly = await prisma.tourType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourTypeFindManyArgs>(args?: SelectSubset<T, TourTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourType.
     * @param {TourTypeCreateArgs} args - Arguments to create a TourType.
     * @example
     * // Create one TourType
     * const TourType = await prisma.tourType.create({
     *   data: {
     *     // ... data to create a TourType
     *   }
     * })
     * 
     */
    create<T extends TourTypeCreateArgs>(args: SelectSubset<T, TourTypeCreateArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourTypes.
     * @param {TourTypeCreateManyArgs} args - Arguments to create many TourTypes.
     * @example
     * // Create many TourTypes
     * const tourType = await prisma.tourType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourTypeCreateManyArgs>(args?: SelectSubset<T, TourTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourTypes and returns the data saved in the database.
     * @param {TourTypeCreateManyAndReturnArgs} args - Arguments to create many TourTypes.
     * @example
     * // Create many TourTypes
     * const tourType = await prisma.tourType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourTypes and only return the `id`
     * const tourTypeWithIdOnly = await prisma.tourType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TourTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourType.
     * @param {TourTypeDeleteArgs} args - Arguments to delete one TourType.
     * @example
     * // Delete one TourType
     * const TourType = await prisma.tourType.delete({
     *   where: {
     *     // ... filter to delete one TourType
     *   }
     * })
     * 
     */
    delete<T extends TourTypeDeleteArgs>(args: SelectSubset<T, TourTypeDeleteArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourType.
     * @param {TourTypeUpdateArgs} args - Arguments to update one TourType.
     * @example
     * // Update one TourType
     * const tourType = await prisma.tourType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourTypeUpdateArgs>(args: SelectSubset<T, TourTypeUpdateArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourTypes.
     * @param {TourTypeDeleteManyArgs} args - Arguments to filter TourTypes to delete.
     * @example
     * // Delete a few TourTypes
     * const { count } = await prisma.tourType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourTypeDeleteManyArgs>(args?: SelectSubset<T, TourTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourTypes
     * const tourType = await prisma.tourType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourTypeUpdateManyArgs>(args: SelectSubset<T, TourTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourTypes and returns the data updated in the database.
     * @param {TourTypeUpdateManyAndReturnArgs} args - Arguments to update many TourTypes.
     * @example
     * // Update many TourTypes
     * const tourType = await prisma.tourType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourTypes and only return the `id`
     * const tourTypeWithIdOnly = await prisma.tourType.updateManyAndReturn({
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
    updateManyAndReturn<T extends TourTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TourTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourType.
     * @param {TourTypeUpsertArgs} args - Arguments to update or create a TourType.
     * @example
     * // Update or create a TourType
     * const tourType = await prisma.tourType.upsert({
     *   create: {
     *     // ... data to create a TourType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourType we want to update
     *   }
     * })
     */
    upsert<T extends TourTypeUpsertArgs>(args: SelectSubset<T, TourTypeUpsertArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeCountArgs} args - Arguments to filter TourTypes to count.
     * @example
     * // Count the number of TourTypes
     * const count = await prisma.tourType.count({
     *   where: {
     *     // ... the filter for the TourTypes we want to count
     *   }
     * })
    **/
    count<T extends TourTypeCountArgs>(
      args?: Subset<T, TourTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TourTypeAggregateArgs>(args: Subset<T, TourTypeAggregateArgs>): Prisma.PrismaPromise<GetTourTypeAggregateType<T>>

    /**
     * Group by TourType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeGroupByArgs} args - Group by arguments.
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
      T extends TourTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourTypeGroupByArgs['orderBy'] }
        : { orderBy?: TourTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TourTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourType model
   */
  readonly fields: TourTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tours<T extends TourType$toursArgs<ExtArgs> = {}>(args?: Subset<T, TourType$toursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TourType model
   */
  interface TourTypeFieldRefs {
    readonly id: FieldRef<"TourType", 'Int'>
    readonly name: FieldRef<"TourType", 'String'>
    readonly image: FieldRef<"TourType", 'Json'>
    readonly showOnService: FieldRef<"TourType", 'Boolean'>
    readonly createdAt: FieldRef<"TourType", 'DateTime'>
    readonly order: FieldRef<"TourType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TourType findUnique
   */
  export type TourTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * Filter, which TourType to fetch.
     */
    where: TourTypeWhereUniqueInput
  }

  /**
   * TourType findUniqueOrThrow
   */
  export type TourTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * Filter, which TourType to fetch.
     */
    where: TourTypeWhereUniqueInput
  }

  /**
   * TourType findFirst
   */
  export type TourTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * Filter, which TourType to fetch.
     */
    where?: TourTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourTypes to fetch.
     */
    orderBy?: TourTypeOrderByWithRelationInput | TourTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourTypes.
     */
    cursor?: TourTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourTypes.
     */
    distinct?: TourTypeScalarFieldEnum | TourTypeScalarFieldEnum[]
  }

  /**
   * TourType findFirstOrThrow
   */
  export type TourTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * Filter, which TourType to fetch.
     */
    where?: TourTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourTypes to fetch.
     */
    orderBy?: TourTypeOrderByWithRelationInput | TourTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourTypes.
     */
    cursor?: TourTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourTypes.
     */
    distinct?: TourTypeScalarFieldEnum | TourTypeScalarFieldEnum[]
  }

  /**
   * TourType findMany
   */
  export type TourTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * Filter, which TourTypes to fetch.
     */
    where?: TourTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourTypes to fetch.
     */
    orderBy?: TourTypeOrderByWithRelationInput | TourTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourTypes.
     */
    cursor?: TourTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourTypes.
     */
    skip?: number
    distinct?: TourTypeScalarFieldEnum | TourTypeScalarFieldEnum[]
  }

  /**
   * TourType create
   */
  export type TourTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a TourType.
     */
    data?: XOR<TourTypeCreateInput, TourTypeUncheckedCreateInput>
  }

  /**
   * TourType createMany
   */
  export type TourTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourTypes.
     */
    data: TourTypeCreateManyInput | TourTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourType createManyAndReturn
   */
  export type TourTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * The data used to create many TourTypes.
     */
    data: TourTypeCreateManyInput | TourTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourType update
   */
  export type TourTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a TourType.
     */
    data: XOR<TourTypeUpdateInput, TourTypeUncheckedUpdateInput>
    /**
     * Choose, which TourType to update.
     */
    where: TourTypeWhereUniqueInput
  }

  /**
   * TourType updateMany
   */
  export type TourTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourTypes.
     */
    data: XOR<TourTypeUpdateManyMutationInput, TourTypeUncheckedUpdateManyInput>
    /**
     * Filter which TourTypes to update
     */
    where?: TourTypeWhereInput
    /**
     * Limit how many TourTypes to update.
     */
    limit?: number
  }

  /**
   * TourType updateManyAndReturn
   */
  export type TourTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * The data used to update TourTypes.
     */
    data: XOR<TourTypeUpdateManyMutationInput, TourTypeUncheckedUpdateManyInput>
    /**
     * Filter which TourTypes to update
     */
    where?: TourTypeWhereInput
    /**
     * Limit how many TourTypes to update.
     */
    limit?: number
  }

  /**
   * TourType upsert
   */
  export type TourTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the TourType to update in case it exists.
     */
    where: TourTypeWhereUniqueInput
    /**
     * In case the TourType found by the `where` argument doesn't exist, create a new TourType with this data.
     */
    create: XOR<TourTypeCreateInput, TourTypeUncheckedCreateInput>
    /**
     * In case the TourType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourTypeUpdateInput, TourTypeUncheckedUpdateInput>
  }

  /**
   * TourType delete
   */
  export type TourTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * Filter which TourType to delete.
     */
    where: TourTypeWhereUniqueInput
  }

  /**
   * TourType deleteMany
   */
  export type TourTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourTypes to delete
     */
    where?: TourTypeWhereInput
    /**
     * Limit how many TourTypes to delete.
     */
    limit?: number
  }

  /**
   * TourType.tours
   */
  export type TourType$toursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    where?: TourWhereInput
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    cursor?: TourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * TourType without action
   */
  export type TourTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    passkeys?: boolean | User$passkeysArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    passkeys?: boolean | User$passkeysArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      passkeys: Prisma.$PasskeyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passkeys<T extends User$passkeysArgs<ExtArgs> = {}>(args?: Subset<T, User$passkeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.passkeys
   */
  export type User$passkeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passkey
     */
    omit?: PasskeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    where?: PasskeyWhereInput
    orderBy?: PasskeyOrderByWithRelationInput | PasskeyOrderByWithRelationInput[]
    cursor?: PasskeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasskeyScalarFieldEnum | PasskeyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model Passkey
   */

  export type AggregatePasskey = {
    _count: PasskeyCountAggregateOutputType | null
    _avg: PasskeyAvgAggregateOutputType | null
    _sum: PasskeySumAggregateOutputType | null
    _min: PasskeyMinAggregateOutputType | null
    _max: PasskeyMaxAggregateOutputType | null
  }

  export type PasskeyAvgAggregateOutputType = {
    counter: number | null
  }

  export type PasskeySumAggregateOutputType = {
    counter: number | null
  }

  export type PasskeyMinAggregateOutputType = {
    id: string | null
    name: string | null
    publicKey: string | null
    userId: string | null
    credentialID: string | null
    counter: number | null
    deviceType: string | null
    backedUp: boolean | null
    transports: string | null
    createdAt: Date | null
  }

  export type PasskeyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    publicKey: string | null
    userId: string | null
    credentialID: string | null
    counter: number | null
    deviceType: string | null
    backedUp: boolean | null
    transports: string | null
    createdAt: Date | null
  }

  export type PasskeyCountAggregateOutputType = {
    id: number
    name: number
    publicKey: number
    userId: number
    credentialID: number
    counter: number
    deviceType: number
    backedUp: number
    transports: number
    createdAt: number
    _all: number
  }


  export type PasskeyAvgAggregateInputType = {
    counter?: true
  }

  export type PasskeySumAggregateInputType = {
    counter?: true
  }

  export type PasskeyMinAggregateInputType = {
    id?: true
    name?: true
    publicKey?: true
    userId?: true
    credentialID?: true
    counter?: true
    deviceType?: true
    backedUp?: true
    transports?: true
    createdAt?: true
  }

  export type PasskeyMaxAggregateInputType = {
    id?: true
    name?: true
    publicKey?: true
    userId?: true
    credentialID?: true
    counter?: true
    deviceType?: true
    backedUp?: true
    transports?: true
    createdAt?: true
  }

  export type PasskeyCountAggregateInputType = {
    id?: true
    name?: true
    publicKey?: true
    userId?: true
    credentialID?: true
    counter?: true
    deviceType?: true
    backedUp?: true
    transports?: true
    createdAt?: true
    _all?: true
  }

  export type PasskeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passkey to aggregate.
     */
    where?: PasskeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passkeys to fetch.
     */
    orderBy?: PasskeyOrderByWithRelationInput | PasskeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasskeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passkeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passkeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Passkeys
    **/
    _count?: true | PasskeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasskeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasskeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasskeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasskeyMaxAggregateInputType
  }

  export type GetPasskeyAggregateType<T extends PasskeyAggregateArgs> = {
        [P in keyof T & keyof AggregatePasskey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasskey[P]>
      : GetScalarType<T[P], AggregatePasskey[P]>
  }




  export type PasskeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasskeyWhereInput
    orderBy?: PasskeyOrderByWithAggregationInput | PasskeyOrderByWithAggregationInput[]
    by: PasskeyScalarFieldEnum[] | PasskeyScalarFieldEnum
    having?: PasskeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasskeyCountAggregateInputType | true
    _avg?: PasskeyAvgAggregateInputType
    _sum?: PasskeySumAggregateInputType
    _min?: PasskeyMinAggregateInputType
    _max?: PasskeyMaxAggregateInputType
  }

  export type PasskeyGroupByOutputType = {
    id: string
    name: string | null
    publicKey: string
    userId: string
    credentialID: string
    counter: number
    deviceType: string
    backedUp: boolean
    transports: string | null
    createdAt: Date | null
    _count: PasskeyCountAggregateOutputType | null
    _avg: PasskeyAvgAggregateOutputType | null
    _sum: PasskeySumAggregateOutputType | null
    _min: PasskeyMinAggregateOutputType | null
    _max: PasskeyMaxAggregateOutputType | null
  }

  type GetPasskeyGroupByPayload<T extends PasskeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasskeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasskeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasskeyGroupByOutputType[P]>
            : GetScalarType<T[P], PasskeyGroupByOutputType[P]>
        }
      >
    >


  export type PasskeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    publicKey?: boolean
    userId?: boolean
    credentialID?: boolean
    counter?: boolean
    deviceType?: boolean
    backedUp?: boolean
    transports?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passkey"]>

  export type PasskeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    publicKey?: boolean
    userId?: boolean
    credentialID?: boolean
    counter?: boolean
    deviceType?: boolean
    backedUp?: boolean
    transports?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passkey"]>

  export type PasskeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    publicKey?: boolean
    userId?: boolean
    credentialID?: boolean
    counter?: boolean
    deviceType?: boolean
    backedUp?: boolean
    transports?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passkey"]>

  export type PasskeySelectScalar = {
    id?: boolean
    name?: boolean
    publicKey?: boolean
    userId?: boolean
    credentialID?: boolean
    counter?: boolean
    deviceType?: boolean
    backedUp?: boolean
    transports?: boolean
    createdAt?: boolean
  }

  export type PasskeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "publicKey" | "userId" | "credentialID" | "counter" | "deviceType" | "backedUp" | "transports" | "createdAt", ExtArgs["result"]["passkey"]>
  export type PasskeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasskeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasskeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasskeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Passkey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      publicKey: string
      userId: string
      credentialID: string
      counter: number
      deviceType: string
      backedUp: boolean
      transports: string | null
      createdAt: Date | null
    }, ExtArgs["result"]["passkey"]>
    composites: {}
  }

  type PasskeyGetPayload<S extends boolean | null | undefined | PasskeyDefaultArgs> = $Result.GetResult<Prisma.$PasskeyPayload, S>

  type PasskeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasskeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasskeyCountAggregateInputType | true
    }

  export interface PasskeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Passkey'], meta: { name: 'Passkey' } }
    /**
     * Find zero or one Passkey that matches the filter.
     * @param {PasskeyFindUniqueArgs} args - Arguments to find a Passkey
     * @example
     * // Get one Passkey
     * const passkey = await prisma.passkey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasskeyFindUniqueArgs>(args: SelectSubset<T, PasskeyFindUniqueArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Passkey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasskeyFindUniqueOrThrowArgs} args - Arguments to find a Passkey
     * @example
     * // Get one Passkey
     * const passkey = await prisma.passkey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasskeyFindUniqueOrThrowArgs>(args: SelectSubset<T, PasskeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passkey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyFindFirstArgs} args - Arguments to find a Passkey
     * @example
     * // Get one Passkey
     * const passkey = await prisma.passkey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasskeyFindFirstArgs>(args?: SelectSubset<T, PasskeyFindFirstArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passkey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyFindFirstOrThrowArgs} args - Arguments to find a Passkey
     * @example
     * // Get one Passkey
     * const passkey = await prisma.passkey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasskeyFindFirstOrThrowArgs>(args?: SelectSubset<T, PasskeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Passkeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passkeys
     * const passkeys = await prisma.passkey.findMany()
     * 
     * // Get first 10 Passkeys
     * const passkeys = await prisma.passkey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passkeyWithIdOnly = await prisma.passkey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasskeyFindManyArgs>(args?: SelectSubset<T, PasskeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Passkey.
     * @param {PasskeyCreateArgs} args - Arguments to create a Passkey.
     * @example
     * // Create one Passkey
     * const Passkey = await prisma.passkey.create({
     *   data: {
     *     // ... data to create a Passkey
     *   }
     * })
     * 
     */
    create<T extends PasskeyCreateArgs>(args: SelectSubset<T, PasskeyCreateArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Passkeys.
     * @param {PasskeyCreateManyArgs} args - Arguments to create many Passkeys.
     * @example
     * // Create many Passkeys
     * const passkey = await prisma.passkey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasskeyCreateManyArgs>(args?: SelectSubset<T, PasskeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Passkeys and returns the data saved in the database.
     * @param {PasskeyCreateManyAndReturnArgs} args - Arguments to create many Passkeys.
     * @example
     * // Create many Passkeys
     * const passkey = await prisma.passkey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Passkeys and only return the `id`
     * const passkeyWithIdOnly = await prisma.passkey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasskeyCreateManyAndReturnArgs>(args?: SelectSubset<T, PasskeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Passkey.
     * @param {PasskeyDeleteArgs} args - Arguments to delete one Passkey.
     * @example
     * // Delete one Passkey
     * const Passkey = await prisma.passkey.delete({
     *   where: {
     *     // ... filter to delete one Passkey
     *   }
     * })
     * 
     */
    delete<T extends PasskeyDeleteArgs>(args: SelectSubset<T, PasskeyDeleteArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Passkey.
     * @param {PasskeyUpdateArgs} args - Arguments to update one Passkey.
     * @example
     * // Update one Passkey
     * const passkey = await prisma.passkey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasskeyUpdateArgs>(args: SelectSubset<T, PasskeyUpdateArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Passkeys.
     * @param {PasskeyDeleteManyArgs} args - Arguments to filter Passkeys to delete.
     * @example
     * // Delete a few Passkeys
     * const { count } = await prisma.passkey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasskeyDeleteManyArgs>(args?: SelectSubset<T, PasskeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passkeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passkeys
     * const passkey = await prisma.passkey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasskeyUpdateManyArgs>(args: SelectSubset<T, PasskeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passkeys and returns the data updated in the database.
     * @param {PasskeyUpdateManyAndReturnArgs} args - Arguments to update many Passkeys.
     * @example
     * // Update many Passkeys
     * const passkey = await prisma.passkey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Passkeys and only return the `id`
     * const passkeyWithIdOnly = await prisma.passkey.updateManyAndReturn({
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
    updateManyAndReturn<T extends PasskeyUpdateManyAndReturnArgs>(args: SelectSubset<T, PasskeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Passkey.
     * @param {PasskeyUpsertArgs} args - Arguments to update or create a Passkey.
     * @example
     * // Update or create a Passkey
     * const passkey = await prisma.passkey.upsert({
     *   create: {
     *     // ... data to create a Passkey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Passkey we want to update
     *   }
     * })
     */
    upsert<T extends PasskeyUpsertArgs>(args: SelectSubset<T, PasskeyUpsertArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Passkeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyCountArgs} args - Arguments to filter Passkeys to count.
     * @example
     * // Count the number of Passkeys
     * const count = await prisma.passkey.count({
     *   where: {
     *     // ... the filter for the Passkeys we want to count
     *   }
     * })
    **/
    count<T extends PasskeyCountArgs>(
      args?: Subset<T, PasskeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasskeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Passkey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasskeyAggregateArgs>(args: Subset<T, PasskeyAggregateArgs>): Prisma.PrismaPromise<GetPasskeyAggregateType<T>>

    /**
     * Group by Passkey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyGroupByArgs} args - Group by arguments.
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
      T extends PasskeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasskeyGroupByArgs['orderBy'] }
        : { orderBy?: PasskeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasskeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasskeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Passkey model
   */
  readonly fields: PasskeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Passkey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasskeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Passkey model
   */
  interface PasskeyFieldRefs {
    readonly id: FieldRef<"Passkey", 'String'>
    readonly name: FieldRef<"Passkey", 'String'>
    readonly publicKey: FieldRef<"Passkey", 'String'>
    readonly userId: FieldRef<"Passkey", 'String'>
    readonly credentialID: FieldRef<"Passkey", 'String'>
    readonly counter: FieldRef<"Passkey", 'Int'>
    readonly deviceType: FieldRef<"Passkey", 'String'>
    readonly backedUp: FieldRef<"Passkey", 'Boolean'>
    readonly transports: FieldRef<"Passkey", 'String'>
    readonly createdAt: FieldRef<"Passkey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Passkey findUnique
   */
  export type PasskeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passkey
     */
    omit?: PasskeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * Filter, which Passkey to fetch.
     */
    where: PasskeyWhereUniqueInput
  }

  /**
   * Passkey findUniqueOrThrow
   */
  export type PasskeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passkey
     */
    omit?: PasskeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * Filter, which Passkey to fetch.
     */
    where: PasskeyWhereUniqueInput
  }

  /**
   * Passkey findFirst
   */
  export type PasskeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passkey
     */
    omit?: PasskeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * Filter, which Passkey to fetch.
     */
    where?: PasskeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passkeys to fetch.
     */
    orderBy?: PasskeyOrderByWithRelationInput | PasskeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passkeys.
     */
    cursor?: PasskeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passkeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passkeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passkeys.
     */
    distinct?: PasskeyScalarFieldEnum | PasskeyScalarFieldEnum[]
  }

  /**
   * Passkey findFirstOrThrow
   */
  export type PasskeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passkey
     */
    omit?: PasskeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * Filter, which Passkey to fetch.
     */
    where?: PasskeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passkeys to fetch.
     */
    orderBy?: PasskeyOrderByWithRelationInput | PasskeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passkeys.
     */
    cursor?: PasskeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passkeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passkeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passkeys.
     */
    distinct?: PasskeyScalarFieldEnum | PasskeyScalarFieldEnum[]
  }

  /**
   * Passkey findMany
   */
  export type PasskeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passkey
     */
    omit?: PasskeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * Filter, which Passkeys to fetch.
     */
    where?: PasskeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passkeys to fetch.
     */
    orderBy?: PasskeyOrderByWithRelationInput | PasskeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passkeys.
     */
    cursor?: PasskeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passkeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passkeys.
     */
    skip?: number
    distinct?: PasskeyScalarFieldEnum | PasskeyScalarFieldEnum[]
  }

  /**
   * Passkey create
   */
  export type PasskeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passkey
     */
    omit?: PasskeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * The data needed to create a Passkey.
     */
    data: XOR<PasskeyCreateInput, PasskeyUncheckedCreateInput>
  }

  /**
   * Passkey createMany
   */
  export type PasskeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Passkeys.
     */
    data: PasskeyCreateManyInput | PasskeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Passkey createManyAndReturn
   */
  export type PasskeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passkey
     */
    omit?: PasskeyOmit<ExtArgs> | null
    /**
     * The data used to create many Passkeys.
     */
    data: PasskeyCreateManyInput | PasskeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Passkey update
   */
  export type PasskeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passkey
     */
    omit?: PasskeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * The data needed to update a Passkey.
     */
    data: XOR<PasskeyUpdateInput, PasskeyUncheckedUpdateInput>
    /**
     * Choose, which Passkey to update.
     */
    where: PasskeyWhereUniqueInput
  }

  /**
   * Passkey updateMany
   */
  export type PasskeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Passkeys.
     */
    data: XOR<PasskeyUpdateManyMutationInput, PasskeyUncheckedUpdateManyInput>
    /**
     * Filter which Passkeys to update
     */
    where?: PasskeyWhereInput
    /**
     * Limit how many Passkeys to update.
     */
    limit?: number
  }

  /**
   * Passkey updateManyAndReturn
   */
  export type PasskeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passkey
     */
    omit?: PasskeyOmit<ExtArgs> | null
    /**
     * The data used to update Passkeys.
     */
    data: XOR<PasskeyUpdateManyMutationInput, PasskeyUncheckedUpdateManyInput>
    /**
     * Filter which Passkeys to update
     */
    where?: PasskeyWhereInput
    /**
     * Limit how many Passkeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Passkey upsert
   */
  export type PasskeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passkey
     */
    omit?: PasskeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * The filter to search for the Passkey to update in case it exists.
     */
    where: PasskeyWhereUniqueInput
    /**
     * In case the Passkey found by the `where` argument doesn't exist, create a new Passkey with this data.
     */
    create: XOR<PasskeyCreateInput, PasskeyUncheckedCreateInput>
    /**
     * In case the Passkey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasskeyUpdateInput, PasskeyUncheckedUpdateInput>
  }

  /**
   * Passkey delete
   */
  export type PasskeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passkey
     */
    omit?: PasskeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * Filter which Passkey to delete.
     */
    where: PasskeyWhereUniqueInput
  }

  /**
   * Passkey deleteMany
   */
  export type PasskeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passkeys to delete
     */
    where?: PasskeyWhereInput
    /**
     * Limit how many Passkeys to delete.
     */
    limit?: number
  }

  /**
   * Passkey without action
   */
  export type PasskeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passkey
     */
    omit?: PasskeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _avg: SettingAvgAggregateOutputType | null
    _sum: SettingSumAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingAvgAggregateOutputType = {
    id: number | null
  }

  export type SettingSumAggregateOutputType = {
    id: number | null
  }

  export type SettingMinAggregateOutputType = {
    id: number | null
    section: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SettingMaxAggregateOutputType = {
    id: number | null
    section: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SettingCountAggregateOutputType = {
    id: number
    section: number
    value: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SettingAvgAggregateInputType = {
    id?: true
  }

  export type SettingSumAggregateInputType = {
    id?: true
  }

  export type SettingMinAggregateInputType = {
    id?: true
    section?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SettingMaxAggregateInputType = {
    id?: true
    section?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SettingCountAggregateInputType = {
    id?: true
    section?: true
    value?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _avg?: SettingAvgAggregateInputType
    _sum?: SettingSumAggregateInputType
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    id: number
    section: string
    value: JsonValue
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: SettingCountAggregateOutputType | null
    _avg: SettingAvgAggregateOutputType | null
    _sum: SettingSumAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    section?: boolean
    value?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    section?: boolean
    value?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    section?: boolean
    value?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    id?: boolean
    section?: boolean
    value?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "section" | "value" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["setting"]>

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      section: string
      value: Prisma.JsonValue
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingWithIdOnly = await prisma.setting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.updateManyAndReturn({
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
    updateManyAndReturn<T extends SettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
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
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly id: FieldRef<"Setting", 'Int'>
    readonly section: FieldRef<"Setting", 'String'>
    readonly value: FieldRef<"Setting", 'Json'>
    readonly createdBy: FieldRef<"Setting", 'String'>
    readonly createdAt: FieldRef<"Setting", 'DateTime'>
    readonly updatedAt: FieldRef<"Setting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting updateManyAndReturn
   */
  export type SettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
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


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phoneNumber: 'phoneNumber',
    contactMethod: 'contactMethod',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    tourId: 'tourId'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    order: 'order',
    isActive: 'isActive',
    isOffice: 'isOffice',
    showOnService: 'showOnService',
    showOnEurope: 'showOnEurope',
    seo: 'seo',
    slug: 'slug',
    createdAt: 'createdAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const LocationAttributeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    order: 'order',
    seo: 'seo',
    locationId: 'locationId',
    createdAt: 'createdAt'
  };

  export type LocationAttributeScalarFieldEnum = (typeof LocationAttributeScalarFieldEnum)[keyof typeof LocationAttributeScalarFieldEnum]


  export const LocationTourScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    locationAttrId: 'locationAttrId',
    tourId: 'tourId',
    createdAt: 'createdAt'
  };

  export type LocationTourScalarFieldEnum = (typeof LocationTourScalarFieldEnum)[keyof typeof LocationTourScalarFieldEnum]


  export const OfficeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    contactNumber: 'contactNumber',
    email: 'email',
    logo: 'logo',
    slug: 'slug',
    currency: 'currency',
    bestTours: 'bestTours',
    primaryColor: 'primaryColor',
    secondaryColor: 'secondaryColor',
    thirdColor: 'thirdColor',
    bgPrimaryColor: 'bgPrimaryColor',
    bgSecondaryColor: 'bgSecondaryColor',
    primaryFont: 'primaryFont',
    socialMedia: 'socialMedia',
    seo: 'seo',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type OfficeScalarFieldEnum = (typeof OfficeScalarFieldEnum)[keyof typeof OfficeScalarFieldEnum]


  export const TourScalarFieldEnum: {
    id: 'id',
    name: 'name',
    numberOfDays: 'numberOfDays',
    code: 'code',
    slug: 'slug',
    images: 'images',
    seo: 'seo',
    isActive: 'isActive',
    isTicketIncluded: 'isTicketIncluded',
    startDay: 'startDay',
    priceSingle: 'priceSingle',
    priceDouble: 'priceDouble',
    priceSingleSa: 'priceSingleSa',
    priceDoubleSa: 'priceDoubleSa',
    priceSingleJo: 'priceSingleJo',
    priceDoubleJo: 'priceDoubleJo',
    tourPrices: 'tourPrices',
    tourCountries: 'tourCountries',
    tourHotels: 'tourHotels',
    tourIncludes: 'tourIncludes',
    tourExcludes: 'tourExcludes',
    tourSections: 'tourSections',
    airpotComing: 'airpotComing',
    airpotGoing: 'airpotGoing',
    additionalInfo: 'additionalInfo',
    additionalService: 'additionalService',
    externalFile: 'externalFile',
    typeId: 'typeId',
    createdAt: 'createdAt'
  };

  export type TourScalarFieldEnum = (typeof TourScalarFieldEnum)[keyof typeof TourScalarFieldEnum]


  export const TourTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    showOnService: 'showOnService',
    createdAt: 'createdAt',
    order: 'order'
  };

  export type TourTypeScalarFieldEnum = (typeof TourTypeScalarFieldEnum)[keyof typeof TourTypeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const PasskeyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    publicKey: 'publicKey',
    userId: 'userId',
    credentialID: 'credentialID',
    counter: 'counter',
    deviceType: 'deviceType',
    backedUp: 'backedUp',
    transports: 'transports',
    createdAt: 'createdAt'
  };

  export type PasskeyScalarFieldEnum = (typeof PasskeyScalarFieldEnum)[keyof typeof PasskeyScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    id: 'id',
    section: 'section',
    value: 'value',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    phoneNumber?: StringFilter<"Customer"> | string
    contactMethod?: StringFilter<"Customer"> | string
    status?: IntFilter<"Customer"> | number
    notes?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    tourId?: IntNullableFilter<"Customer"> | number | null
    tour?: XOR<TourNullableScalarRelationFilter, TourWhereInput> | null
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    contactMethod?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tourId?: SortOrderInput | SortOrder
    tour?: TourOrderByWithRelationInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    phoneNumber?: StringFilter<"Customer"> | string
    contactMethod?: StringFilter<"Customer"> | string
    status?: IntFilter<"Customer"> | number
    notes?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    tourId?: IntNullableFilter<"Customer"> | number | null
    tour?: XOR<TourNullableScalarRelationFilter, TourWhereInput> | null
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    contactMethod?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tourId?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    phoneNumber?: StringWithAggregatesFilter<"Customer"> | string
    contactMethod?: StringWithAggregatesFilter<"Customer"> | string
    status?: IntWithAggregatesFilter<"Customer"> | number
    notes?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    tourId?: IntNullableWithAggregatesFilter<"Customer"> | number | null
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    name?: StringFilter<"Location"> | string
    image?: JsonNullableFilter<"Location">
    order?: IntFilter<"Location"> | number
    isActive?: BoolNullableFilter<"Location"> | boolean | null
    isOffice?: BoolNullableFilter<"Location"> | boolean | null
    showOnService?: BoolFilter<"Location"> | boolean
    showOnEurope?: BoolFilter<"Location"> | boolean
    seo?: JsonNullableFilter<"Location">
    slug?: StringNullableFilter<"Location"> | string | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    attributes?: LocationAttributeListRelationFilter
    locationTours?: LocationTourListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    order?: SortOrder
    isActive?: SortOrderInput | SortOrder
    isOffice?: SortOrderInput | SortOrder
    showOnService?: SortOrder
    showOnEurope?: SortOrder
    seo?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    attributes?: LocationAttributeOrderByRelationAggregateInput
    locationTours?: LocationTourOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    name?: StringFilter<"Location"> | string
    image?: JsonNullableFilter<"Location">
    order?: IntFilter<"Location"> | number
    isActive?: BoolNullableFilter<"Location"> | boolean | null
    isOffice?: BoolNullableFilter<"Location"> | boolean | null
    showOnService?: BoolFilter<"Location"> | boolean
    showOnEurope?: BoolFilter<"Location"> | boolean
    seo?: JsonNullableFilter<"Location">
    slug?: StringNullableFilter<"Location"> | string | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    attributes?: LocationAttributeListRelationFilter
    locationTours?: LocationTourListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    order?: SortOrder
    isActive?: SortOrderInput | SortOrder
    isOffice?: SortOrderInput | SortOrder
    showOnService?: SortOrder
    showOnEurope?: SortOrder
    seo?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    name?: StringWithAggregatesFilter<"Location"> | string
    image?: JsonNullableWithAggregatesFilter<"Location">
    order?: IntWithAggregatesFilter<"Location"> | number
    isActive?: BoolNullableWithAggregatesFilter<"Location"> | boolean | null
    isOffice?: BoolNullableWithAggregatesFilter<"Location"> | boolean | null
    showOnService?: BoolWithAggregatesFilter<"Location"> | boolean
    showOnEurope?: BoolWithAggregatesFilter<"Location"> | boolean
    seo?: JsonNullableWithAggregatesFilter<"Location">
    slug?: StringNullableWithAggregatesFilter<"Location"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type LocationAttributeWhereInput = {
    AND?: LocationAttributeWhereInput | LocationAttributeWhereInput[]
    OR?: LocationAttributeWhereInput[]
    NOT?: LocationAttributeWhereInput | LocationAttributeWhereInput[]
    id?: IntFilter<"LocationAttribute"> | number
    title?: StringNullableFilter<"LocationAttribute"> | string | null
    order?: IntNullableFilter<"LocationAttribute"> | number | null
    seo?: JsonNullableFilter<"LocationAttribute">
    locationId?: IntNullableFilter<"LocationAttribute"> | number | null
    createdAt?: DateTimeFilter<"LocationAttribute"> | Date | string
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    locationTours?: LocationTourListRelationFilter
  }

  export type LocationAttributeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    seo?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    location?: LocationOrderByWithRelationInput
    locationTours?: LocationTourOrderByRelationAggregateInput
  }

  export type LocationAttributeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationAttributeWhereInput | LocationAttributeWhereInput[]
    OR?: LocationAttributeWhereInput[]
    NOT?: LocationAttributeWhereInput | LocationAttributeWhereInput[]
    title?: StringNullableFilter<"LocationAttribute"> | string | null
    order?: IntNullableFilter<"LocationAttribute"> | number | null
    seo?: JsonNullableFilter<"LocationAttribute">
    locationId?: IntNullableFilter<"LocationAttribute"> | number | null
    createdAt?: DateTimeFilter<"LocationAttribute"> | Date | string
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    locationTours?: LocationTourListRelationFilter
  }, "id">

  export type LocationAttributeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    seo?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LocationAttributeCountOrderByAggregateInput
    _avg?: LocationAttributeAvgOrderByAggregateInput
    _max?: LocationAttributeMaxOrderByAggregateInput
    _min?: LocationAttributeMinOrderByAggregateInput
    _sum?: LocationAttributeSumOrderByAggregateInput
  }

  export type LocationAttributeScalarWhereWithAggregatesInput = {
    AND?: LocationAttributeScalarWhereWithAggregatesInput | LocationAttributeScalarWhereWithAggregatesInput[]
    OR?: LocationAttributeScalarWhereWithAggregatesInput[]
    NOT?: LocationAttributeScalarWhereWithAggregatesInput | LocationAttributeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LocationAttribute"> | number
    title?: StringNullableWithAggregatesFilter<"LocationAttribute"> | string | null
    order?: IntNullableWithAggregatesFilter<"LocationAttribute"> | number | null
    seo?: JsonNullableWithAggregatesFilter<"LocationAttribute">
    locationId?: IntNullableWithAggregatesFilter<"LocationAttribute"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"LocationAttribute"> | Date | string
  }

  export type LocationTourWhereInput = {
    AND?: LocationTourWhereInput | LocationTourWhereInput[]
    OR?: LocationTourWhereInput[]
    NOT?: LocationTourWhereInput | LocationTourWhereInput[]
    id?: IntFilter<"LocationTour"> | number
    locationId?: IntFilter<"LocationTour"> | number
    locationAttrId?: IntFilter<"LocationTour"> | number
    tourId?: IntFilter<"LocationTour"> | number
    createdAt?: DateTimeFilter<"LocationTour"> | Date | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    locationAttr?: XOR<LocationAttributeScalarRelationFilter, LocationAttributeWhereInput>
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type LocationTourOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    locationAttrId?: SortOrder
    tourId?: SortOrder
    createdAt?: SortOrder
    location?: LocationOrderByWithRelationInput
    locationAttr?: LocationAttributeOrderByWithRelationInput
    tour?: TourOrderByWithRelationInput
  }

  export type LocationTourWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationTourWhereInput | LocationTourWhereInput[]
    OR?: LocationTourWhereInput[]
    NOT?: LocationTourWhereInput | LocationTourWhereInput[]
    locationId?: IntFilter<"LocationTour"> | number
    locationAttrId?: IntFilter<"LocationTour"> | number
    tourId?: IntFilter<"LocationTour"> | number
    createdAt?: DateTimeFilter<"LocationTour"> | Date | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    locationAttr?: XOR<LocationAttributeScalarRelationFilter, LocationAttributeWhereInput>
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "id">

  export type LocationTourOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    locationAttrId?: SortOrder
    tourId?: SortOrder
    createdAt?: SortOrder
    _count?: LocationTourCountOrderByAggregateInput
    _avg?: LocationTourAvgOrderByAggregateInput
    _max?: LocationTourMaxOrderByAggregateInput
    _min?: LocationTourMinOrderByAggregateInput
    _sum?: LocationTourSumOrderByAggregateInput
  }

  export type LocationTourScalarWhereWithAggregatesInput = {
    AND?: LocationTourScalarWhereWithAggregatesInput | LocationTourScalarWhereWithAggregatesInput[]
    OR?: LocationTourScalarWhereWithAggregatesInput[]
    NOT?: LocationTourScalarWhereWithAggregatesInput | LocationTourScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LocationTour"> | number
    locationId?: IntWithAggregatesFilter<"LocationTour"> | number
    locationAttrId?: IntWithAggregatesFilter<"LocationTour"> | number
    tourId?: IntWithAggregatesFilter<"LocationTour"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LocationTour"> | Date | string
  }

  export type OfficeWhereInput = {
    AND?: OfficeWhereInput | OfficeWhereInput[]
    OR?: OfficeWhereInput[]
    NOT?: OfficeWhereInput | OfficeWhereInput[]
    id?: IntFilter<"Office"> | number
    name?: StringNullableFilter<"Office"> | string | null
    address?: StringNullableFilter<"Office"> | string | null
    contactNumber?: StringNullableFilter<"Office"> | string | null
    email?: StringNullableFilter<"Office"> | string | null
    logo?: StringNullableFilter<"Office"> | string | null
    slug?: StringNullableFilter<"Office"> | string | null
    currency?: StringFilter<"Office"> | string
    bestTours?: IntNullableListFilter<"Office">
    primaryColor?: StringNullableFilter<"Office"> | string | null
    secondaryColor?: StringNullableFilter<"Office"> | string | null
    thirdColor?: StringNullableFilter<"Office"> | string | null
    bgPrimaryColor?: StringNullableFilter<"Office"> | string | null
    bgSecondaryColor?: StringNullableFilter<"Office"> | string | null
    primaryFont?: StringNullableFilter<"Office"> | string | null
    socialMedia?: JsonNullableListFilter<"Office">
    seo?: JsonNullableFilter<"Office">
    status?: BoolNullableFilter<"Office"> | boolean | null
    createdAt?: DateTimeFilter<"Office"> | Date | string
  }

  export type OfficeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    currency?: SortOrder
    bestTours?: SortOrder
    primaryColor?: SortOrderInput | SortOrder
    secondaryColor?: SortOrderInput | SortOrder
    thirdColor?: SortOrderInput | SortOrder
    bgPrimaryColor?: SortOrderInput | SortOrder
    bgSecondaryColor?: SortOrderInput | SortOrder
    primaryFont?: SortOrderInput | SortOrder
    socialMedia?: SortOrder
    seo?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type OfficeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OfficeWhereInput | OfficeWhereInput[]
    OR?: OfficeWhereInput[]
    NOT?: OfficeWhereInput | OfficeWhereInput[]
    name?: StringNullableFilter<"Office"> | string | null
    address?: StringNullableFilter<"Office"> | string | null
    contactNumber?: StringNullableFilter<"Office"> | string | null
    email?: StringNullableFilter<"Office"> | string | null
    logo?: StringNullableFilter<"Office"> | string | null
    slug?: StringNullableFilter<"Office"> | string | null
    currency?: StringFilter<"Office"> | string
    bestTours?: IntNullableListFilter<"Office">
    primaryColor?: StringNullableFilter<"Office"> | string | null
    secondaryColor?: StringNullableFilter<"Office"> | string | null
    thirdColor?: StringNullableFilter<"Office"> | string | null
    bgPrimaryColor?: StringNullableFilter<"Office"> | string | null
    bgSecondaryColor?: StringNullableFilter<"Office"> | string | null
    primaryFont?: StringNullableFilter<"Office"> | string | null
    socialMedia?: JsonNullableListFilter<"Office">
    seo?: JsonNullableFilter<"Office">
    status?: BoolNullableFilter<"Office"> | boolean | null
    createdAt?: DateTimeFilter<"Office"> | Date | string
  }, "id">

  export type OfficeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    currency?: SortOrder
    bestTours?: SortOrder
    primaryColor?: SortOrderInput | SortOrder
    secondaryColor?: SortOrderInput | SortOrder
    thirdColor?: SortOrderInput | SortOrder
    bgPrimaryColor?: SortOrderInput | SortOrder
    bgSecondaryColor?: SortOrderInput | SortOrder
    primaryFont?: SortOrderInput | SortOrder
    socialMedia?: SortOrder
    seo?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OfficeCountOrderByAggregateInput
    _avg?: OfficeAvgOrderByAggregateInput
    _max?: OfficeMaxOrderByAggregateInput
    _min?: OfficeMinOrderByAggregateInput
    _sum?: OfficeSumOrderByAggregateInput
  }

  export type OfficeScalarWhereWithAggregatesInput = {
    AND?: OfficeScalarWhereWithAggregatesInput | OfficeScalarWhereWithAggregatesInput[]
    OR?: OfficeScalarWhereWithAggregatesInput[]
    NOT?: OfficeScalarWhereWithAggregatesInput | OfficeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Office"> | number
    name?: StringNullableWithAggregatesFilter<"Office"> | string | null
    address?: StringNullableWithAggregatesFilter<"Office"> | string | null
    contactNumber?: StringNullableWithAggregatesFilter<"Office"> | string | null
    email?: StringNullableWithAggregatesFilter<"Office"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Office"> | string | null
    slug?: StringNullableWithAggregatesFilter<"Office"> | string | null
    currency?: StringWithAggregatesFilter<"Office"> | string
    bestTours?: IntNullableListFilter<"Office">
    primaryColor?: StringNullableWithAggregatesFilter<"Office"> | string | null
    secondaryColor?: StringNullableWithAggregatesFilter<"Office"> | string | null
    thirdColor?: StringNullableWithAggregatesFilter<"Office"> | string | null
    bgPrimaryColor?: StringNullableWithAggregatesFilter<"Office"> | string | null
    bgSecondaryColor?: StringNullableWithAggregatesFilter<"Office"> | string | null
    primaryFont?: StringNullableWithAggregatesFilter<"Office"> | string | null
    socialMedia?: JsonNullableListFilter<"Office">
    seo?: JsonNullableWithAggregatesFilter<"Office">
    status?: BoolNullableWithAggregatesFilter<"Office"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Office"> | Date | string
  }

  export type TourWhereInput = {
    AND?: TourWhereInput | TourWhereInput[]
    OR?: TourWhereInput[]
    NOT?: TourWhereInput | TourWhereInput[]
    id?: IntFilter<"Tour"> | number
    name?: StringFilter<"Tour"> | string
    numberOfDays?: IntFilter<"Tour"> | number
    code?: StringNullableFilter<"Tour"> | string | null
    slug?: StringNullableFilter<"Tour"> | string | null
    images?: StringNullableListFilter<"Tour">
    seo?: JsonNullableFilter<"Tour">
    isActive?: BoolNullableFilter<"Tour"> | boolean | null
    isTicketIncluded?: BoolNullableFilter<"Tour"> | boolean | null
    startDay?: StringNullableListFilter<"Tour">
    priceSingle?: FloatNullableFilter<"Tour"> | number | null
    priceDouble?: FloatNullableFilter<"Tour"> | number | null
    priceSingleSa?: FloatNullableFilter<"Tour"> | number | null
    priceDoubleSa?: FloatNullableFilter<"Tour"> | number | null
    priceSingleJo?: FloatNullableFilter<"Tour"> | number | null
    priceDoubleJo?: FloatNullableFilter<"Tour"> | number | null
    tourPrices?: JsonNullableListFilter<"Tour">
    tourCountries?: StringNullableListFilter<"Tour">
    tourHotels?: StringNullableListFilter<"Tour">
    tourIncludes?: JsonNullableListFilter<"Tour">
    tourExcludes?: JsonNullableListFilter<"Tour">
    tourSections?: JsonNullableListFilter<"Tour">
    airpotComing?: StringNullableFilter<"Tour"> | string | null
    airpotGoing?: StringNullableFilter<"Tour"> | string | null
    additionalInfo?: StringNullableFilter<"Tour"> | string | null
    additionalService?: JsonNullableListFilter<"Tour">
    externalFile?: JsonNullableFilter<"Tour">
    typeId?: IntNullableFilter<"Tour"> | number | null
    createdAt?: DateTimeFilter<"Tour"> | Date | string
    customers?: CustomerListRelationFilter
    tourType?: XOR<TourTypeNullableScalarRelationFilter, TourTypeWhereInput> | null
    locationTours?: LocationTourListRelationFilter
  }

  export type TourOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    numberOfDays?: SortOrder
    code?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    images?: SortOrder
    seo?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    isTicketIncluded?: SortOrderInput | SortOrder
    startDay?: SortOrder
    priceSingle?: SortOrderInput | SortOrder
    priceDouble?: SortOrderInput | SortOrder
    priceSingleSa?: SortOrderInput | SortOrder
    priceDoubleSa?: SortOrderInput | SortOrder
    priceSingleJo?: SortOrderInput | SortOrder
    priceDoubleJo?: SortOrderInput | SortOrder
    tourPrices?: SortOrder
    tourCountries?: SortOrder
    tourHotels?: SortOrder
    tourIncludes?: SortOrder
    tourExcludes?: SortOrder
    tourSections?: SortOrder
    airpotComing?: SortOrderInput | SortOrder
    airpotGoing?: SortOrderInput | SortOrder
    additionalInfo?: SortOrderInput | SortOrder
    additionalService?: SortOrder
    externalFile?: SortOrderInput | SortOrder
    typeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customers?: CustomerOrderByRelationAggregateInput
    tourType?: TourTypeOrderByWithRelationInput
    locationTours?: LocationTourOrderByRelationAggregateInput
  }

  export type TourWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TourWhereInput | TourWhereInput[]
    OR?: TourWhereInput[]
    NOT?: TourWhereInput | TourWhereInput[]
    name?: StringFilter<"Tour"> | string
    numberOfDays?: IntFilter<"Tour"> | number
    code?: StringNullableFilter<"Tour"> | string | null
    slug?: StringNullableFilter<"Tour"> | string | null
    images?: StringNullableListFilter<"Tour">
    seo?: JsonNullableFilter<"Tour">
    isActive?: BoolNullableFilter<"Tour"> | boolean | null
    isTicketIncluded?: BoolNullableFilter<"Tour"> | boolean | null
    startDay?: StringNullableListFilter<"Tour">
    priceSingle?: FloatNullableFilter<"Tour"> | number | null
    priceDouble?: FloatNullableFilter<"Tour"> | number | null
    priceSingleSa?: FloatNullableFilter<"Tour"> | number | null
    priceDoubleSa?: FloatNullableFilter<"Tour"> | number | null
    priceSingleJo?: FloatNullableFilter<"Tour"> | number | null
    priceDoubleJo?: FloatNullableFilter<"Tour"> | number | null
    tourPrices?: JsonNullableListFilter<"Tour">
    tourCountries?: StringNullableListFilter<"Tour">
    tourHotels?: StringNullableListFilter<"Tour">
    tourIncludes?: JsonNullableListFilter<"Tour">
    tourExcludes?: JsonNullableListFilter<"Tour">
    tourSections?: JsonNullableListFilter<"Tour">
    airpotComing?: StringNullableFilter<"Tour"> | string | null
    airpotGoing?: StringNullableFilter<"Tour"> | string | null
    additionalInfo?: StringNullableFilter<"Tour"> | string | null
    additionalService?: JsonNullableListFilter<"Tour">
    externalFile?: JsonNullableFilter<"Tour">
    typeId?: IntNullableFilter<"Tour"> | number | null
    createdAt?: DateTimeFilter<"Tour"> | Date | string
    customers?: CustomerListRelationFilter
    tourType?: XOR<TourTypeNullableScalarRelationFilter, TourTypeWhereInput> | null
    locationTours?: LocationTourListRelationFilter
  }, "id">

  export type TourOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    numberOfDays?: SortOrder
    code?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    images?: SortOrder
    seo?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    isTicketIncluded?: SortOrderInput | SortOrder
    startDay?: SortOrder
    priceSingle?: SortOrderInput | SortOrder
    priceDouble?: SortOrderInput | SortOrder
    priceSingleSa?: SortOrderInput | SortOrder
    priceDoubleSa?: SortOrderInput | SortOrder
    priceSingleJo?: SortOrderInput | SortOrder
    priceDoubleJo?: SortOrderInput | SortOrder
    tourPrices?: SortOrder
    tourCountries?: SortOrder
    tourHotels?: SortOrder
    tourIncludes?: SortOrder
    tourExcludes?: SortOrder
    tourSections?: SortOrder
    airpotComing?: SortOrderInput | SortOrder
    airpotGoing?: SortOrderInput | SortOrder
    additionalInfo?: SortOrderInput | SortOrder
    additionalService?: SortOrder
    externalFile?: SortOrderInput | SortOrder
    typeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TourCountOrderByAggregateInput
    _avg?: TourAvgOrderByAggregateInput
    _max?: TourMaxOrderByAggregateInput
    _min?: TourMinOrderByAggregateInput
    _sum?: TourSumOrderByAggregateInput
  }

  export type TourScalarWhereWithAggregatesInput = {
    AND?: TourScalarWhereWithAggregatesInput | TourScalarWhereWithAggregatesInput[]
    OR?: TourScalarWhereWithAggregatesInput[]
    NOT?: TourScalarWhereWithAggregatesInput | TourScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tour"> | number
    name?: StringWithAggregatesFilter<"Tour"> | string
    numberOfDays?: IntWithAggregatesFilter<"Tour"> | number
    code?: StringNullableWithAggregatesFilter<"Tour"> | string | null
    slug?: StringNullableWithAggregatesFilter<"Tour"> | string | null
    images?: StringNullableListFilter<"Tour">
    seo?: JsonNullableWithAggregatesFilter<"Tour">
    isActive?: BoolNullableWithAggregatesFilter<"Tour"> | boolean | null
    isTicketIncluded?: BoolNullableWithAggregatesFilter<"Tour"> | boolean | null
    startDay?: StringNullableListFilter<"Tour">
    priceSingle?: FloatNullableWithAggregatesFilter<"Tour"> | number | null
    priceDouble?: FloatNullableWithAggregatesFilter<"Tour"> | number | null
    priceSingleSa?: FloatNullableWithAggregatesFilter<"Tour"> | number | null
    priceDoubleSa?: FloatNullableWithAggregatesFilter<"Tour"> | number | null
    priceSingleJo?: FloatNullableWithAggregatesFilter<"Tour"> | number | null
    priceDoubleJo?: FloatNullableWithAggregatesFilter<"Tour"> | number | null
    tourPrices?: JsonNullableListFilter<"Tour">
    tourCountries?: StringNullableListFilter<"Tour">
    tourHotels?: StringNullableListFilter<"Tour">
    tourIncludes?: JsonNullableListFilter<"Tour">
    tourExcludes?: JsonNullableListFilter<"Tour">
    tourSections?: JsonNullableListFilter<"Tour">
    airpotComing?: StringNullableWithAggregatesFilter<"Tour"> | string | null
    airpotGoing?: StringNullableWithAggregatesFilter<"Tour"> | string | null
    additionalInfo?: StringNullableWithAggregatesFilter<"Tour"> | string | null
    additionalService?: JsonNullableListFilter<"Tour">
    externalFile?: JsonNullableWithAggregatesFilter<"Tour">
    typeId?: IntNullableWithAggregatesFilter<"Tour"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Tour"> | Date | string
  }

  export type TourTypeWhereInput = {
    AND?: TourTypeWhereInput | TourTypeWhereInput[]
    OR?: TourTypeWhereInput[]
    NOT?: TourTypeWhereInput | TourTypeWhereInput[]
    id?: IntFilter<"TourType"> | number
    name?: StringNullableFilter<"TourType"> | string | null
    image?: JsonFilter<"TourType">
    showOnService?: BoolFilter<"TourType"> | boolean
    createdAt?: DateTimeFilter<"TourType"> | Date | string
    order?: IntFilter<"TourType"> | number
    tours?: TourListRelationFilter
  }

  export type TourTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrder
    showOnService?: SortOrder
    createdAt?: SortOrder
    order?: SortOrder
    tours?: TourOrderByRelationAggregateInput
  }

  export type TourTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TourTypeWhereInput | TourTypeWhereInput[]
    OR?: TourTypeWhereInput[]
    NOT?: TourTypeWhereInput | TourTypeWhereInput[]
    name?: StringNullableFilter<"TourType"> | string | null
    image?: JsonFilter<"TourType">
    showOnService?: BoolFilter<"TourType"> | boolean
    createdAt?: DateTimeFilter<"TourType"> | Date | string
    order?: IntFilter<"TourType"> | number
    tours?: TourListRelationFilter
  }, "id">

  export type TourTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrder
    showOnService?: SortOrder
    createdAt?: SortOrder
    order?: SortOrder
    _count?: TourTypeCountOrderByAggregateInput
    _avg?: TourTypeAvgOrderByAggregateInput
    _max?: TourTypeMaxOrderByAggregateInput
    _min?: TourTypeMinOrderByAggregateInput
    _sum?: TourTypeSumOrderByAggregateInput
  }

  export type TourTypeScalarWhereWithAggregatesInput = {
    AND?: TourTypeScalarWhereWithAggregatesInput | TourTypeScalarWhereWithAggregatesInput[]
    OR?: TourTypeScalarWhereWithAggregatesInput[]
    NOT?: TourTypeScalarWhereWithAggregatesInput | TourTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TourType"> | number
    name?: StringNullableWithAggregatesFilter<"TourType"> | string | null
    image?: JsonWithAggregatesFilter<"TourType">
    showOnService?: BoolWithAggregatesFilter<"TourType"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TourType"> | Date | string
    order?: IntWithAggregatesFilter<"TourType"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    passkeys?: PasskeyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    passkeys?: PasskeyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    passkeys?: PasskeyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type PasskeyWhereInput = {
    AND?: PasskeyWhereInput | PasskeyWhereInput[]
    OR?: PasskeyWhereInput[]
    NOT?: PasskeyWhereInput | PasskeyWhereInput[]
    id?: StringFilter<"Passkey"> | string
    name?: StringNullableFilter<"Passkey"> | string | null
    publicKey?: StringFilter<"Passkey"> | string
    userId?: StringFilter<"Passkey"> | string
    credentialID?: StringFilter<"Passkey"> | string
    counter?: IntFilter<"Passkey"> | number
    deviceType?: StringFilter<"Passkey"> | string
    backedUp?: BoolFilter<"Passkey"> | boolean
    transports?: StringNullableFilter<"Passkey"> | string | null
    createdAt?: DateTimeNullableFilter<"Passkey"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasskeyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    publicKey?: SortOrder
    userId?: SortOrder
    credentialID?: SortOrder
    counter?: SortOrder
    deviceType?: SortOrder
    backedUp?: SortOrder
    transports?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasskeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PasskeyWhereInput | PasskeyWhereInput[]
    OR?: PasskeyWhereInput[]
    NOT?: PasskeyWhereInput | PasskeyWhereInput[]
    name?: StringNullableFilter<"Passkey"> | string | null
    publicKey?: StringFilter<"Passkey"> | string
    userId?: StringFilter<"Passkey"> | string
    credentialID?: StringFilter<"Passkey"> | string
    counter?: IntFilter<"Passkey"> | number
    deviceType?: StringFilter<"Passkey"> | string
    backedUp?: BoolFilter<"Passkey"> | boolean
    transports?: StringNullableFilter<"Passkey"> | string | null
    createdAt?: DateTimeNullableFilter<"Passkey"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PasskeyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    publicKey?: SortOrder
    userId?: SortOrder
    credentialID?: SortOrder
    counter?: SortOrder
    deviceType?: SortOrder
    backedUp?: SortOrder
    transports?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: PasskeyCountOrderByAggregateInput
    _avg?: PasskeyAvgOrderByAggregateInput
    _max?: PasskeyMaxOrderByAggregateInput
    _min?: PasskeyMinOrderByAggregateInput
    _sum?: PasskeySumOrderByAggregateInput
  }

  export type PasskeyScalarWhereWithAggregatesInput = {
    AND?: PasskeyScalarWhereWithAggregatesInput | PasskeyScalarWhereWithAggregatesInput[]
    OR?: PasskeyScalarWhereWithAggregatesInput[]
    NOT?: PasskeyScalarWhereWithAggregatesInput | PasskeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Passkey"> | string
    name?: StringNullableWithAggregatesFilter<"Passkey"> | string | null
    publicKey?: StringWithAggregatesFilter<"Passkey"> | string
    userId?: StringWithAggregatesFilter<"Passkey"> | string
    credentialID?: StringWithAggregatesFilter<"Passkey"> | string
    counter?: IntWithAggregatesFilter<"Passkey"> | number
    deviceType?: StringWithAggregatesFilter<"Passkey"> | string
    backedUp?: BoolWithAggregatesFilter<"Passkey"> | boolean
    transports?: StringNullableWithAggregatesFilter<"Passkey"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Passkey"> | Date | string | null
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    id?: IntFilter<"Setting"> | number
    section?: StringFilter<"Setting"> | string
    value?: JsonFilter<"Setting">
    createdBy?: StringFilter<"Setting"> | string
    createdAt?: DateTimeFilter<"Setting"> | Date | string
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
  }

  export type SettingOrderByWithRelationInput = {
    id?: SortOrder
    section?: SortOrder
    value?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    section?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    value?: JsonFilter<"Setting">
    createdBy?: StringFilter<"Setting"> | string
    createdAt?: DateTimeFilter<"Setting"> | Date | string
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
  }, "id" | "section">

  export type SettingOrderByWithAggregationInput = {
    id?: SortOrder
    section?: SortOrder
    value?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _avg?: SettingAvgOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
    _sum?: SettingSumOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Setting"> | number
    section?: StringWithAggregatesFilter<"Setting"> | string
    value?: JsonWithAggregatesFilter<"Setting">
    createdBy?: StringWithAggregatesFilter<"Setting"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Setting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Setting"> | Date | string
  }

  export type CustomerCreateInput = {
    name: string
    phoneNumber: string
    contactMethod: string
    status: number
    notes?: string | null
    createdAt?: Date | string
    tour?: TourCreateNestedOneWithoutCustomersInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    phoneNumber: string
    contactMethod: string
    status: number
    notes?: string | null
    createdAt?: Date | string
    tourId?: number | null
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    contactMethod?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tour?: TourUpdateOneWithoutCustomersNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    contactMethod?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    phoneNumber: string
    contactMethod: string
    status: number
    notes?: string | null
    createdAt?: Date | string
    tourId?: number | null
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    contactMethod?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    contactMethod?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LocationCreateInput = {
    name: string
    image?: NullableJsonNullValueInput | InputJsonValue
    order?: number
    isActive?: boolean | null
    isOffice?: boolean | null
    showOnService?: boolean
    showOnEurope?: boolean
    seo?: NullableJsonNullValueInput | InputJsonValue
    slug?: string | null
    createdAt?: Date | string
    attributes?: LocationAttributeCreateNestedManyWithoutLocationInput
    locationTours?: LocationTourCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    name: string
    image?: NullableJsonNullValueInput | InputJsonValue
    order?: number
    isActive?: boolean | null
    isOffice?: boolean | null
    showOnService?: boolean
    showOnEurope?: boolean
    seo?: NullableJsonNullValueInput | InputJsonValue
    slug?: string | null
    createdAt?: Date | string
    attributes?: LocationAttributeUncheckedCreateNestedManyWithoutLocationInput
    locationTours?: LocationTourUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isOffice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    showOnService?: BoolFieldUpdateOperationsInput | boolean
    showOnEurope?: BoolFieldUpdateOperationsInput | boolean
    seo?: NullableJsonNullValueInput | InputJsonValue
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: LocationAttributeUpdateManyWithoutLocationNestedInput
    locationTours?: LocationTourUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isOffice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    showOnService?: BoolFieldUpdateOperationsInput | boolean
    showOnEurope?: BoolFieldUpdateOperationsInput | boolean
    seo?: NullableJsonNullValueInput | InputJsonValue
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: LocationAttributeUncheckedUpdateManyWithoutLocationNestedInput
    locationTours?: LocationTourUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: number
    name: string
    image?: NullableJsonNullValueInput | InputJsonValue
    order?: number
    isActive?: boolean | null
    isOffice?: boolean | null
    showOnService?: boolean
    showOnEurope?: boolean
    seo?: NullableJsonNullValueInput | InputJsonValue
    slug?: string | null
    createdAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isOffice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    showOnService?: BoolFieldUpdateOperationsInput | boolean
    showOnEurope?: BoolFieldUpdateOperationsInput | boolean
    seo?: NullableJsonNullValueInput | InputJsonValue
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isOffice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    showOnService?: BoolFieldUpdateOperationsInput | boolean
    showOnEurope?: BoolFieldUpdateOperationsInput | boolean
    seo?: NullableJsonNullValueInput | InputJsonValue
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationAttributeCreateInput = {
    title?: string | null
    order?: number | null
    seo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    location?: LocationCreateNestedOneWithoutAttributesInput
    locationTours?: LocationTourCreateNestedManyWithoutLocationAttrInput
  }

  export type LocationAttributeUncheckedCreateInput = {
    id?: number
    title?: string | null
    order?: number | null
    seo?: NullableJsonNullValueInput | InputJsonValue
    locationId?: number | null
    createdAt?: Date | string
    locationTours?: LocationTourUncheckedCreateNestedManyWithoutLocationAttrInput
  }

  export type LocationAttributeUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    seo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneWithoutAttributesNestedInput
    locationTours?: LocationTourUpdateManyWithoutLocationAttrNestedInput
  }

  export type LocationAttributeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    seo?: NullableJsonNullValueInput | InputJsonValue
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationTours?: LocationTourUncheckedUpdateManyWithoutLocationAttrNestedInput
  }

  export type LocationAttributeCreateManyInput = {
    id?: number
    title?: string | null
    order?: number | null
    seo?: NullableJsonNullValueInput | InputJsonValue
    locationId?: number | null
    createdAt?: Date | string
  }

  export type LocationAttributeUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    seo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationAttributeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    seo?: NullableJsonNullValueInput | InputJsonValue
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationTourCreateInput = {
    createdAt?: Date | string
    location: LocationCreateNestedOneWithoutLocationToursInput
    locationAttr: LocationAttributeCreateNestedOneWithoutLocationToursInput
    tour: TourCreateNestedOneWithoutLocationToursInput
  }

  export type LocationTourUncheckedCreateInput = {
    id?: number
    locationId: number
    locationAttrId: number
    tourId: number
    createdAt?: Date | string
  }

  export type LocationTourUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutLocationToursNestedInput
    locationAttr?: LocationAttributeUpdateOneRequiredWithoutLocationToursNestedInput
    tour?: TourUpdateOneRequiredWithoutLocationToursNestedInput
  }

  export type LocationTourUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    locationAttrId?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationTourCreateManyInput = {
    id?: number
    locationId: number
    locationAttrId: number
    tourId: number
    createdAt?: Date | string
  }

  export type LocationTourUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationTourUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    locationAttrId?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeCreateInput = {
    name?: string | null
    address?: string | null
    contactNumber?: string | null
    email?: string | null
    logo?: string | null
    slug?: string | null
    currency: string
    bestTours?: OfficeCreatebestToursInput | number[]
    primaryColor?: string | null
    secondaryColor?: string | null
    thirdColor?: string | null
    bgPrimaryColor?: string | null
    bgSecondaryColor?: string | null
    primaryFont?: string | null
    socialMedia?: OfficeCreatesocialMediaInput | InputJsonValue[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    status?: boolean | null
    createdAt?: Date | string
  }

  export type OfficeUncheckedCreateInput = {
    id?: number
    name?: string | null
    address?: string | null
    contactNumber?: string | null
    email?: string | null
    logo?: string | null
    slug?: string | null
    currency: string
    bestTours?: OfficeCreatebestToursInput | number[]
    primaryColor?: string | null
    secondaryColor?: string | null
    thirdColor?: string | null
    bgPrimaryColor?: string | null
    bgSecondaryColor?: string | null
    primaryFont?: string | null
    socialMedia?: OfficeCreatesocialMediaInput | InputJsonValue[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    status?: boolean | null
    createdAt?: Date | string
  }

  export type OfficeUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    bestTours?: OfficeUpdatebestToursInput | number[]
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    thirdColor?: NullableStringFieldUpdateOperationsInput | string | null
    bgPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    bgSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    primaryFont?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: OfficeUpdatesocialMediaInput | InputJsonValue[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    bestTours?: OfficeUpdatebestToursInput | number[]
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    thirdColor?: NullableStringFieldUpdateOperationsInput | string | null
    bgPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    bgSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    primaryFont?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: OfficeUpdatesocialMediaInput | InputJsonValue[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeCreateManyInput = {
    id?: number
    name?: string | null
    address?: string | null
    contactNumber?: string | null
    email?: string | null
    logo?: string | null
    slug?: string | null
    currency: string
    bestTours?: OfficeCreatebestToursInput | number[]
    primaryColor?: string | null
    secondaryColor?: string | null
    thirdColor?: string | null
    bgPrimaryColor?: string | null
    bgSecondaryColor?: string | null
    primaryFont?: string | null
    socialMedia?: OfficeCreatesocialMediaInput | InputJsonValue[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    status?: boolean | null
    createdAt?: Date | string
  }

  export type OfficeUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    bestTours?: OfficeUpdatebestToursInput | number[]
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    thirdColor?: NullableStringFieldUpdateOperationsInput | string | null
    bgPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    bgSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    primaryFont?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: OfficeUpdatesocialMediaInput | InputJsonValue[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    bestTours?: OfficeUpdatebestToursInput | number[]
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    thirdColor?: NullableStringFieldUpdateOperationsInput | string | null
    bgPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    bgSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    primaryFont?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: OfficeUpdatesocialMediaInput | InputJsonValue[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourCreateInput = {
    name: string
    numberOfDays: number
    code?: string | null
    slug?: string | null
    images?: TourCreateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean | null
    isTicketIncluded?: boolean | null
    startDay?: TourCreatestartDayInput | string[]
    priceSingle?: number | null
    priceDouble?: number | null
    priceSingleSa?: number | null
    priceDoubleSa?: number | null
    priceSingleJo?: number | null
    priceDoubleJo?: number | null
    tourPrices?: TourCreatetourPricesInput | InputJsonValue[]
    tourCountries?: TourCreatetourCountriesInput | string[]
    tourHotels?: TourCreatetourHotelsInput | string[]
    tourIncludes?: TourCreatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourCreatetourExcludesInput | InputJsonValue[]
    tourSections?: TourCreatetourSectionsInput | InputJsonValue[]
    airpotComing?: string | null
    airpotGoing?: string | null
    additionalInfo?: string | null
    additionalService?: TourCreateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    customers?: CustomerCreateNestedManyWithoutTourInput
    tourType?: TourTypeCreateNestedOneWithoutToursInput
    locationTours?: LocationTourCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateInput = {
    id?: number
    name: string
    numberOfDays: number
    code?: string | null
    slug?: string | null
    images?: TourCreateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean | null
    isTicketIncluded?: boolean | null
    startDay?: TourCreatestartDayInput | string[]
    priceSingle?: number | null
    priceDouble?: number | null
    priceSingleSa?: number | null
    priceDoubleSa?: number | null
    priceSingleJo?: number | null
    priceDoubleJo?: number | null
    tourPrices?: TourCreatetourPricesInput | InputJsonValue[]
    tourCountries?: TourCreatetourCountriesInput | string[]
    tourHotels?: TourCreatetourHotelsInput | string[]
    tourIncludes?: TourCreatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourCreatetourExcludesInput | InputJsonValue[]
    tourSections?: TourCreatetourSectionsInput | InputJsonValue[]
    airpotComing?: string | null
    airpotGoing?: string | null
    additionalInfo?: string | null
    additionalService?: TourCreateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    typeId?: number | null
    createdAt?: Date | string
    customers?: CustomerUncheckedCreateNestedManyWithoutTourInput
    locationTours?: LocationTourUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    numberOfDays?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    images?: TourUpdateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTicketIncluded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDay?: TourUpdatestartDayInput | string[]
    priceSingle?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDouble?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    tourPrices?: TourUpdatetourPricesInput | InputJsonValue[]
    tourCountries?: TourUpdatetourCountriesInput | string[]
    tourHotels?: TourUpdatetourHotelsInput | string[]
    tourIncludes?: TourUpdatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourUpdatetourExcludesInput | InputJsonValue[]
    tourSections?: TourUpdatetourSectionsInput | InputJsonValue[]
    airpotComing?: NullableStringFieldUpdateOperationsInput | string | null
    airpotGoing?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    additionalService?: TourUpdateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUpdateManyWithoutTourNestedInput
    tourType?: TourTypeUpdateOneWithoutToursNestedInput
    locationTours?: LocationTourUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    numberOfDays?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    images?: TourUpdateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTicketIncluded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDay?: TourUpdatestartDayInput | string[]
    priceSingle?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDouble?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    tourPrices?: TourUpdatetourPricesInput | InputJsonValue[]
    tourCountries?: TourUpdatetourCountriesInput | string[]
    tourHotels?: TourUpdatetourHotelsInput | string[]
    tourIncludes?: TourUpdatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourUpdatetourExcludesInput | InputJsonValue[]
    tourSections?: TourUpdatetourSectionsInput | InputJsonValue[]
    airpotComing?: NullableStringFieldUpdateOperationsInput | string | null
    airpotGoing?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    additionalService?: TourUpdateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUncheckedUpdateManyWithoutTourNestedInput
    locationTours?: LocationTourUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourCreateManyInput = {
    id?: number
    name: string
    numberOfDays: number
    code?: string | null
    slug?: string | null
    images?: TourCreateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean | null
    isTicketIncluded?: boolean | null
    startDay?: TourCreatestartDayInput | string[]
    priceSingle?: number | null
    priceDouble?: number | null
    priceSingleSa?: number | null
    priceDoubleSa?: number | null
    priceSingleJo?: number | null
    priceDoubleJo?: number | null
    tourPrices?: TourCreatetourPricesInput | InputJsonValue[]
    tourCountries?: TourCreatetourCountriesInput | string[]
    tourHotels?: TourCreatetourHotelsInput | string[]
    tourIncludes?: TourCreatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourCreatetourExcludesInput | InputJsonValue[]
    tourSections?: TourCreatetourSectionsInput | InputJsonValue[]
    airpotComing?: string | null
    airpotGoing?: string | null
    additionalInfo?: string | null
    additionalService?: TourCreateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    typeId?: number | null
    createdAt?: Date | string
  }

  export type TourUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    numberOfDays?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    images?: TourUpdateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTicketIncluded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDay?: TourUpdatestartDayInput | string[]
    priceSingle?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDouble?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    tourPrices?: TourUpdatetourPricesInput | InputJsonValue[]
    tourCountries?: TourUpdatetourCountriesInput | string[]
    tourHotels?: TourUpdatetourHotelsInput | string[]
    tourIncludes?: TourUpdatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourUpdatetourExcludesInput | InputJsonValue[]
    tourSections?: TourUpdatetourSectionsInput | InputJsonValue[]
    airpotComing?: NullableStringFieldUpdateOperationsInput | string | null
    airpotGoing?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    additionalService?: TourUpdateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    numberOfDays?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    images?: TourUpdateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTicketIncluded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDay?: TourUpdatestartDayInput | string[]
    priceSingle?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDouble?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    tourPrices?: TourUpdatetourPricesInput | InputJsonValue[]
    tourCountries?: TourUpdatetourCountriesInput | string[]
    tourHotels?: TourUpdatetourHotelsInput | string[]
    tourIncludes?: TourUpdatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourUpdatetourExcludesInput | InputJsonValue[]
    tourSections?: TourUpdatetourSectionsInput | InputJsonValue[]
    airpotComing?: NullableStringFieldUpdateOperationsInput | string | null
    airpotGoing?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    additionalService?: TourUpdateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourTypeCreateInput = {
    name?: string | null
    image?: JsonNullValueInput | InputJsonValue
    showOnService?: boolean
    createdAt?: Date | string
    order?: number
    tours?: TourCreateNestedManyWithoutTourTypeInput
  }

  export type TourTypeUncheckedCreateInput = {
    id?: number
    name?: string | null
    image?: JsonNullValueInput | InputJsonValue
    showOnService?: boolean
    createdAt?: Date | string
    order?: number
    tours?: TourUncheckedCreateNestedManyWithoutTourTypeInput
  }

  export type TourTypeUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: JsonNullValueInput | InputJsonValue
    showOnService?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    tours?: TourUpdateManyWithoutTourTypeNestedInput
  }

  export type TourTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: JsonNullValueInput | InputJsonValue
    showOnService?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    tours?: TourUncheckedUpdateManyWithoutTourTypeNestedInput
  }

  export type TourTypeCreateManyInput = {
    id?: number
    name?: string | null
    image?: JsonNullValueInput | InputJsonValue
    showOnService?: boolean
    createdAt?: Date | string
    order?: number
  }

  export type TourTypeUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: JsonNullValueInput | InputJsonValue
    showOnService?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: JsonNullValueInput | InputJsonValue
    showOnService?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    passkeys?: PasskeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    passkeys?: PasskeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasskeyCreateInput = {
    id: string
    name?: string | null
    publicKey: string
    credentialID: string
    counter: number
    deviceType: string
    backedUp: boolean
    transports?: string | null
    createdAt?: Date | string | null
    user: UserCreateNestedOneWithoutPasskeysInput
  }

  export type PasskeyUncheckedCreateInput = {
    id: string
    name?: string | null
    publicKey: string
    userId: string
    credentialID: string
    counter: number
    deviceType: string
    backedUp: boolean
    transports?: string | null
    createdAt?: Date | string | null
  }

  export type PasskeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: StringFieldUpdateOperationsInput | string
    credentialID?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    backedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutPasskeysNestedInput
  }

  export type PasskeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    credentialID?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    backedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasskeyCreateManyInput = {
    id: string
    name?: string | null
    publicKey: string
    userId: string
    credentialID: string
    counter: number
    deviceType: string
    backedUp: boolean
    transports?: string | null
    createdAt?: Date | string | null
  }

  export type PasskeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: StringFieldUpdateOperationsInput | string
    credentialID?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    backedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasskeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    credentialID?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    backedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SettingCreateInput = {
    section: string
    value: JsonNullValueInput | InputJsonValue
    createdBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingUncheckedCreateInput = {
    id?: number
    section: string
    value: JsonNullValueInput | InputJsonValue
    createdBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingUpdateInput = {
    section?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    section?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingCreateManyInput = {
    id?: number
    section: string
    value: JsonNullValueInput | InputJsonValue
    createdBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingUpdateManyMutationInput = {
    section?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    section?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TourNullableScalarRelationFilter = {
    is?: TourWhereInput | null
    isNot?: TourWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    contactMethod?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    tourId?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tourId?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    contactMethod?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    tourId?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    contactMethod?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    tourId?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tourId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LocationAttributeListRelationFilter = {
    every?: LocationAttributeWhereInput
    some?: LocationAttributeWhereInput
    none?: LocationAttributeWhereInput
  }

  export type LocationTourListRelationFilter = {
    every?: LocationTourWhereInput
    some?: LocationTourWhereInput
    none?: LocationTourWhereInput
  }

  export type LocationAttributeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationTourOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    isOffice?: SortOrder
    showOnService?: SortOrder
    showOnEurope?: SortOrder
    seo?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    isOffice?: SortOrder
    showOnService?: SortOrder
    showOnEurope?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    isOffice?: SortOrder
    showOnService?: SortOrder
    showOnEurope?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LocationNullableScalarRelationFilter = {
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
  }

  export type LocationAttributeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    order?: SortOrder
    seo?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationAttributeAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    locationId?: SortOrder
  }

  export type LocationAttributeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    order?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationAttributeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    order?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationAttributeSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    locationId?: SortOrder
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type LocationAttributeScalarRelationFilter = {
    is?: LocationAttributeWhereInput
    isNot?: LocationAttributeWhereInput
  }

  export type TourScalarRelationFilter = {
    is?: TourWhereInput
    isNot?: TourWhereInput
  }

  export type LocationTourCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    locationAttrId?: SortOrder
    tourId?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationTourAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    locationAttrId?: SortOrder
    tourId?: SortOrder
  }

  export type LocationTourMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    locationAttrId?: SortOrder
    tourId?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationTourMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    locationAttrId?: SortOrder
    tourId?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationTourSumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    locationAttrId?: SortOrder
    tourId?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type OfficeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    logo?: SortOrder
    slug?: SortOrder
    currency?: SortOrder
    bestTours?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    thirdColor?: SortOrder
    bgPrimaryColor?: SortOrder
    bgSecondaryColor?: SortOrder
    primaryFont?: SortOrder
    socialMedia?: SortOrder
    seo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OfficeAvgOrderByAggregateInput = {
    id?: SortOrder
    bestTours?: SortOrder
  }

  export type OfficeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    logo?: SortOrder
    slug?: SortOrder
    currency?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    thirdColor?: SortOrder
    bgPrimaryColor?: SortOrder
    bgSecondaryColor?: SortOrder
    primaryFont?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OfficeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    logo?: SortOrder
    slug?: SortOrder
    currency?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    thirdColor?: SortOrder
    bgPrimaryColor?: SortOrder
    bgSecondaryColor?: SortOrder
    primaryFont?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OfficeSumOrderByAggregateInput = {
    id?: SortOrder
    bestTours?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type TourTypeNullableScalarRelationFilter = {
    is?: TourTypeWhereInput | null
    isNot?: TourTypeWhereInput | null
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    numberOfDays?: SortOrder
    code?: SortOrder
    slug?: SortOrder
    images?: SortOrder
    seo?: SortOrder
    isActive?: SortOrder
    isTicketIncluded?: SortOrder
    startDay?: SortOrder
    priceSingle?: SortOrder
    priceDouble?: SortOrder
    priceSingleSa?: SortOrder
    priceDoubleSa?: SortOrder
    priceSingleJo?: SortOrder
    priceDoubleJo?: SortOrder
    tourPrices?: SortOrder
    tourCountries?: SortOrder
    tourHotels?: SortOrder
    tourIncludes?: SortOrder
    tourExcludes?: SortOrder
    tourSections?: SortOrder
    airpotComing?: SortOrder
    airpotGoing?: SortOrder
    additionalInfo?: SortOrder
    additionalService?: SortOrder
    externalFile?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
  }

  export type TourAvgOrderByAggregateInput = {
    id?: SortOrder
    numberOfDays?: SortOrder
    priceSingle?: SortOrder
    priceDouble?: SortOrder
    priceSingleSa?: SortOrder
    priceDoubleSa?: SortOrder
    priceSingleJo?: SortOrder
    priceDoubleJo?: SortOrder
    typeId?: SortOrder
  }

  export type TourMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    numberOfDays?: SortOrder
    code?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    isTicketIncluded?: SortOrder
    priceSingle?: SortOrder
    priceDouble?: SortOrder
    priceSingleSa?: SortOrder
    priceDoubleSa?: SortOrder
    priceSingleJo?: SortOrder
    priceDoubleJo?: SortOrder
    airpotComing?: SortOrder
    airpotGoing?: SortOrder
    additionalInfo?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
  }

  export type TourMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    numberOfDays?: SortOrder
    code?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    isTicketIncluded?: SortOrder
    priceSingle?: SortOrder
    priceDouble?: SortOrder
    priceSingleSa?: SortOrder
    priceDoubleSa?: SortOrder
    priceSingleJo?: SortOrder
    priceDoubleJo?: SortOrder
    airpotComing?: SortOrder
    airpotGoing?: SortOrder
    additionalInfo?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
  }

  export type TourSumOrderByAggregateInput = {
    id?: SortOrder
    numberOfDays?: SortOrder
    priceSingle?: SortOrder
    priceDouble?: SortOrder
    priceSingleSa?: SortOrder
    priceDoubleSa?: SortOrder
    priceSingleJo?: SortOrder
    priceDoubleJo?: SortOrder
    typeId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TourListRelationFilter = {
    every?: TourWhereInput
    some?: TourWhereInput
    none?: TourWhereInput
  }

  export type TourOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    showOnService?: SortOrder
    createdAt?: SortOrder
    order?: SortOrder
  }

  export type TourTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type TourTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    showOnService?: SortOrder
    createdAt?: SortOrder
    order?: SortOrder
  }

  export type TourTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    showOnService?: SortOrder
    createdAt?: SortOrder
    order?: SortOrder
  }

  export type TourTypeSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type PasskeyListRelationFilter = {
    every?: PasskeyWhereInput
    some?: PasskeyWhereInput
    none?: PasskeyWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasskeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PasskeyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    publicKey?: SortOrder
    userId?: SortOrder
    credentialID?: SortOrder
    counter?: SortOrder
    deviceType?: SortOrder
    backedUp?: SortOrder
    transports?: SortOrder
    createdAt?: SortOrder
  }

  export type PasskeyAvgOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type PasskeyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    publicKey?: SortOrder
    userId?: SortOrder
    credentialID?: SortOrder
    counter?: SortOrder
    deviceType?: SortOrder
    backedUp?: SortOrder
    transports?: SortOrder
    createdAt?: SortOrder
  }

  export type PasskeyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    publicKey?: SortOrder
    userId?: SortOrder
    credentialID?: SortOrder
    counter?: SortOrder
    deviceType?: SortOrder
    backedUp?: SortOrder
    transports?: SortOrder
    createdAt?: SortOrder
  }

  export type PasskeySumOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type SettingCountOrderByAggregateInput = {
    id?: SortOrder
    section?: SortOrder
    value?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    id?: SortOrder
    section?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    id?: SortOrder
    section?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TourCreateNestedOneWithoutCustomersInput = {
    create?: XOR<TourCreateWithoutCustomersInput, TourUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: TourCreateOrConnectWithoutCustomersInput
    connect?: TourWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TourUpdateOneWithoutCustomersNestedInput = {
    create?: XOR<TourCreateWithoutCustomersInput, TourUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: TourCreateOrConnectWithoutCustomersInput
    upsert?: TourUpsertWithoutCustomersInput
    disconnect?: TourWhereInput | boolean
    delete?: TourWhereInput | boolean
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutCustomersInput, TourUpdateWithoutCustomersInput>, TourUncheckedUpdateWithoutCustomersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocationAttributeCreateNestedManyWithoutLocationInput = {
    create?: XOR<LocationAttributeCreateWithoutLocationInput, LocationAttributeUncheckedCreateWithoutLocationInput> | LocationAttributeCreateWithoutLocationInput[] | LocationAttributeUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LocationAttributeCreateOrConnectWithoutLocationInput | LocationAttributeCreateOrConnectWithoutLocationInput[]
    createMany?: LocationAttributeCreateManyLocationInputEnvelope
    connect?: LocationAttributeWhereUniqueInput | LocationAttributeWhereUniqueInput[]
  }

  export type LocationTourCreateNestedManyWithoutLocationInput = {
    create?: XOR<LocationTourCreateWithoutLocationInput, LocationTourUncheckedCreateWithoutLocationInput> | LocationTourCreateWithoutLocationInput[] | LocationTourUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LocationTourCreateOrConnectWithoutLocationInput | LocationTourCreateOrConnectWithoutLocationInput[]
    createMany?: LocationTourCreateManyLocationInputEnvelope
    connect?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
  }

  export type LocationAttributeUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<LocationAttributeCreateWithoutLocationInput, LocationAttributeUncheckedCreateWithoutLocationInput> | LocationAttributeCreateWithoutLocationInput[] | LocationAttributeUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LocationAttributeCreateOrConnectWithoutLocationInput | LocationAttributeCreateOrConnectWithoutLocationInput[]
    createMany?: LocationAttributeCreateManyLocationInputEnvelope
    connect?: LocationAttributeWhereUniqueInput | LocationAttributeWhereUniqueInput[]
  }

  export type LocationTourUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<LocationTourCreateWithoutLocationInput, LocationTourUncheckedCreateWithoutLocationInput> | LocationTourCreateWithoutLocationInput[] | LocationTourUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LocationTourCreateOrConnectWithoutLocationInput | LocationTourCreateOrConnectWithoutLocationInput[]
    createMany?: LocationTourCreateManyLocationInputEnvelope
    connect?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type LocationAttributeUpdateManyWithoutLocationNestedInput = {
    create?: XOR<LocationAttributeCreateWithoutLocationInput, LocationAttributeUncheckedCreateWithoutLocationInput> | LocationAttributeCreateWithoutLocationInput[] | LocationAttributeUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LocationAttributeCreateOrConnectWithoutLocationInput | LocationAttributeCreateOrConnectWithoutLocationInput[]
    upsert?: LocationAttributeUpsertWithWhereUniqueWithoutLocationInput | LocationAttributeUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: LocationAttributeCreateManyLocationInputEnvelope
    set?: LocationAttributeWhereUniqueInput | LocationAttributeWhereUniqueInput[]
    disconnect?: LocationAttributeWhereUniqueInput | LocationAttributeWhereUniqueInput[]
    delete?: LocationAttributeWhereUniqueInput | LocationAttributeWhereUniqueInput[]
    connect?: LocationAttributeWhereUniqueInput | LocationAttributeWhereUniqueInput[]
    update?: LocationAttributeUpdateWithWhereUniqueWithoutLocationInput | LocationAttributeUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: LocationAttributeUpdateManyWithWhereWithoutLocationInput | LocationAttributeUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: LocationAttributeScalarWhereInput | LocationAttributeScalarWhereInput[]
  }

  export type LocationTourUpdateManyWithoutLocationNestedInput = {
    create?: XOR<LocationTourCreateWithoutLocationInput, LocationTourUncheckedCreateWithoutLocationInput> | LocationTourCreateWithoutLocationInput[] | LocationTourUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LocationTourCreateOrConnectWithoutLocationInput | LocationTourCreateOrConnectWithoutLocationInput[]
    upsert?: LocationTourUpsertWithWhereUniqueWithoutLocationInput | LocationTourUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: LocationTourCreateManyLocationInputEnvelope
    set?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    disconnect?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    delete?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    connect?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    update?: LocationTourUpdateWithWhereUniqueWithoutLocationInput | LocationTourUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: LocationTourUpdateManyWithWhereWithoutLocationInput | LocationTourUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: LocationTourScalarWhereInput | LocationTourScalarWhereInput[]
  }

  export type LocationAttributeUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<LocationAttributeCreateWithoutLocationInput, LocationAttributeUncheckedCreateWithoutLocationInput> | LocationAttributeCreateWithoutLocationInput[] | LocationAttributeUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LocationAttributeCreateOrConnectWithoutLocationInput | LocationAttributeCreateOrConnectWithoutLocationInput[]
    upsert?: LocationAttributeUpsertWithWhereUniqueWithoutLocationInput | LocationAttributeUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: LocationAttributeCreateManyLocationInputEnvelope
    set?: LocationAttributeWhereUniqueInput | LocationAttributeWhereUniqueInput[]
    disconnect?: LocationAttributeWhereUniqueInput | LocationAttributeWhereUniqueInput[]
    delete?: LocationAttributeWhereUniqueInput | LocationAttributeWhereUniqueInput[]
    connect?: LocationAttributeWhereUniqueInput | LocationAttributeWhereUniqueInput[]
    update?: LocationAttributeUpdateWithWhereUniqueWithoutLocationInput | LocationAttributeUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: LocationAttributeUpdateManyWithWhereWithoutLocationInput | LocationAttributeUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: LocationAttributeScalarWhereInput | LocationAttributeScalarWhereInput[]
  }

  export type LocationTourUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<LocationTourCreateWithoutLocationInput, LocationTourUncheckedCreateWithoutLocationInput> | LocationTourCreateWithoutLocationInput[] | LocationTourUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LocationTourCreateOrConnectWithoutLocationInput | LocationTourCreateOrConnectWithoutLocationInput[]
    upsert?: LocationTourUpsertWithWhereUniqueWithoutLocationInput | LocationTourUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: LocationTourCreateManyLocationInputEnvelope
    set?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    disconnect?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    delete?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    connect?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    update?: LocationTourUpdateWithWhereUniqueWithoutLocationInput | LocationTourUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: LocationTourUpdateManyWithWhereWithoutLocationInput | LocationTourUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: LocationTourScalarWhereInput | LocationTourScalarWhereInput[]
  }

  export type LocationCreateNestedOneWithoutAttributesInput = {
    create?: XOR<LocationCreateWithoutAttributesInput, LocationUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutAttributesInput
    connect?: LocationWhereUniqueInput
  }

  export type LocationTourCreateNestedManyWithoutLocationAttrInput = {
    create?: XOR<LocationTourCreateWithoutLocationAttrInput, LocationTourUncheckedCreateWithoutLocationAttrInput> | LocationTourCreateWithoutLocationAttrInput[] | LocationTourUncheckedCreateWithoutLocationAttrInput[]
    connectOrCreate?: LocationTourCreateOrConnectWithoutLocationAttrInput | LocationTourCreateOrConnectWithoutLocationAttrInput[]
    createMany?: LocationTourCreateManyLocationAttrInputEnvelope
    connect?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
  }

  export type LocationTourUncheckedCreateNestedManyWithoutLocationAttrInput = {
    create?: XOR<LocationTourCreateWithoutLocationAttrInput, LocationTourUncheckedCreateWithoutLocationAttrInput> | LocationTourCreateWithoutLocationAttrInput[] | LocationTourUncheckedCreateWithoutLocationAttrInput[]
    connectOrCreate?: LocationTourCreateOrConnectWithoutLocationAttrInput | LocationTourCreateOrConnectWithoutLocationAttrInput[]
    createMany?: LocationTourCreateManyLocationAttrInputEnvelope
    connect?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
  }

  export type LocationUpdateOneWithoutAttributesNestedInput = {
    create?: XOR<LocationCreateWithoutAttributesInput, LocationUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutAttributesInput
    upsert?: LocationUpsertWithoutAttributesInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutAttributesInput, LocationUpdateWithoutAttributesInput>, LocationUncheckedUpdateWithoutAttributesInput>
  }

  export type LocationTourUpdateManyWithoutLocationAttrNestedInput = {
    create?: XOR<LocationTourCreateWithoutLocationAttrInput, LocationTourUncheckedCreateWithoutLocationAttrInput> | LocationTourCreateWithoutLocationAttrInput[] | LocationTourUncheckedCreateWithoutLocationAttrInput[]
    connectOrCreate?: LocationTourCreateOrConnectWithoutLocationAttrInput | LocationTourCreateOrConnectWithoutLocationAttrInput[]
    upsert?: LocationTourUpsertWithWhereUniqueWithoutLocationAttrInput | LocationTourUpsertWithWhereUniqueWithoutLocationAttrInput[]
    createMany?: LocationTourCreateManyLocationAttrInputEnvelope
    set?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    disconnect?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    delete?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    connect?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    update?: LocationTourUpdateWithWhereUniqueWithoutLocationAttrInput | LocationTourUpdateWithWhereUniqueWithoutLocationAttrInput[]
    updateMany?: LocationTourUpdateManyWithWhereWithoutLocationAttrInput | LocationTourUpdateManyWithWhereWithoutLocationAttrInput[]
    deleteMany?: LocationTourScalarWhereInput | LocationTourScalarWhereInput[]
  }

  export type LocationTourUncheckedUpdateManyWithoutLocationAttrNestedInput = {
    create?: XOR<LocationTourCreateWithoutLocationAttrInput, LocationTourUncheckedCreateWithoutLocationAttrInput> | LocationTourCreateWithoutLocationAttrInput[] | LocationTourUncheckedCreateWithoutLocationAttrInput[]
    connectOrCreate?: LocationTourCreateOrConnectWithoutLocationAttrInput | LocationTourCreateOrConnectWithoutLocationAttrInput[]
    upsert?: LocationTourUpsertWithWhereUniqueWithoutLocationAttrInput | LocationTourUpsertWithWhereUniqueWithoutLocationAttrInput[]
    createMany?: LocationTourCreateManyLocationAttrInputEnvelope
    set?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    disconnect?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    delete?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    connect?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    update?: LocationTourUpdateWithWhereUniqueWithoutLocationAttrInput | LocationTourUpdateWithWhereUniqueWithoutLocationAttrInput[]
    updateMany?: LocationTourUpdateManyWithWhereWithoutLocationAttrInput | LocationTourUpdateManyWithWhereWithoutLocationAttrInput[]
    deleteMany?: LocationTourScalarWhereInput | LocationTourScalarWhereInput[]
  }

  export type LocationCreateNestedOneWithoutLocationToursInput = {
    create?: XOR<LocationCreateWithoutLocationToursInput, LocationUncheckedCreateWithoutLocationToursInput>
    connectOrCreate?: LocationCreateOrConnectWithoutLocationToursInput
    connect?: LocationWhereUniqueInput
  }

  export type LocationAttributeCreateNestedOneWithoutLocationToursInput = {
    create?: XOR<LocationAttributeCreateWithoutLocationToursInput, LocationAttributeUncheckedCreateWithoutLocationToursInput>
    connectOrCreate?: LocationAttributeCreateOrConnectWithoutLocationToursInput
    connect?: LocationAttributeWhereUniqueInput
  }

  export type TourCreateNestedOneWithoutLocationToursInput = {
    create?: XOR<TourCreateWithoutLocationToursInput, TourUncheckedCreateWithoutLocationToursInput>
    connectOrCreate?: TourCreateOrConnectWithoutLocationToursInput
    connect?: TourWhereUniqueInput
  }

  export type LocationUpdateOneRequiredWithoutLocationToursNestedInput = {
    create?: XOR<LocationCreateWithoutLocationToursInput, LocationUncheckedCreateWithoutLocationToursInput>
    connectOrCreate?: LocationCreateOrConnectWithoutLocationToursInput
    upsert?: LocationUpsertWithoutLocationToursInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutLocationToursInput, LocationUpdateWithoutLocationToursInput>, LocationUncheckedUpdateWithoutLocationToursInput>
  }

  export type LocationAttributeUpdateOneRequiredWithoutLocationToursNestedInput = {
    create?: XOR<LocationAttributeCreateWithoutLocationToursInput, LocationAttributeUncheckedCreateWithoutLocationToursInput>
    connectOrCreate?: LocationAttributeCreateOrConnectWithoutLocationToursInput
    upsert?: LocationAttributeUpsertWithoutLocationToursInput
    connect?: LocationAttributeWhereUniqueInput
    update?: XOR<XOR<LocationAttributeUpdateToOneWithWhereWithoutLocationToursInput, LocationAttributeUpdateWithoutLocationToursInput>, LocationAttributeUncheckedUpdateWithoutLocationToursInput>
  }

  export type TourUpdateOneRequiredWithoutLocationToursNestedInput = {
    create?: XOR<TourCreateWithoutLocationToursInput, TourUncheckedCreateWithoutLocationToursInput>
    connectOrCreate?: TourCreateOrConnectWithoutLocationToursInput
    upsert?: TourUpsertWithoutLocationToursInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutLocationToursInput, TourUpdateWithoutLocationToursInput>, TourUncheckedUpdateWithoutLocationToursInput>
  }

  export type OfficeCreatebestToursInput = {
    set: number[]
  }

  export type OfficeCreatesocialMediaInput = {
    set: InputJsonValue[]
  }

  export type OfficeUpdatebestToursInput = {
    set?: number[]
    push?: number | number[]
  }

  export type OfficeUpdatesocialMediaInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type TourCreateimagesInput = {
    set: string[]
  }

  export type TourCreatestartDayInput = {
    set: string[]
  }

  export type TourCreatetourPricesInput = {
    set: InputJsonValue[]
  }

  export type TourCreatetourCountriesInput = {
    set: string[]
  }

  export type TourCreatetourHotelsInput = {
    set: string[]
  }

  export type TourCreatetourIncludesInput = {
    set: InputJsonValue[]
  }

  export type TourCreatetourExcludesInput = {
    set: InputJsonValue[]
  }

  export type TourCreatetourSectionsInput = {
    set: InputJsonValue[]
  }

  export type TourCreateadditionalServiceInput = {
    set: InputJsonValue[]
  }

  export type CustomerCreateNestedManyWithoutTourInput = {
    create?: XOR<CustomerCreateWithoutTourInput, CustomerUncheckedCreateWithoutTourInput> | CustomerCreateWithoutTourInput[] | CustomerUncheckedCreateWithoutTourInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutTourInput | CustomerCreateOrConnectWithoutTourInput[]
    createMany?: CustomerCreateManyTourInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type TourTypeCreateNestedOneWithoutToursInput = {
    create?: XOR<TourTypeCreateWithoutToursInput, TourTypeUncheckedCreateWithoutToursInput>
    connectOrCreate?: TourTypeCreateOrConnectWithoutToursInput
    connect?: TourTypeWhereUniqueInput
  }

  export type LocationTourCreateNestedManyWithoutTourInput = {
    create?: XOR<LocationTourCreateWithoutTourInput, LocationTourUncheckedCreateWithoutTourInput> | LocationTourCreateWithoutTourInput[] | LocationTourUncheckedCreateWithoutTourInput[]
    connectOrCreate?: LocationTourCreateOrConnectWithoutTourInput | LocationTourCreateOrConnectWithoutTourInput[]
    createMany?: LocationTourCreateManyTourInputEnvelope
    connect?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<CustomerCreateWithoutTourInput, CustomerUncheckedCreateWithoutTourInput> | CustomerCreateWithoutTourInput[] | CustomerUncheckedCreateWithoutTourInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutTourInput | CustomerCreateOrConnectWithoutTourInput[]
    createMany?: CustomerCreateManyTourInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type LocationTourUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<LocationTourCreateWithoutTourInput, LocationTourUncheckedCreateWithoutTourInput> | LocationTourCreateWithoutTourInput[] | LocationTourUncheckedCreateWithoutTourInput[]
    connectOrCreate?: LocationTourCreateOrConnectWithoutTourInput | LocationTourCreateOrConnectWithoutTourInput[]
    createMany?: LocationTourCreateManyTourInputEnvelope
    connect?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
  }

  export type TourUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TourUpdatestartDayInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TourUpdatetourPricesInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type TourUpdatetourCountriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TourUpdatetourHotelsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TourUpdatetourIncludesInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type TourUpdatetourExcludesInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type TourUpdatetourSectionsInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type TourUpdateadditionalServiceInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type CustomerUpdateManyWithoutTourNestedInput = {
    create?: XOR<CustomerCreateWithoutTourInput, CustomerUncheckedCreateWithoutTourInput> | CustomerCreateWithoutTourInput[] | CustomerUncheckedCreateWithoutTourInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutTourInput | CustomerCreateOrConnectWithoutTourInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutTourInput | CustomerUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: CustomerCreateManyTourInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutTourInput | CustomerUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutTourInput | CustomerUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type TourTypeUpdateOneWithoutToursNestedInput = {
    create?: XOR<TourTypeCreateWithoutToursInput, TourTypeUncheckedCreateWithoutToursInput>
    connectOrCreate?: TourTypeCreateOrConnectWithoutToursInput
    upsert?: TourTypeUpsertWithoutToursInput
    disconnect?: TourTypeWhereInput | boolean
    delete?: TourTypeWhereInput | boolean
    connect?: TourTypeWhereUniqueInput
    update?: XOR<XOR<TourTypeUpdateToOneWithWhereWithoutToursInput, TourTypeUpdateWithoutToursInput>, TourTypeUncheckedUpdateWithoutToursInput>
  }

  export type LocationTourUpdateManyWithoutTourNestedInput = {
    create?: XOR<LocationTourCreateWithoutTourInput, LocationTourUncheckedCreateWithoutTourInput> | LocationTourCreateWithoutTourInput[] | LocationTourUncheckedCreateWithoutTourInput[]
    connectOrCreate?: LocationTourCreateOrConnectWithoutTourInput | LocationTourCreateOrConnectWithoutTourInput[]
    upsert?: LocationTourUpsertWithWhereUniqueWithoutTourInput | LocationTourUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: LocationTourCreateManyTourInputEnvelope
    set?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    disconnect?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    delete?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    connect?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    update?: LocationTourUpdateWithWhereUniqueWithoutTourInput | LocationTourUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: LocationTourUpdateManyWithWhereWithoutTourInput | LocationTourUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: LocationTourScalarWhereInput | LocationTourScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<CustomerCreateWithoutTourInput, CustomerUncheckedCreateWithoutTourInput> | CustomerCreateWithoutTourInput[] | CustomerUncheckedCreateWithoutTourInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutTourInput | CustomerCreateOrConnectWithoutTourInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutTourInput | CustomerUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: CustomerCreateManyTourInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutTourInput | CustomerUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutTourInput | CustomerUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type LocationTourUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<LocationTourCreateWithoutTourInput, LocationTourUncheckedCreateWithoutTourInput> | LocationTourCreateWithoutTourInput[] | LocationTourUncheckedCreateWithoutTourInput[]
    connectOrCreate?: LocationTourCreateOrConnectWithoutTourInput | LocationTourCreateOrConnectWithoutTourInput[]
    upsert?: LocationTourUpsertWithWhereUniqueWithoutTourInput | LocationTourUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: LocationTourCreateManyTourInputEnvelope
    set?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    disconnect?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    delete?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    connect?: LocationTourWhereUniqueInput | LocationTourWhereUniqueInput[]
    update?: LocationTourUpdateWithWhereUniqueWithoutTourInput | LocationTourUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: LocationTourUpdateManyWithWhereWithoutTourInput | LocationTourUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: LocationTourScalarWhereInput | LocationTourScalarWhereInput[]
  }

  export type TourCreateNestedManyWithoutTourTypeInput = {
    create?: XOR<TourCreateWithoutTourTypeInput, TourUncheckedCreateWithoutTourTypeInput> | TourCreateWithoutTourTypeInput[] | TourUncheckedCreateWithoutTourTypeInput[]
    connectOrCreate?: TourCreateOrConnectWithoutTourTypeInput | TourCreateOrConnectWithoutTourTypeInput[]
    createMany?: TourCreateManyTourTypeInputEnvelope
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
  }

  export type TourUncheckedCreateNestedManyWithoutTourTypeInput = {
    create?: XOR<TourCreateWithoutTourTypeInput, TourUncheckedCreateWithoutTourTypeInput> | TourCreateWithoutTourTypeInput[] | TourUncheckedCreateWithoutTourTypeInput[]
    connectOrCreate?: TourCreateOrConnectWithoutTourTypeInput | TourCreateOrConnectWithoutTourTypeInput[]
    createMany?: TourCreateManyTourTypeInputEnvelope
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
  }

  export type TourUpdateManyWithoutTourTypeNestedInput = {
    create?: XOR<TourCreateWithoutTourTypeInput, TourUncheckedCreateWithoutTourTypeInput> | TourCreateWithoutTourTypeInput[] | TourUncheckedCreateWithoutTourTypeInput[]
    connectOrCreate?: TourCreateOrConnectWithoutTourTypeInput | TourCreateOrConnectWithoutTourTypeInput[]
    upsert?: TourUpsertWithWhereUniqueWithoutTourTypeInput | TourUpsertWithWhereUniqueWithoutTourTypeInput[]
    createMany?: TourCreateManyTourTypeInputEnvelope
    set?: TourWhereUniqueInput | TourWhereUniqueInput[]
    disconnect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    delete?: TourWhereUniqueInput | TourWhereUniqueInput[]
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    update?: TourUpdateWithWhereUniqueWithoutTourTypeInput | TourUpdateWithWhereUniqueWithoutTourTypeInput[]
    updateMany?: TourUpdateManyWithWhereWithoutTourTypeInput | TourUpdateManyWithWhereWithoutTourTypeInput[]
    deleteMany?: TourScalarWhereInput | TourScalarWhereInput[]
  }

  export type TourUncheckedUpdateManyWithoutTourTypeNestedInput = {
    create?: XOR<TourCreateWithoutTourTypeInput, TourUncheckedCreateWithoutTourTypeInput> | TourCreateWithoutTourTypeInput[] | TourUncheckedCreateWithoutTourTypeInput[]
    connectOrCreate?: TourCreateOrConnectWithoutTourTypeInput | TourCreateOrConnectWithoutTourTypeInput[]
    upsert?: TourUpsertWithWhereUniqueWithoutTourTypeInput | TourUpsertWithWhereUniqueWithoutTourTypeInput[]
    createMany?: TourCreateManyTourTypeInputEnvelope
    set?: TourWhereUniqueInput | TourWhereUniqueInput[]
    disconnect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    delete?: TourWhereUniqueInput | TourWhereUniqueInput[]
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    update?: TourUpdateWithWhereUniqueWithoutTourTypeInput | TourUpdateWithWhereUniqueWithoutTourTypeInput[]
    updateMany?: TourUpdateManyWithWhereWithoutTourTypeInput | TourUpdateManyWithWhereWithoutTourTypeInput[]
    deleteMany?: TourScalarWhereInput | TourScalarWhereInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PasskeyCreateNestedManyWithoutUserInput = {
    create?: XOR<PasskeyCreateWithoutUserInput, PasskeyUncheckedCreateWithoutUserInput> | PasskeyCreateWithoutUserInput[] | PasskeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasskeyCreateOrConnectWithoutUserInput | PasskeyCreateOrConnectWithoutUserInput[]
    createMany?: PasskeyCreateManyUserInputEnvelope
    connect?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PasskeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasskeyCreateWithoutUserInput, PasskeyUncheckedCreateWithoutUserInput> | PasskeyCreateWithoutUserInput[] | PasskeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasskeyCreateOrConnectWithoutUserInput | PasskeyCreateOrConnectWithoutUserInput[]
    createMany?: PasskeyCreateManyUserInputEnvelope
    connect?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PasskeyUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasskeyCreateWithoutUserInput, PasskeyUncheckedCreateWithoutUserInput> | PasskeyCreateWithoutUserInput[] | PasskeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasskeyCreateOrConnectWithoutUserInput | PasskeyCreateOrConnectWithoutUserInput[]
    upsert?: PasskeyUpsertWithWhereUniqueWithoutUserInput | PasskeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasskeyCreateManyUserInputEnvelope
    set?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    disconnect?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    delete?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    connect?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    update?: PasskeyUpdateWithWhereUniqueWithoutUserInput | PasskeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasskeyUpdateManyWithWhereWithoutUserInput | PasskeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasskeyScalarWhereInput | PasskeyScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PasskeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasskeyCreateWithoutUserInput, PasskeyUncheckedCreateWithoutUserInput> | PasskeyCreateWithoutUserInput[] | PasskeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasskeyCreateOrConnectWithoutUserInput | PasskeyCreateOrConnectWithoutUserInput[]
    upsert?: PasskeyUpsertWithWhereUniqueWithoutUserInput | PasskeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasskeyCreateManyUserInputEnvelope
    set?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    disconnect?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    delete?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    connect?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    update?: PasskeyUpdateWithWhereUniqueWithoutUserInput | PasskeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasskeyUpdateManyWithWhereWithoutUserInput | PasskeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasskeyScalarWhereInput | PasskeyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutPasskeysInput = {
    create?: XOR<UserCreateWithoutPasskeysInput, UserUncheckedCreateWithoutPasskeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasskeysInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasskeysNestedInput = {
    create?: XOR<UserCreateWithoutPasskeysInput, UserUncheckedCreateWithoutPasskeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasskeysInput
    upsert?: UserUpsertWithoutPasskeysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasskeysInput, UserUpdateWithoutPasskeysInput>, UserUncheckedUpdateWithoutPasskeysInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TourCreateWithoutCustomersInput = {
    name: string
    numberOfDays: number
    code?: string | null
    slug?: string | null
    images?: TourCreateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean | null
    isTicketIncluded?: boolean | null
    startDay?: TourCreatestartDayInput | string[]
    priceSingle?: number | null
    priceDouble?: number | null
    priceSingleSa?: number | null
    priceDoubleSa?: number | null
    priceSingleJo?: number | null
    priceDoubleJo?: number | null
    tourPrices?: TourCreatetourPricesInput | InputJsonValue[]
    tourCountries?: TourCreatetourCountriesInput | string[]
    tourHotels?: TourCreatetourHotelsInput | string[]
    tourIncludes?: TourCreatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourCreatetourExcludesInput | InputJsonValue[]
    tourSections?: TourCreatetourSectionsInput | InputJsonValue[]
    airpotComing?: string | null
    airpotGoing?: string | null
    additionalInfo?: string | null
    additionalService?: TourCreateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    tourType?: TourTypeCreateNestedOneWithoutToursInput
    locationTours?: LocationTourCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutCustomersInput = {
    id?: number
    name: string
    numberOfDays: number
    code?: string | null
    slug?: string | null
    images?: TourCreateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean | null
    isTicketIncluded?: boolean | null
    startDay?: TourCreatestartDayInput | string[]
    priceSingle?: number | null
    priceDouble?: number | null
    priceSingleSa?: number | null
    priceDoubleSa?: number | null
    priceSingleJo?: number | null
    priceDoubleJo?: number | null
    tourPrices?: TourCreatetourPricesInput | InputJsonValue[]
    tourCountries?: TourCreatetourCountriesInput | string[]
    tourHotels?: TourCreatetourHotelsInput | string[]
    tourIncludes?: TourCreatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourCreatetourExcludesInput | InputJsonValue[]
    tourSections?: TourCreatetourSectionsInput | InputJsonValue[]
    airpotComing?: string | null
    airpotGoing?: string | null
    additionalInfo?: string | null
    additionalService?: TourCreateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    typeId?: number | null
    createdAt?: Date | string
    locationTours?: LocationTourUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutCustomersInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutCustomersInput, TourUncheckedCreateWithoutCustomersInput>
  }

  export type TourUpsertWithoutCustomersInput = {
    update: XOR<TourUpdateWithoutCustomersInput, TourUncheckedUpdateWithoutCustomersInput>
    create: XOR<TourCreateWithoutCustomersInput, TourUncheckedCreateWithoutCustomersInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutCustomersInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutCustomersInput, TourUncheckedUpdateWithoutCustomersInput>
  }

  export type TourUpdateWithoutCustomersInput = {
    name?: StringFieldUpdateOperationsInput | string
    numberOfDays?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    images?: TourUpdateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTicketIncluded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDay?: TourUpdatestartDayInput | string[]
    priceSingle?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDouble?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    tourPrices?: TourUpdatetourPricesInput | InputJsonValue[]
    tourCountries?: TourUpdatetourCountriesInput | string[]
    tourHotels?: TourUpdatetourHotelsInput | string[]
    tourIncludes?: TourUpdatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourUpdatetourExcludesInput | InputJsonValue[]
    tourSections?: TourUpdatetourSectionsInput | InputJsonValue[]
    airpotComing?: NullableStringFieldUpdateOperationsInput | string | null
    airpotGoing?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    additionalService?: TourUpdateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourType?: TourTypeUpdateOneWithoutToursNestedInput
    locationTours?: LocationTourUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    numberOfDays?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    images?: TourUpdateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTicketIncluded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDay?: TourUpdatestartDayInput | string[]
    priceSingle?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDouble?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    tourPrices?: TourUpdatetourPricesInput | InputJsonValue[]
    tourCountries?: TourUpdatetourCountriesInput | string[]
    tourHotels?: TourUpdatetourHotelsInput | string[]
    tourIncludes?: TourUpdatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourUpdatetourExcludesInput | InputJsonValue[]
    tourSections?: TourUpdatetourSectionsInput | InputJsonValue[]
    airpotComing?: NullableStringFieldUpdateOperationsInput | string | null
    airpotGoing?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    additionalService?: TourUpdateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationTours?: LocationTourUncheckedUpdateManyWithoutTourNestedInput
  }

  export type LocationAttributeCreateWithoutLocationInput = {
    title?: string | null
    order?: number | null
    seo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    locationTours?: LocationTourCreateNestedManyWithoutLocationAttrInput
  }

  export type LocationAttributeUncheckedCreateWithoutLocationInput = {
    id?: number
    title?: string | null
    order?: number | null
    seo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    locationTours?: LocationTourUncheckedCreateNestedManyWithoutLocationAttrInput
  }

  export type LocationAttributeCreateOrConnectWithoutLocationInput = {
    where: LocationAttributeWhereUniqueInput
    create: XOR<LocationAttributeCreateWithoutLocationInput, LocationAttributeUncheckedCreateWithoutLocationInput>
  }

  export type LocationAttributeCreateManyLocationInputEnvelope = {
    data: LocationAttributeCreateManyLocationInput | LocationAttributeCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type LocationTourCreateWithoutLocationInput = {
    createdAt?: Date | string
    locationAttr: LocationAttributeCreateNestedOneWithoutLocationToursInput
    tour: TourCreateNestedOneWithoutLocationToursInput
  }

  export type LocationTourUncheckedCreateWithoutLocationInput = {
    id?: number
    locationAttrId: number
    tourId: number
    createdAt?: Date | string
  }

  export type LocationTourCreateOrConnectWithoutLocationInput = {
    where: LocationTourWhereUniqueInput
    create: XOR<LocationTourCreateWithoutLocationInput, LocationTourUncheckedCreateWithoutLocationInput>
  }

  export type LocationTourCreateManyLocationInputEnvelope = {
    data: LocationTourCreateManyLocationInput | LocationTourCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type LocationAttributeUpsertWithWhereUniqueWithoutLocationInput = {
    where: LocationAttributeWhereUniqueInput
    update: XOR<LocationAttributeUpdateWithoutLocationInput, LocationAttributeUncheckedUpdateWithoutLocationInput>
    create: XOR<LocationAttributeCreateWithoutLocationInput, LocationAttributeUncheckedCreateWithoutLocationInput>
  }

  export type LocationAttributeUpdateWithWhereUniqueWithoutLocationInput = {
    where: LocationAttributeWhereUniqueInput
    data: XOR<LocationAttributeUpdateWithoutLocationInput, LocationAttributeUncheckedUpdateWithoutLocationInput>
  }

  export type LocationAttributeUpdateManyWithWhereWithoutLocationInput = {
    where: LocationAttributeScalarWhereInput
    data: XOR<LocationAttributeUpdateManyMutationInput, LocationAttributeUncheckedUpdateManyWithoutLocationInput>
  }

  export type LocationAttributeScalarWhereInput = {
    AND?: LocationAttributeScalarWhereInput | LocationAttributeScalarWhereInput[]
    OR?: LocationAttributeScalarWhereInput[]
    NOT?: LocationAttributeScalarWhereInput | LocationAttributeScalarWhereInput[]
    id?: IntFilter<"LocationAttribute"> | number
    title?: StringNullableFilter<"LocationAttribute"> | string | null
    order?: IntNullableFilter<"LocationAttribute"> | number | null
    seo?: JsonNullableFilter<"LocationAttribute">
    locationId?: IntNullableFilter<"LocationAttribute"> | number | null
    createdAt?: DateTimeFilter<"LocationAttribute"> | Date | string
  }

  export type LocationTourUpsertWithWhereUniqueWithoutLocationInput = {
    where: LocationTourWhereUniqueInput
    update: XOR<LocationTourUpdateWithoutLocationInput, LocationTourUncheckedUpdateWithoutLocationInput>
    create: XOR<LocationTourCreateWithoutLocationInput, LocationTourUncheckedCreateWithoutLocationInput>
  }

  export type LocationTourUpdateWithWhereUniqueWithoutLocationInput = {
    where: LocationTourWhereUniqueInput
    data: XOR<LocationTourUpdateWithoutLocationInput, LocationTourUncheckedUpdateWithoutLocationInput>
  }

  export type LocationTourUpdateManyWithWhereWithoutLocationInput = {
    where: LocationTourScalarWhereInput
    data: XOR<LocationTourUpdateManyMutationInput, LocationTourUncheckedUpdateManyWithoutLocationInput>
  }

  export type LocationTourScalarWhereInput = {
    AND?: LocationTourScalarWhereInput | LocationTourScalarWhereInput[]
    OR?: LocationTourScalarWhereInput[]
    NOT?: LocationTourScalarWhereInput | LocationTourScalarWhereInput[]
    id?: IntFilter<"LocationTour"> | number
    locationId?: IntFilter<"LocationTour"> | number
    locationAttrId?: IntFilter<"LocationTour"> | number
    tourId?: IntFilter<"LocationTour"> | number
    createdAt?: DateTimeFilter<"LocationTour"> | Date | string
  }

  export type LocationCreateWithoutAttributesInput = {
    name: string
    image?: NullableJsonNullValueInput | InputJsonValue
    order?: number
    isActive?: boolean | null
    isOffice?: boolean | null
    showOnService?: boolean
    showOnEurope?: boolean
    seo?: NullableJsonNullValueInput | InputJsonValue
    slug?: string | null
    createdAt?: Date | string
    locationTours?: LocationTourCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutAttributesInput = {
    id?: number
    name: string
    image?: NullableJsonNullValueInput | InputJsonValue
    order?: number
    isActive?: boolean | null
    isOffice?: boolean | null
    showOnService?: boolean
    showOnEurope?: boolean
    seo?: NullableJsonNullValueInput | InputJsonValue
    slug?: string | null
    createdAt?: Date | string
    locationTours?: LocationTourUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutAttributesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutAttributesInput, LocationUncheckedCreateWithoutAttributesInput>
  }

  export type LocationTourCreateWithoutLocationAttrInput = {
    createdAt?: Date | string
    location: LocationCreateNestedOneWithoutLocationToursInput
    tour: TourCreateNestedOneWithoutLocationToursInput
  }

  export type LocationTourUncheckedCreateWithoutLocationAttrInput = {
    id?: number
    locationId: number
    tourId: number
    createdAt?: Date | string
  }

  export type LocationTourCreateOrConnectWithoutLocationAttrInput = {
    where: LocationTourWhereUniqueInput
    create: XOR<LocationTourCreateWithoutLocationAttrInput, LocationTourUncheckedCreateWithoutLocationAttrInput>
  }

  export type LocationTourCreateManyLocationAttrInputEnvelope = {
    data: LocationTourCreateManyLocationAttrInput | LocationTourCreateManyLocationAttrInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithoutAttributesInput = {
    update: XOR<LocationUpdateWithoutAttributesInput, LocationUncheckedUpdateWithoutAttributesInput>
    create: XOR<LocationCreateWithoutAttributesInput, LocationUncheckedCreateWithoutAttributesInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutAttributesInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutAttributesInput, LocationUncheckedUpdateWithoutAttributesInput>
  }

  export type LocationUpdateWithoutAttributesInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isOffice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    showOnService?: BoolFieldUpdateOperationsInput | boolean
    showOnEurope?: BoolFieldUpdateOperationsInput | boolean
    seo?: NullableJsonNullValueInput | InputJsonValue
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationTours?: LocationTourUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutAttributesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isOffice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    showOnService?: BoolFieldUpdateOperationsInput | boolean
    showOnEurope?: BoolFieldUpdateOperationsInput | boolean
    seo?: NullableJsonNullValueInput | InputJsonValue
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationTours?: LocationTourUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationTourUpsertWithWhereUniqueWithoutLocationAttrInput = {
    where: LocationTourWhereUniqueInput
    update: XOR<LocationTourUpdateWithoutLocationAttrInput, LocationTourUncheckedUpdateWithoutLocationAttrInput>
    create: XOR<LocationTourCreateWithoutLocationAttrInput, LocationTourUncheckedCreateWithoutLocationAttrInput>
  }

  export type LocationTourUpdateWithWhereUniqueWithoutLocationAttrInput = {
    where: LocationTourWhereUniqueInput
    data: XOR<LocationTourUpdateWithoutLocationAttrInput, LocationTourUncheckedUpdateWithoutLocationAttrInput>
  }

  export type LocationTourUpdateManyWithWhereWithoutLocationAttrInput = {
    where: LocationTourScalarWhereInput
    data: XOR<LocationTourUpdateManyMutationInput, LocationTourUncheckedUpdateManyWithoutLocationAttrInput>
  }

  export type LocationCreateWithoutLocationToursInput = {
    name: string
    image?: NullableJsonNullValueInput | InputJsonValue
    order?: number
    isActive?: boolean | null
    isOffice?: boolean | null
    showOnService?: boolean
    showOnEurope?: boolean
    seo?: NullableJsonNullValueInput | InputJsonValue
    slug?: string | null
    createdAt?: Date | string
    attributes?: LocationAttributeCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutLocationToursInput = {
    id?: number
    name: string
    image?: NullableJsonNullValueInput | InputJsonValue
    order?: number
    isActive?: boolean | null
    isOffice?: boolean | null
    showOnService?: boolean
    showOnEurope?: boolean
    seo?: NullableJsonNullValueInput | InputJsonValue
    slug?: string | null
    createdAt?: Date | string
    attributes?: LocationAttributeUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutLocationToursInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutLocationToursInput, LocationUncheckedCreateWithoutLocationToursInput>
  }

  export type LocationAttributeCreateWithoutLocationToursInput = {
    title?: string | null
    order?: number | null
    seo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    location?: LocationCreateNestedOneWithoutAttributesInput
  }

  export type LocationAttributeUncheckedCreateWithoutLocationToursInput = {
    id?: number
    title?: string | null
    order?: number | null
    seo?: NullableJsonNullValueInput | InputJsonValue
    locationId?: number | null
    createdAt?: Date | string
  }

  export type LocationAttributeCreateOrConnectWithoutLocationToursInput = {
    where: LocationAttributeWhereUniqueInput
    create: XOR<LocationAttributeCreateWithoutLocationToursInput, LocationAttributeUncheckedCreateWithoutLocationToursInput>
  }

  export type TourCreateWithoutLocationToursInput = {
    name: string
    numberOfDays: number
    code?: string | null
    slug?: string | null
    images?: TourCreateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean | null
    isTicketIncluded?: boolean | null
    startDay?: TourCreatestartDayInput | string[]
    priceSingle?: number | null
    priceDouble?: number | null
    priceSingleSa?: number | null
    priceDoubleSa?: number | null
    priceSingleJo?: number | null
    priceDoubleJo?: number | null
    tourPrices?: TourCreatetourPricesInput | InputJsonValue[]
    tourCountries?: TourCreatetourCountriesInput | string[]
    tourHotels?: TourCreatetourHotelsInput | string[]
    tourIncludes?: TourCreatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourCreatetourExcludesInput | InputJsonValue[]
    tourSections?: TourCreatetourSectionsInput | InputJsonValue[]
    airpotComing?: string | null
    airpotGoing?: string | null
    additionalInfo?: string | null
    additionalService?: TourCreateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    customers?: CustomerCreateNestedManyWithoutTourInput
    tourType?: TourTypeCreateNestedOneWithoutToursInput
  }

  export type TourUncheckedCreateWithoutLocationToursInput = {
    id?: number
    name: string
    numberOfDays: number
    code?: string | null
    slug?: string | null
    images?: TourCreateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean | null
    isTicketIncluded?: boolean | null
    startDay?: TourCreatestartDayInput | string[]
    priceSingle?: number | null
    priceDouble?: number | null
    priceSingleSa?: number | null
    priceDoubleSa?: number | null
    priceSingleJo?: number | null
    priceDoubleJo?: number | null
    tourPrices?: TourCreatetourPricesInput | InputJsonValue[]
    tourCountries?: TourCreatetourCountriesInput | string[]
    tourHotels?: TourCreatetourHotelsInput | string[]
    tourIncludes?: TourCreatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourCreatetourExcludesInput | InputJsonValue[]
    tourSections?: TourCreatetourSectionsInput | InputJsonValue[]
    airpotComing?: string | null
    airpotGoing?: string | null
    additionalInfo?: string | null
    additionalService?: TourCreateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    typeId?: number | null
    createdAt?: Date | string
    customers?: CustomerUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutLocationToursInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutLocationToursInput, TourUncheckedCreateWithoutLocationToursInput>
  }

  export type LocationUpsertWithoutLocationToursInput = {
    update: XOR<LocationUpdateWithoutLocationToursInput, LocationUncheckedUpdateWithoutLocationToursInput>
    create: XOR<LocationCreateWithoutLocationToursInput, LocationUncheckedCreateWithoutLocationToursInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutLocationToursInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutLocationToursInput, LocationUncheckedUpdateWithoutLocationToursInput>
  }

  export type LocationUpdateWithoutLocationToursInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isOffice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    showOnService?: BoolFieldUpdateOperationsInput | boolean
    showOnEurope?: BoolFieldUpdateOperationsInput | boolean
    seo?: NullableJsonNullValueInput | InputJsonValue
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: LocationAttributeUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutLocationToursInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isOffice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    showOnService?: BoolFieldUpdateOperationsInput | boolean
    showOnEurope?: BoolFieldUpdateOperationsInput | boolean
    seo?: NullableJsonNullValueInput | InputJsonValue
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: LocationAttributeUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationAttributeUpsertWithoutLocationToursInput = {
    update: XOR<LocationAttributeUpdateWithoutLocationToursInput, LocationAttributeUncheckedUpdateWithoutLocationToursInput>
    create: XOR<LocationAttributeCreateWithoutLocationToursInput, LocationAttributeUncheckedCreateWithoutLocationToursInput>
    where?: LocationAttributeWhereInput
  }

  export type LocationAttributeUpdateToOneWithWhereWithoutLocationToursInput = {
    where?: LocationAttributeWhereInput
    data: XOR<LocationAttributeUpdateWithoutLocationToursInput, LocationAttributeUncheckedUpdateWithoutLocationToursInput>
  }

  export type LocationAttributeUpdateWithoutLocationToursInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    seo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneWithoutAttributesNestedInput
  }

  export type LocationAttributeUncheckedUpdateWithoutLocationToursInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    seo?: NullableJsonNullValueInput | InputJsonValue
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourUpsertWithoutLocationToursInput = {
    update: XOR<TourUpdateWithoutLocationToursInput, TourUncheckedUpdateWithoutLocationToursInput>
    create: XOR<TourCreateWithoutLocationToursInput, TourUncheckedCreateWithoutLocationToursInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutLocationToursInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutLocationToursInput, TourUncheckedUpdateWithoutLocationToursInput>
  }

  export type TourUpdateWithoutLocationToursInput = {
    name?: StringFieldUpdateOperationsInput | string
    numberOfDays?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    images?: TourUpdateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTicketIncluded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDay?: TourUpdatestartDayInput | string[]
    priceSingle?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDouble?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    tourPrices?: TourUpdatetourPricesInput | InputJsonValue[]
    tourCountries?: TourUpdatetourCountriesInput | string[]
    tourHotels?: TourUpdatetourHotelsInput | string[]
    tourIncludes?: TourUpdatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourUpdatetourExcludesInput | InputJsonValue[]
    tourSections?: TourUpdatetourSectionsInput | InputJsonValue[]
    airpotComing?: NullableStringFieldUpdateOperationsInput | string | null
    airpotGoing?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    additionalService?: TourUpdateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUpdateManyWithoutTourNestedInput
    tourType?: TourTypeUpdateOneWithoutToursNestedInput
  }

  export type TourUncheckedUpdateWithoutLocationToursInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    numberOfDays?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    images?: TourUpdateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTicketIncluded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDay?: TourUpdatestartDayInput | string[]
    priceSingle?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDouble?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    tourPrices?: TourUpdatetourPricesInput | InputJsonValue[]
    tourCountries?: TourUpdatetourCountriesInput | string[]
    tourHotels?: TourUpdatetourHotelsInput | string[]
    tourIncludes?: TourUpdatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourUpdatetourExcludesInput | InputJsonValue[]
    tourSections?: TourUpdatetourSectionsInput | InputJsonValue[]
    airpotComing?: NullableStringFieldUpdateOperationsInput | string | null
    airpotGoing?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    additionalService?: TourUpdateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUncheckedUpdateManyWithoutTourNestedInput
  }

  export type CustomerCreateWithoutTourInput = {
    name: string
    phoneNumber: string
    contactMethod: string
    status: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutTourInput = {
    id?: number
    name: string
    phoneNumber: string
    contactMethod: string
    status: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutTourInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutTourInput, CustomerUncheckedCreateWithoutTourInput>
  }

  export type CustomerCreateManyTourInputEnvelope = {
    data: CustomerCreateManyTourInput | CustomerCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type TourTypeCreateWithoutToursInput = {
    name?: string | null
    image?: JsonNullValueInput | InputJsonValue
    showOnService?: boolean
    createdAt?: Date | string
    order?: number
  }

  export type TourTypeUncheckedCreateWithoutToursInput = {
    id?: number
    name?: string | null
    image?: JsonNullValueInput | InputJsonValue
    showOnService?: boolean
    createdAt?: Date | string
    order?: number
  }

  export type TourTypeCreateOrConnectWithoutToursInput = {
    where: TourTypeWhereUniqueInput
    create: XOR<TourTypeCreateWithoutToursInput, TourTypeUncheckedCreateWithoutToursInput>
  }

  export type LocationTourCreateWithoutTourInput = {
    createdAt?: Date | string
    location: LocationCreateNestedOneWithoutLocationToursInput
    locationAttr: LocationAttributeCreateNestedOneWithoutLocationToursInput
  }

  export type LocationTourUncheckedCreateWithoutTourInput = {
    id?: number
    locationId: number
    locationAttrId: number
    createdAt?: Date | string
  }

  export type LocationTourCreateOrConnectWithoutTourInput = {
    where: LocationTourWhereUniqueInput
    create: XOR<LocationTourCreateWithoutTourInput, LocationTourUncheckedCreateWithoutTourInput>
  }

  export type LocationTourCreateManyTourInputEnvelope = {
    data: LocationTourCreateManyTourInput | LocationTourCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithWhereUniqueWithoutTourInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutTourInput, CustomerUncheckedUpdateWithoutTourInput>
    create: XOR<CustomerCreateWithoutTourInput, CustomerUncheckedCreateWithoutTourInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutTourInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutTourInput, CustomerUncheckedUpdateWithoutTourInput>
  }

  export type CustomerUpdateManyWithWhereWithoutTourInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutTourInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    phoneNumber?: StringFilter<"Customer"> | string
    contactMethod?: StringFilter<"Customer"> | string
    status?: IntFilter<"Customer"> | number
    notes?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    tourId?: IntNullableFilter<"Customer"> | number | null
  }

  export type TourTypeUpsertWithoutToursInput = {
    update: XOR<TourTypeUpdateWithoutToursInput, TourTypeUncheckedUpdateWithoutToursInput>
    create: XOR<TourTypeCreateWithoutToursInput, TourTypeUncheckedCreateWithoutToursInput>
    where?: TourTypeWhereInput
  }

  export type TourTypeUpdateToOneWithWhereWithoutToursInput = {
    where?: TourTypeWhereInput
    data: XOR<TourTypeUpdateWithoutToursInput, TourTypeUncheckedUpdateWithoutToursInput>
  }

  export type TourTypeUpdateWithoutToursInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: JsonNullValueInput | InputJsonValue
    showOnService?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourTypeUncheckedUpdateWithoutToursInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: JsonNullValueInput | InputJsonValue
    showOnService?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LocationTourUpsertWithWhereUniqueWithoutTourInput = {
    where: LocationTourWhereUniqueInput
    update: XOR<LocationTourUpdateWithoutTourInput, LocationTourUncheckedUpdateWithoutTourInput>
    create: XOR<LocationTourCreateWithoutTourInput, LocationTourUncheckedCreateWithoutTourInput>
  }

  export type LocationTourUpdateWithWhereUniqueWithoutTourInput = {
    where: LocationTourWhereUniqueInput
    data: XOR<LocationTourUpdateWithoutTourInput, LocationTourUncheckedUpdateWithoutTourInput>
  }

  export type LocationTourUpdateManyWithWhereWithoutTourInput = {
    where: LocationTourScalarWhereInput
    data: XOR<LocationTourUpdateManyMutationInput, LocationTourUncheckedUpdateManyWithoutTourInput>
  }

  export type TourCreateWithoutTourTypeInput = {
    name: string
    numberOfDays: number
    code?: string | null
    slug?: string | null
    images?: TourCreateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean | null
    isTicketIncluded?: boolean | null
    startDay?: TourCreatestartDayInput | string[]
    priceSingle?: number | null
    priceDouble?: number | null
    priceSingleSa?: number | null
    priceDoubleSa?: number | null
    priceSingleJo?: number | null
    priceDoubleJo?: number | null
    tourPrices?: TourCreatetourPricesInput | InputJsonValue[]
    tourCountries?: TourCreatetourCountriesInput | string[]
    tourHotels?: TourCreatetourHotelsInput | string[]
    tourIncludes?: TourCreatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourCreatetourExcludesInput | InputJsonValue[]
    tourSections?: TourCreatetourSectionsInput | InputJsonValue[]
    airpotComing?: string | null
    airpotGoing?: string | null
    additionalInfo?: string | null
    additionalService?: TourCreateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    customers?: CustomerCreateNestedManyWithoutTourInput
    locationTours?: LocationTourCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutTourTypeInput = {
    id?: number
    name: string
    numberOfDays: number
    code?: string | null
    slug?: string | null
    images?: TourCreateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean | null
    isTicketIncluded?: boolean | null
    startDay?: TourCreatestartDayInput | string[]
    priceSingle?: number | null
    priceDouble?: number | null
    priceSingleSa?: number | null
    priceDoubleSa?: number | null
    priceSingleJo?: number | null
    priceDoubleJo?: number | null
    tourPrices?: TourCreatetourPricesInput | InputJsonValue[]
    tourCountries?: TourCreatetourCountriesInput | string[]
    tourHotels?: TourCreatetourHotelsInput | string[]
    tourIncludes?: TourCreatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourCreatetourExcludesInput | InputJsonValue[]
    tourSections?: TourCreatetourSectionsInput | InputJsonValue[]
    airpotComing?: string | null
    airpotGoing?: string | null
    additionalInfo?: string | null
    additionalService?: TourCreateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    customers?: CustomerUncheckedCreateNestedManyWithoutTourInput
    locationTours?: LocationTourUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutTourTypeInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutTourTypeInput, TourUncheckedCreateWithoutTourTypeInput>
  }

  export type TourCreateManyTourTypeInputEnvelope = {
    data: TourCreateManyTourTypeInput | TourCreateManyTourTypeInput[]
    skipDuplicates?: boolean
  }

  export type TourUpsertWithWhereUniqueWithoutTourTypeInput = {
    where: TourWhereUniqueInput
    update: XOR<TourUpdateWithoutTourTypeInput, TourUncheckedUpdateWithoutTourTypeInput>
    create: XOR<TourCreateWithoutTourTypeInput, TourUncheckedCreateWithoutTourTypeInput>
  }

  export type TourUpdateWithWhereUniqueWithoutTourTypeInput = {
    where: TourWhereUniqueInput
    data: XOR<TourUpdateWithoutTourTypeInput, TourUncheckedUpdateWithoutTourTypeInput>
  }

  export type TourUpdateManyWithWhereWithoutTourTypeInput = {
    where: TourScalarWhereInput
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyWithoutTourTypeInput>
  }

  export type TourScalarWhereInput = {
    AND?: TourScalarWhereInput | TourScalarWhereInput[]
    OR?: TourScalarWhereInput[]
    NOT?: TourScalarWhereInput | TourScalarWhereInput[]
    id?: IntFilter<"Tour"> | number
    name?: StringFilter<"Tour"> | string
    numberOfDays?: IntFilter<"Tour"> | number
    code?: StringNullableFilter<"Tour"> | string | null
    slug?: StringNullableFilter<"Tour"> | string | null
    images?: StringNullableListFilter<"Tour">
    seo?: JsonNullableFilter<"Tour">
    isActive?: BoolNullableFilter<"Tour"> | boolean | null
    isTicketIncluded?: BoolNullableFilter<"Tour"> | boolean | null
    startDay?: StringNullableListFilter<"Tour">
    priceSingle?: FloatNullableFilter<"Tour"> | number | null
    priceDouble?: FloatNullableFilter<"Tour"> | number | null
    priceSingleSa?: FloatNullableFilter<"Tour"> | number | null
    priceDoubleSa?: FloatNullableFilter<"Tour"> | number | null
    priceSingleJo?: FloatNullableFilter<"Tour"> | number | null
    priceDoubleJo?: FloatNullableFilter<"Tour"> | number | null
    tourPrices?: JsonNullableListFilter<"Tour">
    tourCountries?: StringNullableListFilter<"Tour">
    tourHotels?: StringNullableListFilter<"Tour">
    tourIncludes?: JsonNullableListFilter<"Tour">
    tourExcludes?: JsonNullableListFilter<"Tour">
    tourSections?: JsonNullableListFilter<"Tour">
    airpotComing?: StringNullableFilter<"Tour"> | string | null
    airpotGoing?: StringNullableFilter<"Tour"> | string | null
    additionalInfo?: StringNullableFilter<"Tour"> | string | null
    additionalService?: JsonNullableListFilter<"Tour">
    externalFile?: JsonNullableFilter<"Tour">
    typeId?: IntNullableFilter<"Tour"> | number | null
    createdAt?: DateTimeFilter<"Tour"> | Date | string
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasskeyCreateWithoutUserInput = {
    id: string
    name?: string | null
    publicKey: string
    credentialID: string
    counter: number
    deviceType: string
    backedUp: boolean
    transports?: string | null
    createdAt?: Date | string | null
  }

  export type PasskeyUncheckedCreateWithoutUserInput = {
    id: string
    name?: string | null
    publicKey: string
    credentialID: string
    counter: number
    deviceType: string
    backedUp: boolean
    transports?: string | null
    createdAt?: Date | string | null
  }

  export type PasskeyCreateOrConnectWithoutUserInput = {
    where: PasskeyWhereUniqueInput
    create: XOR<PasskeyCreateWithoutUserInput, PasskeyUncheckedCreateWithoutUserInput>
  }

  export type PasskeyCreateManyUserInputEnvelope = {
    data: PasskeyCreateManyUserInput | PasskeyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type PasskeyUpsertWithWhereUniqueWithoutUserInput = {
    where: PasskeyWhereUniqueInput
    update: XOR<PasskeyUpdateWithoutUserInput, PasskeyUncheckedUpdateWithoutUserInput>
    create: XOR<PasskeyCreateWithoutUserInput, PasskeyUncheckedCreateWithoutUserInput>
  }

  export type PasskeyUpdateWithWhereUniqueWithoutUserInput = {
    where: PasskeyWhereUniqueInput
    data: XOR<PasskeyUpdateWithoutUserInput, PasskeyUncheckedUpdateWithoutUserInput>
  }

  export type PasskeyUpdateManyWithWhereWithoutUserInput = {
    where: PasskeyScalarWhereInput
    data: XOR<PasskeyUpdateManyMutationInput, PasskeyUncheckedUpdateManyWithoutUserInput>
  }

  export type PasskeyScalarWhereInput = {
    AND?: PasskeyScalarWhereInput | PasskeyScalarWhereInput[]
    OR?: PasskeyScalarWhereInput[]
    NOT?: PasskeyScalarWhereInput | PasskeyScalarWhereInput[]
    id?: StringFilter<"Passkey"> | string
    name?: StringNullableFilter<"Passkey"> | string | null
    publicKey?: StringFilter<"Passkey"> | string
    userId?: StringFilter<"Passkey"> | string
    credentialID?: StringFilter<"Passkey"> | string
    counter?: IntFilter<"Passkey"> | number
    deviceType?: StringFilter<"Passkey"> | string
    backedUp?: BoolFilter<"Passkey"> | boolean
    transports?: StringNullableFilter<"Passkey"> | string | null
    createdAt?: DateTimeNullableFilter<"Passkey"> | Date | string | null
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    passkeys?: PasskeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    passkeys?: PasskeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    passkeys?: PasskeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    passkeys?: PasskeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPasskeysInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasskeysInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasskeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasskeysInput, UserUncheckedCreateWithoutPasskeysInput>
  }

  export type UserUpsertWithoutPasskeysInput = {
    update: XOR<UserUpdateWithoutPasskeysInput, UserUncheckedUpdateWithoutPasskeysInput>
    create: XOR<UserCreateWithoutPasskeysInput, UserUncheckedCreateWithoutPasskeysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasskeysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasskeysInput, UserUncheckedUpdateWithoutPasskeysInput>
  }

  export type UserUpdateWithoutPasskeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasskeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LocationAttributeCreateManyLocationInput = {
    id?: number
    title?: string | null
    order?: number | null
    seo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LocationTourCreateManyLocationInput = {
    id?: number
    locationAttrId: number
    tourId: number
    createdAt?: Date | string
  }

  export type LocationAttributeUpdateWithoutLocationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    seo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationTours?: LocationTourUpdateManyWithoutLocationAttrNestedInput
  }

  export type LocationAttributeUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    seo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationTours?: LocationTourUncheckedUpdateManyWithoutLocationAttrNestedInput
  }

  export type LocationAttributeUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    seo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationTourUpdateWithoutLocationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAttr?: LocationAttributeUpdateOneRequiredWithoutLocationToursNestedInput
    tour?: TourUpdateOneRequiredWithoutLocationToursNestedInput
  }

  export type LocationTourUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationAttrId?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationTourUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationAttrId?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationTourCreateManyLocationAttrInput = {
    id?: number
    locationId: number
    tourId: number
    createdAt?: Date | string
  }

  export type LocationTourUpdateWithoutLocationAttrInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutLocationToursNestedInput
    tour?: TourUpdateOneRequiredWithoutLocationToursNestedInput
  }

  export type LocationTourUncheckedUpdateWithoutLocationAttrInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationTourUncheckedUpdateManyWithoutLocationAttrInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateManyTourInput = {
    id?: number
    name: string
    phoneNumber: string
    contactMethod: string
    status: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type LocationTourCreateManyTourInput = {
    id?: number
    locationId: number
    locationAttrId: number
    createdAt?: Date | string
  }

  export type CustomerUpdateWithoutTourInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    contactMethod?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    contactMethod?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    contactMethod?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationTourUpdateWithoutTourInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutLocationToursNestedInput
    locationAttr?: LocationAttributeUpdateOneRequiredWithoutLocationToursNestedInput
  }

  export type LocationTourUncheckedUpdateWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    locationAttrId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationTourUncheckedUpdateManyWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    locationAttrId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourCreateManyTourTypeInput = {
    id?: number
    name: string
    numberOfDays: number
    code?: string | null
    slug?: string | null
    images?: TourCreateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean | null
    isTicketIncluded?: boolean | null
    startDay?: TourCreatestartDayInput | string[]
    priceSingle?: number | null
    priceDouble?: number | null
    priceSingleSa?: number | null
    priceDoubleSa?: number | null
    priceSingleJo?: number | null
    priceDoubleJo?: number | null
    tourPrices?: TourCreatetourPricesInput | InputJsonValue[]
    tourCountries?: TourCreatetourCountriesInput | string[]
    tourHotels?: TourCreatetourHotelsInput | string[]
    tourIncludes?: TourCreatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourCreatetourExcludesInput | InputJsonValue[]
    tourSections?: TourCreatetourSectionsInput | InputJsonValue[]
    airpotComing?: string | null
    airpotGoing?: string | null
    additionalInfo?: string | null
    additionalService?: TourCreateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TourUpdateWithoutTourTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    numberOfDays?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    images?: TourUpdateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTicketIncluded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDay?: TourUpdatestartDayInput | string[]
    priceSingle?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDouble?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    tourPrices?: TourUpdatetourPricesInput | InputJsonValue[]
    tourCountries?: TourUpdatetourCountriesInput | string[]
    tourHotels?: TourUpdatetourHotelsInput | string[]
    tourIncludes?: TourUpdatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourUpdatetourExcludesInput | InputJsonValue[]
    tourSections?: TourUpdatetourSectionsInput | InputJsonValue[]
    airpotComing?: NullableStringFieldUpdateOperationsInput | string | null
    airpotGoing?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    additionalService?: TourUpdateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUpdateManyWithoutTourNestedInput
    locationTours?: LocationTourUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutTourTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    numberOfDays?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    images?: TourUpdateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTicketIncluded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDay?: TourUpdatestartDayInput | string[]
    priceSingle?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDouble?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    tourPrices?: TourUpdatetourPricesInput | InputJsonValue[]
    tourCountries?: TourUpdatetourCountriesInput | string[]
    tourHotels?: TourUpdatetourHotelsInput | string[]
    tourIncludes?: TourUpdatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourUpdatetourExcludesInput | InputJsonValue[]
    tourSections?: TourUpdatetourSectionsInput | InputJsonValue[]
    airpotComing?: NullableStringFieldUpdateOperationsInput | string | null
    airpotGoing?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    additionalService?: TourUpdateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUncheckedUpdateManyWithoutTourNestedInput
    locationTours?: LocationTourUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateManyWithoutTourTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    numberOfDays?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    images?: TourUpdateimagesInput | string[]
    seo?: NullableJsonNullValueInput | InputJsonValue
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTicketIncluded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDay?: TourUpdatestartDayInput | string[]
    priceSingle?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDouble?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleSa?: NullableFloatFieldUpdateOperationsInput | number | null
    priceSingleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    priceDoubleJo?: NullableFloatFieldUpdateOperationsInput | number | null
    tourPrices?: TourUpdatetourPricesInput | InputJsonValue[]
    tourCountries?: TourUpdatetourCountriesInput | string[]
    tourHotels?: TourUpdatetourHotelsInput | string[]
    tourIncludes?: TourUpdatetourIncludesInput | InputJsonValue[]
    tourExcludes?: TourUpdatetourExcludesInput | InputJsonValue[]
    tourSections?: TourUpdatetourSectionsInput | InputJsonValue[]
    airpotComing?: NullableStringFieldUpdateOperationsInput | string | null
    airpotGoing?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    additionalService?: TourUpdateadditionalServiceInput | InputJsonValue[]
    externalFile?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type PasskeyCreateManyUserInput = {
    id: string
    name?: string | null
    publicKey: string
    credentialID: string
    counter: number
    deviceType: string
    backedUp: boolean
    transports?: string | null
    createdAt?: Date | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasskeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: StringFieldUpdateOperationsInput | string
    credentialID?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    backedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasskeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: StringFieldUpdateOperationsInput | string
    credentialID?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    backedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasskeyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: StringFieldUpdateOperationsInput | string
    credentialID?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    backedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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