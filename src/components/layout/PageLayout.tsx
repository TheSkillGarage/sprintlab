import { ReactNode } from 'react';
import { Footer } from '../Footer';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-grow flex flex-col">{children}</div>
      <Footer />
    </div>
  );
}
