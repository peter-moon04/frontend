const a = 1;
const b = 10;

function functionName(x, y) {
    return x + y;
}

console.log(functionName(a, b));

// 화살표 함수 (Arrow Function)
const arrowfunction = (x, y) => {
    return x + y;
}

console.log(arrowfunction(a, b));

//비동기함수
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    console.log('1초 대기...')
    await wait(1000);
    console.log('끝')

}
run()