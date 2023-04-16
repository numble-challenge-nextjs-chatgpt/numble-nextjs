import type { FC, InputHTMLAttributes } from 'react';
import styles from './CommonInput.module.css';

interface CommonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

const CommonInput: FC<CommonInputProps> = ({ label, id, ...inputProps }) => {
  return (
    <div className={styles['input-container']}>
      {label && (
        <label htmlFor={id} className={styles['input-label']}>
          {label}
        </label>
      )}
      <input className={styles['input']} type="text" id={id} {...inputProps} />
    </div>
  );
};

export default CommonInput;
