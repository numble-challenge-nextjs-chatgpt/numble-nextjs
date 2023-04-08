import { NextPage } from 'next';
import type { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: NextPage<PageContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default PageContainer;
