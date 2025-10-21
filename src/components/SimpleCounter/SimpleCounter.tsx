import { useState } from 'react';
import { SimpleButton } from '@@components';

import styles from './SimpleCounter.module.scss';

interface ButtonCounterProps {
  initialCount?: number;
}

const SimpleCounter = ({ initialCount = 0 }: ButtonCounterProps) => {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={styles.simpleCounter}>
      <SimpleButton onClick={handleClick} label="Click to increase" />
      <span>Current count: {count}</span>
    </div>
  );
};

export default SimpleCounter;
