import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Award, Clock, Users } from "lucide-react";
import { trainers } from "../data/mock";

const TrainersSection = () => {
  const [activeTrainer, setActiveTrainer] = useState(0);

  const nextTrainer = () => {
    setActiveTrainer((prev) => (prev + 1) % trainers.length);
  };

  const prevTrainer = () => {
    setActiveTrainer((prev) => (prev - 1 + trainers.length) % trainers.length);
  };

  const currentTrainer = trainers[activeTrainer];

  return (
    <section id="trainers" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Наши тренеры
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Профессиональные инструкторы с многолетним опытом работы с детьми
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevTrainer}
              className="rounded-full p-3 hover:bg-blue-100 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="flex gap-2">
              {trainers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTrainer(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTrainer 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextTrainer}
              className="rounded-full p-3 hover:bg-blue-100 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Trainer Card */}
          <Card className="overflow-hidden shadow-2xl border-0 bg-white">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <img
                    src={currentTrainer.image}
                    alt={currentTrainer.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {currentTrainer.name}
                    </h3>
                    <p className="text-xl text-blue-600 font-semibold mb-4">
                      {currentTrainer.specialization}
                    </p>
                    <div className="flex items-center gap-2 text-gray-600 mb-6">
                      <Clock size={18} />
                      <span>{currentTrainer.experience}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    {currentTrainer.description}
                  </p>

                  {/* Certifications */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Award size={20} className="text-blue-600" />
                      <span className="font-semibold text-gray-900">Сертификаты:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentTrainer.certifications.map((cert, index) => (
                        <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 px-3 py-1">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Записаться на занятие
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            {trainers.map((trainer, index) => (
              <button
                key={trainer.id}
                onClick={() => setActiveTrainer(index)}
                className={`p-4 rounded-lg transition-all duration-300 text-center min-w-[120px] ${
                  index === activeTrainer
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                }`}
              >
                <div className="font-semibold text-sm">{trainer.name.split(' ')[0]}</div>
                <div className="text-xs opacity-75 mt-1">
                  {trainer.specialization.split(' ')[0]}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;