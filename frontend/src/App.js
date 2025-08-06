import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuIcon, X, Phone, Clock, MapPin, Instagram } from "lucide-react";
import HeroSection from "./components/HeroSection";
import TrainersSection from "./components/TrainersSection";
import SubscriptionsSection from "./components/SubscriptionsSection";
import ScheduleSection from "./components/ScheduleSection";
import FacilitiesSection from "./components/FacilitiesSection";
import ContactSection from "./components/ContactSection";
import RegistrationModal from "./components/RegistrationModal";
import { contactInfo } from "./data/mock";
import { Toaster } from "./components/ui/toaster";

const SideMenu = ({ isOpen, onClose }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative bg-white w-80 h-full shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">Навигация</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <nav className="p-6">
          <ul className="space-y-4">
            <li>
              <button 
                onClick={() => scrollToSection('hero')}
                className="w-full text-left p-3 hover:bg-blue-50 rounded-lg transition-colors text-gray-700 hover:text-blue-600"
              >
                Главная
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('trainers')}
                className="w-full text-left p-3 hover:bg-blue-50 rounded-lg transition-colors text-gray-700 hover:text-blue-600"
              >
                Тренеры
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('subscriptions')}
                className="w-full text-left p-3 hover:bg-blue-50 rounded-lg transition-colors text-gray-700 hover:text-blue-600"
              >
                Абонементы
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('schedule')}
                className="w-full text-left p-3 hover:bg-blue-50 rounded-lg transition-colors text-gray-700 hover:text-blue-600"
              >
                Расписание
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('facilities')}
                className="w-full text-left p-3 hover:bg-blue-50 rounded-lg transition-colors text-gray-700 hover:text-blue-600"
              >
                Наш центр
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full text-left p-3 hover:bg-blue-50 rounded-lg transition-colors text-gray-700 hover:text-blue-600"
              >
                Контакты
              </button>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t bg-gray-50">
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Пн-Пт: {contactInfo.workingHours.weekdays}</span>
            </div>
            <div className="flex items-center gap-2">
              <Instagram size={16} />
              <span>{contactInfo.instagram}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = ({ onMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuOpen}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <MenuIcon size={24} />
          </button>
          <div className="text-xl font-bold text-blue-600">UniBaby</div>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Phone size={16} />
            <span>{contactInfo.phone}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>Пн-Пт: {contactInfo.workingHours.weekdays}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [selectedSubscription, setSelectedSubscription] = useState(null);

  const handleSubscriptionPayment = (subscription) => {
    setSelectedSubscription(subscription);
    setIsRegistrationOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <main className="pt-16">
        <HeroSection />
        <TrainersSection />
        <SubscriptionsSection onPayment={handleSubscriptionPayment} />
        <ScheduleSection />
        <FacilitiesSection />
        <ContactSection />
      </main>

      <RegistrationModal 
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        subscription={selectedSubscription}
      />
      
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;