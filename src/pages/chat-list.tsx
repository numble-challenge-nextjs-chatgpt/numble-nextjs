import CommonButton from '@/components/common/CommonButton';
import PageContainer from '@/components/common/PageContainer';
import Image from 'next/image';
import styles from './chat-list.module.css';

import logoImg from '/public/images/numble-logo2.png';
import plusIcon from '/public/icons/plus-icon.png';

const ChatList = () => {
  return (
    <PageContainer>
      <div className={styles['page-container']}>
        <header className={styles['header']}>
          <Image src={logoImg} alt={'numble logo'} height={20} />
          <Image
            src={plusIcon}
            alt={'plus icon to add chat room'}
            height={26}
          />
        </header>
        <div style={{ overflow: 'scroll' }}>
          {Array.from({ length: 1000 }).map((_, index) => (
            <div>채팅 리스트</div>
          ))}
        </div>
        <div className={styles['button-container']}>
          <CommonButton text={'방 생성'} />
        </div>
      </div>
    </PageContainer>
  );
};

export default ChatList;
