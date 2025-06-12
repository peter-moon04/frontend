//html dom요소 가져오기
const btn = document.getElementById('eventbtn');
const container = document.getElementById('container');

let count = 0;

//button event
btn.addEventListener('click', function () {
    count += 1;
    const newDiv = document.createElement('div');
    newDiv.className = 'box';
    newDiv.textContent = ` ${count} 번째 박스입니다.`;
    container.appendChild(newDiv);

});