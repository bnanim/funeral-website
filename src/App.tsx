import Home from './pages/Home.tsx';
import Gallery from './pages/Gallery.tsx';
import Tributes from './pages/Tributes.tsx';
import Information from './pages/Information.tsx';

import './styles/global.css';
import './styles/animations.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import { useEffect } from 'react';
import { initReveal } from './utils/reveal';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Re-init reveal whenever the route (location.pathname) changes
    // scroll to top on route change so Link navigation lands at page top
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
    const cleanup = initReveal();
    return () => cleanup && cleanup();
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/tributes' element={<Tributes />} />
        <Route path='/information' element={<Information />} />
      </Routes>
    </>
  )
}

export default App;
