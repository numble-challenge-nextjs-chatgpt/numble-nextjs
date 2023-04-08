import type { FC } from 'react';
import styles from './CommonInput.module.css';

interface CommonInputProps {
  id: string;
  label?: string;
}

const CommonInput: FC<CommonInputProps> = ({ label, id }) => {
  return (
    <div className={styles['input-container']}>
      {label && (
        <label htmlFor={id} className={styles['input-label']}>
          {label}
        </label>
      )}
      <input className={styles['input']} type="text" id={id} />
    </div>
  );
};

export default CommonInput;
