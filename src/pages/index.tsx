import PageContainer from '@/components/common/PageContainer';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';

import logoImg from '/public/images/numble-logo.png';

const Home = () => {
  return (
    <PageContainer>
      <main>
        <div className={styles['page-container']}>
          <div className={styles['middle-section']}>
            <Image src={logoImg} alt="numble logo" width={80} />
            <div className={styles['input-container']}>
              <label htmlFor="apiKey" className={styles['input-label']}>
                API KEY
              </label>
              <input className={styles['input']} type="text" id="apiKey" />
            </div>
          </div>
          <div className={styles['bottom-section']}>
            <button className={styles['button-login']}>Login</button>
            <a className={styles['text-button-get-key']}>KEY 발급받는 방법</a>
          </div>
        </div>
      </main>
    </PageContainer>
  );
};

export default Home;
