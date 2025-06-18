import { useState } from 'react';

//문제 1. 버튼 클릭 시 숫자 증가시키기
const Q1 = () => {
  const [count, setCount] = useState(0);

  const handleCountPlus = () => {
    setCount((currentCount) => currentCount + 1);
  };

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={handleCountPlus}>+1</button>
    </div>
  );
};

export default Q1;
