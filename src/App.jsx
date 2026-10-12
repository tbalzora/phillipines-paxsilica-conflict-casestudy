import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider } from './context/ThemeContext';
import CasePage from './pages/CasePage';
import ConceptsPage from './pages/ConceptsPage';
import ConflictPage from './pages/ConflictPage';
import TechnologyPage from './pages/TechnologyPage';

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<CasePage />} />
            <Route path="technology" element={<TechnologyPage />} />
            <Route path="conflict" element={<ConflictPage />} />
            <Route path="concepts" element={<ConceptsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}
