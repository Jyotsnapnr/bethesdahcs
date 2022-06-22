
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './components/pages/AboutPage'
import CareerPage from './components/pages/CareerPage';
import ContactPage from './components/pages/ContactPage'
import CovidPage from './components/pages/CovidPage';
import HomePage from './components/pages/HomePage'
import NotFound from './components/pages/NotFound'
import ServicesPage from './components/pages/ServicesPage'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<HomePage/>} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="covid" element={<CovidPage />} />
          <Route path="careers" element={<CareerPage />} />
          <Route path="*" element={<NotFound />} />
      
      </Routes>
    </BrowserRouter>
  );
}
