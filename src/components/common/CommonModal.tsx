import type { ReactNode, FC } from 'react';
import styles from './CommonModal.module.css';

export interface CommonModalProps {
  children?: ReactNode;
  onClose?: () => void;
}

const CommonModal: FC<CommonModalProps> = ({ children, onClose }) => {
  return (
    <>
      <div className={styles['modal-container']}>{children}</div>
      <div
        className={styles['modal-background']}
        onClick={() => {
          if (onClose) {
            onClose();
          }
        }}
      />
    </>
  );
};

export default CommonModal;
