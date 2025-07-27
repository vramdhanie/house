import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ImageGallery from './components/ImageGallery';
import PropertyDetails from './components/PropertyDetails';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <ImageGallery />
        <PropertyDetails />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
