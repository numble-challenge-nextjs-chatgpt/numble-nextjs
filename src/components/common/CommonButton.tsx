import type { ButtonHTMLAttributes, FC } from 'react';

import styles from './CommonButton.module.css';

interface CommonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const CommonButton: FC<CommonButtonProps> = ({ children, ...props }) => {
  return (
    <button className={styles['common-button']} {...props}>
      {children}
    </button>
  );
};

export default CommonButton;
