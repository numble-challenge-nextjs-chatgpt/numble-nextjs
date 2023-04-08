import type { FC } from 'react';

import styles from './CommonButton.module.css';

interface CommonButtonProps {
  text: string;
  onClick?: () => void;
  buttonType?: 'button' | 'submit' | 'reset';
}
const CommonButton: FC<CommonButtonProps> = ({
  text,
  onClick,
  buttonType = 'button',
}) => {
  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={styles['common-button']}
    >
      {text}
    </button>
  );
};

export default CommonButton;
