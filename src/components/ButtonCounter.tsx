import {useState} from "react";

import styles from './ButtonCounter.module.scss';

interface ButtonCounterProps {
  initialCount?: number;
}

const ButtonCounter = ({ initialCount = 0 }: ButtonCounterProps) => {

    const [count, setCount] = useState(initialCount);

    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <button onClick={handleClick} className={styles.buttonCounter}>
            Count: {count}
        </button>
    )
}

export default ButtonCounter;