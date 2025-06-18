import { useEffect, useState } from 'react';

//1초마다 숫자 증가
const Q4 = () => {
  const [count, setCount] = useState(0);

  const handleCountPlus = () => {
    setCount((currentCount) => currentCount + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleCountPlus();
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('타이머 중단');
    };
  }, []);

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={handleCountPlus}>+1</button>
    </div>
  );
};
export default Q4;
