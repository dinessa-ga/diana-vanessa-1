import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Dev from './pages/Dev';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/dev" element={<Dev />} />
    </Routes>
  );
}
