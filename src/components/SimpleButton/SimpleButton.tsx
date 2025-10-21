import React from 'react';

import styles from './SimpleButton.module.scss';

interface SimpleButtonProps {
  label?: string;
  onClick: (value: string) => void;
}
const SimpleButton = ({ label = 'Click', onClick }: SimpleButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    onClick(e.currentTarget.value);
  };

  return (
    <>
      <button onClick={handleClick} className={styles.simpleButton}>
        {label}
      </button>
    </>
  );
};

export default SimpleButton;
