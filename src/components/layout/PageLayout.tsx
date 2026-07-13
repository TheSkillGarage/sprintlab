import { ReactNode } from 'react';
import { Footer } from '../Footer';
import { HomeCta, HomeHeader } from '../home';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HomeHeader />
      <div className="flex-grow flex flex-col">{children}</div>
      <HomeCta />
      <Footer />
    </div>
  );
}
