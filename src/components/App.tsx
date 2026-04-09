import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Home } from '../pages/Home';
import { Footer } from '../components/Footer'; 
import { Integrantes } from '../pages/Integrantes';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/integrantes" element={<Integrantes />} />
</Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;