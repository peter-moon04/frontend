//html dom요소 가져오기
const btn = document.getElementById('eventbtn');
const countdisplay = document.getElementById('count');

let count = 0;

//button event
btn.addEventListener('click', function () {
    count += 1;
    countdisplay.textContent = count;  //screan show count
});