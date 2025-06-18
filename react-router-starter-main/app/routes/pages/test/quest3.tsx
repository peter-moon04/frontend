//문제 3. 버튼 누르면 3초 후 메시지 표시

import { useState } from 'react';

const Q3 = () => {
  const [message, setMessage] = useState(''); // 메시지를 저장할 상태

  const handleClick = () => {
    setTimeout(() => {
      setMessage('눌림!'); // 3초 후 메시지 표시
    }, 3000);
  };

  return (
    <div>
      <button className="cursor-pointer" onClick={handleClick}>
        누르기
      </button>
      <p>{message}</p> {/* message가 있을 때만 화면에 보임 */}
    </div>
  );
};

export default Q3;
