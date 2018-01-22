declare module 'memoize-immutable' {
  declare interface CacheInstance<K, V> {
    has(K): boolean;
    get(K): V;
    set(K, V): void;
  }

  // TODO also support caches that come from immutable
  declare type CacheConfig<F> = {|
    cache: CacheInstance<$Call<ExtractArgType, F>, $Call<ExtractReturnType, F>>,
  |};

  declare type LimitConfig = {|
    limit: number,
  |};

  declare type ExtractArgType = <A>((...rest: A) => any) => A;
  declare type ExtractReturnType = <V>((...rest: any) => V) => V;

  declare module.exports: <F: Function>(fn: F, config ?: CacheConfig<F> | LimitConfig) => F;
}

