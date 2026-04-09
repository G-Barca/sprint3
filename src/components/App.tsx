import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './Header'; 
import { Footer } from './Footer'; 
import { Home } from '../pages/Home';
import { Integrantes } from '../pages/Integrantes';
import { Sobre } from '../pages/Sobre';
import { Contato } from '../pages/Contato';
import { FAQ } from '../pages/Faq';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;