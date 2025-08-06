import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";
import { scheduleData } from "../data/mock";

const ScheduleSection = () => {
  const days = Object.keys(scheduleData);
  const [activeDay, setActiveDay] = useState(0);

  const nextDay = () => {
    setActiveDay((prev) => (prev + 1) % days.length);
  };

  const prevDay = () => {
    setActiveDay((prev) => (prev - 1 + days.length) % days.length);
  };

  const currentDay = days[activeDay];
  const currentSchedule = scheduleData[currentDay];

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Расписание занятий
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Удобное время для занятий вашего ребенка
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Days Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {days.map((day, index) => (
              <button
                key={day}
                onClick={() => setActiveDay(index)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  index === activeDay
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center items-center gap-4 mb-8 md:hidden">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevDay}
              className="rounded-full"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <h3 className="text-xl font-bold text-gray-900 min-w-[120px] text-center">
              {currentDay}
            </h3>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextDay}
              className="rounded-full"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Schedule Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {currentSchedule.map((lesson, index) => (
              <Card 
                key={index} 
                className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200"
              >
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 pb-4">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-blue-600" />
                      <span className="text-xl font-bold text-gray-900">{lesson.time}</span>
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {lesson.group.match(/\(([^)]+)\)/)?.[1] || lesson.group}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {lesson.group.split('(')[0].trim()}
                      </h4>
                      <div className="flex items-center gap-2 text-gray-600">
                        <User size={16} />
                        <span className="text-sm">{lesson.trainer}</span>
                      </div>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Schedule Info */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Как проходят занятия?
              </h3>
              <p className="text-gray-600">Каждое занятие длится 45 минут и включает:</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">5</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Разминка</h4>
                <p className="text-gray-600 text-sm">Подготовка к занятию</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">30</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Основная часть</h4>
                <p className="text-gray-600 text-sm">Обучение технике плавания</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">10</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Игры</h4>
                <p className="text-gray-600 text-sm">Веселые водные игры</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;