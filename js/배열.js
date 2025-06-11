const array = [1, 2, 3, 4, 5];
const humansarray = ['peter', 'john', 'mary', 'jane', 'doe'];

const objectarry = [
    { name: 'peter', },
    { name: 'john', },
    { name: 'mary', },
    { name: 'jane', },
    { name: 'doe', }
]

//push 마지막에 추가
array.push(6);
console.log(array);

//pop 마지막에 제거
array.pop();
console.log(array);

//unshift 처음에 추가
array.unshift(0);
console.log(array);

//shift 처음에 제거
array.shift();
console.log(array);

//splice 중간에 추가
//splice(시작인덱스, 제거할개수, 추가할값)
array.splice(2, 0, 3);
console.log(array);

//slice 배열 일부를 복사
// slice(시작인덱스, 끝인덱스)
const slice = array.slice(1, 4);
console.log(slice);

//concat 배열 합치기
const array2 = [6, 7, 8];
console.log(...array, ...array2);
console.log(array.concat(array2));

const concat = array.concat(array2);
console.log(concat);

//indexOf 특정값의 인덱스 찾기
const index = array.indexOf(3);
console.log(index);

//includes 특정값이 있는지 확인
const includes = array.includes(3);
console.log(includes);

//map 배열의 각 요소에 함수를 적용하여 새로운 배열 생성
const newarray = array.map((e) => e + 2);
console.log(newarray);

//filter 배열의 각 요소에 함수를 적용하여 조건을 만족하는 요소만 추출
const filterArray = array.filter((e) => e % 2 === 1);
console.log(filterArray);

//find 배열의 각 요소에 함수를 적용하여 조건을 만족하는 첫 번째 요소 찾기
const findarray = array.find((e) => e % 2 === 0);
console.log(findarray);

//reduce 배열의 각 요소에 함수를 적용하여 하나의 값으로 축약
//reduce((누적값, 현재값) => {}) 
const reducearray = array.reduce((acc, cur) => { return acc * cur });
console.log(reducearray);

//sort 배열 정렬
const nonsortarray = [3, 2, 5, 1, 4];
const sortarray = nonsortarray.sort();
const realsorarray = nonsortarray.sort((a, b) => a - b); //오름차순 정렬
console.log(sortarray);