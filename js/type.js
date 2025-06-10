const a = 1;
console.log('a타입', typeof a); // number
console.log(typeof a)

const b = '1';
console.log('b타입', typeof b); // string

const c = 2n;
console.log('c타입', typeof c); // bigint

const d = true;
console.log('d타입', typeof d); // boolean

const e = null;
console.log('e타입', typeof e); // object, null은 객체로 취급됨

const f = undefined;
console.log('f타입', typeof f); // undefined, 값이 정의되지 않음

const g = NaN;
console.log('g타입', typeof g); // number, NaN은 숫자 타입으로 취급됨

const h = Infinity
console.log('h타입', typeof h); // number, Infinity는 숫자 타입으로 취급됨