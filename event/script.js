const parentEL = document.getElementById('parent')
const childEl = document.getElementById('child')
const parentCountEl = document.getElementById('parentcount')
const childCountEl = document.getElementById('childcount')

let parentcount = 0;
let childcount = 0;

parentEL.addEventListener('click', () => {
    parentcount += 1;
    parentCountEl.textContent = parentcount
})

childEl.addEventListener('click', (e) => {
    e.stopPropagation(); //이벤트 버블링 방지
    childcount += 1;
    childCountEl.textContent = childcount
})