import memoize from 'memoize-immutable';

function f(arg1: string, arg2: number) {
  return arg1 + arg2;
}

var Cache = {
  get(k: [string, number]): string {
    return 'plop';
  },

  set(k: [string, number], v: string) {
  },

  has(k: [string, number]): boolean {
    return true;
  },
};

var IncorrectCache1 = {
  get(k: [number]): string {
    return "foo";
  },

  set(k: [number], v: string) {
  },

  has(k: [number]): boolean {
    return true;
  },
};

var IncorrectCache2 = {
  get(k: [string, number]): boolean {
    return "foo";
  },

  set(k: [string, number], v: boolean) {
  },

  has(k: [string, number]): boolean {
    return true;
  },
};

memoize(f);
memoize(f, { limit: 5 });
memoize(f, { limit: 'string' }); // $ExpectError
memoize(f, { cache: Cache });
memoize(f, { limit: 5, cache: Cache }); // $ExpectError
memoize(f, { cache: IncorrectCache1 }); // $ExpectError
memoize(f, { cache: IncorrectCache2 }); // $ExpectError

var memf1 = memoize(f);


(memf1("plop", 5): string);
(memf1("plop", 5): boolean); // $ExpectError
memf1(5, "plop"); // $ExpectError
