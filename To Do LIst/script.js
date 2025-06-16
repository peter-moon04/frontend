const addbtn = document.getElementById('addbtn')
const todoinput = document.getElementById('todoinput')
const todolist = document.getElementById('todolist')

addbtn.addEventListener('click', () => {
    const inputText = todoinput.value.trim();
    if (inputText === '') {
        return;
    }

    const li = document.createElement('li')

    li.innerHTML = `
    ${inputText} <button class="deletebtn"> delete </button>`;

    //todo리스트 추가
    todolist.appendChild(li);

    //todo 리스트 삭제
    li.querySelector('.deletebtn').addEventListener('click', () => {
        li.remove();
    })
})
