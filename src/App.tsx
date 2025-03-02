import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import FAQPage from './pages/FAQPage';
import CertificationsPage from './pages/CertificationsPage';
import CareInstructionsPage from './pages/CareInstructionsPage';
import SustainabilityGuidesPage from './pages/SustainabilityGuidesPage';
import TroubleshootingPage from './pages/TroubleshootingPage';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/care-instructions" element={<CareInstructionsPage />} />
            <Route path="/sustainability-guides" element={<SustainabilityGuidesPage />} />
            <Route path="/troubleshooting" element={<TroubleshootingPage />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;