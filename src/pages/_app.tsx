import '@/styles/globals.css';
import { TokenProvider } from '@/contexts/token';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* 공통 헤더 */}
      <Head>
        <title>AI chat service</title>
        <meta name="description" content="Next.js AI chat service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* 전역 상태 Context API 로 관리 */}
      <TokenProvider>
        <Component {...pageProps} />
      </TokenProvider>
    </>
  );
}
