import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PortfolioDetails } from './components/PortfolioDetails';
import { PageLayout } from './components/layout/PageLayout';

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetails />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
