import { useState, useEffect } from 'react';

const SimpleCountdown = ({ initialCount = 0 }: { initialCount?: number }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  });

  return <div>Countdown: {count}</div>;
};

export default SimpleCountdown;
