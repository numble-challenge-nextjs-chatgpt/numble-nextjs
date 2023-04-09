import { NextPage } from 'next';
import type { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: NextPage<PageContainerProps> = ({ children }) => {
  return <main className="container">{children}</main>;
};

export default PageContainer;
