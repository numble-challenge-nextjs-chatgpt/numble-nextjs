import CommonModal, { CommonModalProps } from '@/components/common/CommonModal';
import type { FC } from 'react';

interface CreateChatModalProps extends CommonModalProps {}
const CreateChatModal: FC<CreateChatModalProps> = ({ onClose }) => {
  return (
    <CommonModal onClose={onClose}>
      <div>채팅방 생성 모달</div>
    </CommonModal>
  );
};

export default CreateChatModal;
