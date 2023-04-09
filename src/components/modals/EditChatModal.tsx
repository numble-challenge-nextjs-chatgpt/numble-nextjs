import CommonModal, { CommonModalProps } from '@/components/common/CommonModal';
import type { FC } from 'react';

interface CreateChatModalProps extends CommonModalProps {}
const EditChatModal: FC<CreateChatModalProps> = ({ onClose }) => {
  return (
    <CommonModal onClose={onClose}>
      <div>채팅방 수정 모달</div>
    </CommonModal>
  );
};

export default EditChatModal;
