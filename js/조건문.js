const a = 1;
const b = 2;
const c = 1;

if (a === b) {
    console.log('a와 b는 같습니다');
} else if (a === c) {
    console.log('a와 c는 같습니다');
}
else if (b === c) {
    console.log('b와 c는 같습니다');
}
else if (a !== c) {
    console.log('a와 c는 다릅니다');
}
else if (b !== c) {
    console.log('b와 c는 다릅니다');
}
else if (a !== b) {
    console.log('a와 b는 다릅니다');
}
else {
    console.log('첫번째 조건이 달라서 여기로 옴');
}

//삼황 연산자
const result = a === b ? 'a와 c는 같습니다' : 'a와 c는 다릅니다';
console.log(result);

// switch문
switch (a) {
    case b:
        console.log('a와 b는 같습니다');
        break;
    case c:
        console.log('a와 c는 같습니다');
        break;
    default:
        console.log('a와 b, c 모두 다릅니다');
}