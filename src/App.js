import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/home/Home'
import Contatti from './pages/contatti/Contatti'
import About from './pages/about/About'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Esercizio1 from './pages/esercizi/esercizio1/Esercizio1';
import Esercizio2 from './pages/esercizi/esercizio2/Esercizio2';
import Esercizio3 from './pages/esercizi/esercizio3/Esercizio3';
import Esercizio4 from './pages/esercizi/esercizio4/Esercizio4';
import Orders from './pages/orders/Orders';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Index */}
        <Route exact path="/" element={<Home />} />
        {/* Route di prova */}
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/about" element={<About />} />
        {/* Esercizi */}
        <Route path="/esercizio/1" element={<Esercizio1 nome="Riccardo" cognome="Priolo" />} />
        <Route path="/esercizio/2" element={<Esercizio2 nome="Luca" cognome="Rossi" />} />
        <Route path="/esercizio/3" element={<Esercizio3 nome="Umberto" cognome="Smaila" />} />
        <Route path="/esercizio/4" element={<Esercizio4 />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
