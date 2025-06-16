import { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  const handleCountPlus = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  return (
    <div className="flex h-[100px] flex-col items-center justify-center">
      <div> {count} </div>
      <button
        className="cursor-pointer bg-blue-100"
        onClick={() => {
          handleCountPlus();
        }}
      >
        {' '}
        +1
      </button>
    </div>
  );
};

export default Count;
