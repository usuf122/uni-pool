import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Droplets, Star, Shield, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { heroImages } from "../data/mock";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const scrollToSubscriptions = () => {
    const element = document.getElementById('subscriptions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-110' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 bg-blue-500 bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-4">
            <Droplets size={20} />
            <span className="text-sm font-medium">Детская школа плавания</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          UniBaby
          <span className="block text-3xl md:text-4xl font-normal text-blue-200 mt-2">
            Плавание для детей
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Обучаем детей плавать с радостью и безопасностью. 
          Профессиональные тренеры, современное оборудование.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
            <Star size={18} />
            <span>Опытные тренеры</span>
          </div>
          <div className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
            <Shield size={18} />
            <span>Безопасность</span>
          </div>
          <div className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
            <Heart size={18} />
            <span>Индивидуальный подход</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToSubscriptions}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Выбрать абонемент
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm transition-all duration-300"
          >
            Связаться с нами
          </Button>
        </div>
      </div>

      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 animate-bounce opacity-20">
        <Droplets size={30} className="text-blue-200" />
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce delay-1000 opacity-20">
        <Droplets size={24} className="text-blue-200" />
      </div>
    </section>
  );
};

export default HeroSection;