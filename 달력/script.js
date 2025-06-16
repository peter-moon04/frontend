const calendarBody = document.getElementById('calendarBody');
const monthYear = document.getElementById('monthYear');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const renderCalendar = (month, year) => {
  calendarBody.innerHTML = '';
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  monthYear.textContent = `${year}년 ${month + 1}월`;

  let date = 1;

  for (let i = 0; i < 6; i++) {
    // 최대 6주
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      // 최대 7일
      const cell = document.createElement('td');

      // 첫 번째 주 첫 번째 날짜 위치 맞추기
      if (i === 0 && j < firstDay) {
        // 빈칸 처리 (달력이 시작하기 전)
        cell.textContent = '';
      } else if (date > daysInMonth) {
        // 달력의 날짜가 끝난 후 빈칸 처리
        cell.textContent = '';
      } else {
        // 날짜 출력
        cell.textContent = date;

        if (
          date === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear()
        ) {
          cell.classList.add('today'); // 스타일은 CSS에서 정의
        }

        // ✅ 요일별 색상 (일: 0, 토: 6)
        if (j === 0) {
          cell.style.color = 'red'; // 일요일
        } else if (j === 6) {
          cell.style.color = 'blue'; // 토요일
        }

        date++;  // 날짜 증가
      }
      // 조건: 날짜를 제대로 td에 넣고, 오늘이면 today 클래스 추가
      // 힌트: firstDay, daysInMonth, today.getDate(), today.getMonth(), today.getFullYear() 등 활용

      // todo: 화이팅!!

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);

    if (date > daysInMonth) break;
  }
};

prevBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});


nextBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);

const picker = document.getElementById('picker');
const yearSelect = document.getElementById('yearSelect');
const monthSelect = document.getElementById('monthSelect');
const goBtn = document.getElementById('goBtn');

// 📌 monthYear 클릭 시 선택 UI 보여주기
monthYear.addEventListener('click', () => {
  picker.style.display = 'block';

  // 연도 목록 초기화
  yearSelect.innerHTML = '';
  for (let y = 2000; y <= 2030; y++) {
    const option = document.createElement('option');
    option.value = y;
    option.textContent = `${y}년`;
    if (y === currentYear) option.selected = true;
    yearSelect.appendChild(option);
  }

  monthSelect.value = currentMonth;
});

// 📌 이동 버튼 클릭 시 선택한 연/월로 이동
goBtn.addEventListener('click', () => {
  currentYear = parseInt(yearSelect.value);
  currentMonth = parseInt(monthSelect.value);
  renderCalendar(currentMonth, currentYear);
  picker.style.display = 'none';
});