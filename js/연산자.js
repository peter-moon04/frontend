const a = 1;
const b = '1';
const c = 2;
const d = 1;

//논리 연산자
console.log('a===b && a<c', a === b && a < c); // false, 둘중 하나라도 false이면 false
console.log('a===b || a<c', a === b || a < c); // true, 둘중 하나라도 true이면 true

//부정 연산자
console.log(!false); // true, 반대로 이야기
console.log('a !== b', a !== b); // true, a와 b는 값이 다르다
console.log('a!=b', a != b); // false, a와 b는 값이 같다

// 비교 연산자
console.log('a==b', a == b); // true, 값만 비교 
console.log('a===b', a === b); // false, 값과 타입 모두 비교
console.log('a<c', a < c); // true, a는 c보다 작다
console.log('a>c', a > c); // false, a는 c보다 크지 않다
console.log('a<=b', a <= b); // true, a는 b보다 작거나 같다
console.log('a>=b', a >= b); // true, a는 b보다 크거나 같다

//증감 연산자
let e = 1;
e++
console.log('e++', e); // 2, e는 1에서 1 증가했다
e--
console.log('e--', e); // 1, e는 2에서 1 감소했다
console.log('++e', ++e); // 2, e는 1에서 1 증가했다
console.log('--e', --e); // 1, e는 2에서 1 감소했다

//나머지 연산
console.log(5 % 2); // 1, 5를 2로 나눈 나머지
