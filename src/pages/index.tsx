import CommonButton from '@/components/common/CommonButton';
import CommonInput from '@/components/common/CommonInput';
import PageContainer from '@/components/common/PageContainer';
import { useTokenContext } from '@/contexts/token';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';

import logoImg from '/public/images/numble-logo.png';
import { useEffect } from 'react';

const Home = () => {
  const [apiKey, setApiKey] = useTokenContext();
  const loginButtonHandler = () => {
    console.log(apiKey);
  };

  return (
    <PageContainer>
      <div className={styles['page-container']}>
        <div className={styles['middle-section']}>
          <Image src={logoImg} alt="numble logo" width={80} />
          <CommonInput
            id="apiKey"
            label="API KEY"
            value={apiKey}
            onChange={e => setApiKey(e.target.value)}
          />
        </div>
        <div className={styles['bottom-section']}>
          <CommonButton onClick={loginButtonHandler}>Login</CommonButton>
          <a
            className={styles['text-button-get-key']}
            href="https://platform.openai.com/docs/quickstart/add-your-api-key"
          >
            KEY 발급받는 방법
          </a>
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
