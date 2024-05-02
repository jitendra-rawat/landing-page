import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Sponsorship from './pages/Sponsorship'
import Speakers from './pages/Speakers';
import Travel from './pages/Travel'
import Faq from './pages/Faq'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
