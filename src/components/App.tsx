import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../Context/ThemeContext';
import { Header } from './Header'; 
import { Footer } from './Footer'; 
import { Home } from '../pages/Home';
import { Integrantes } from '../pages/Integrantes';
import { Sobre } from '../pages/Sobre';
import { Contato } from '../pages/Contato';
import { FAQ } from '../pages/Faq';
import { Cadastro } from '../pages/Cadastro';
import { Voluntario } from '../pages/Voluntario';
import { VoluntarioDetalhe } from '../pages/VoluntarioDetalhe';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="flex flex-col pb-[60px]">
          <Header />
          <Routes>
            <Route path="/voluntario/:id" element={<VoluntarioDetalhe />} />
            <Route path="/" element={<Home/>} />
            <Route path="/integrantes" element={<Integrantes/>} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/contato" element={<Contato/>} />
            <Route path="/faq" element={<FAQ/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/voluntario" element={<Voluntario/>} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;