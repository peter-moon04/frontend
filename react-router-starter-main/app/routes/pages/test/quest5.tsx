import { useEffect, useState } from 'react';

// Q5: 버튼을 눌렀을 때 클릭 횟수를 저장하고, 5번이 되면 콘솔에 "5번 클릭!"을 출력하는 컴포넌트
const Q5 = () => {
  const [count, setCount] = useState(0);

  const handleCountPlus = () => {
    setCount((currentCount) => currentCount + 1);
  };

  // 1초마다 자동 증가
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count === 5) {
      console.log('count is 5th');
      console.log('return 0');
      setCount(0); // 5가 되면 0으로 초기화
    }
  }, [count]);

  return (
    <div>
      <p>클릭 횟수: {count}</p>
      <button className="cursor-pointer" onClick={handleCountPlus}>
        클릭하기
      </button>
    </div>
  );
};

export default Q5;
