import React from "react";
import { Card, CardContent } from "./ui/card";
import { Waves, Shield, Heart, Star, Droplets, Users } from "lucide-react";
import { facilitiesData } from "../data/mock";

const FacilitiesSection = () => {
  const features = [
    {
      icon: <Waves className="text-blue-600" size={24} />,
      title: "Детский бассейн",
      description: "Специально адаптированный для детей разного возраста"
    },
    {
      icon: <Shield className="text-green-600" size={24} />,
      title: "Безопасность",
      description: "Система безопасности и медицинский контроль"
    },
    {
      icon: <Heart className="text-red-500" size={24} />,
      title: "Забота",
      description: "Индивидуальный подход к каждому ребенку"
    },
    {
      icon: <Star className="text-yellow-500" size={24} />,
      title: "Качество",
      description: "Современное оборудование и чистота"
    },
    {
      icon: <Droplets className="text-cyan-500" size={24} />,
      title: "Чистая вода",
      description: "Система очистки и поддержания качества воды"
    },
    {
      icon: <Users className="text-purple-600" size={24} />,
      title: "Комфорт",
      description: "Удобные раздевалки и зона ожидания"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Наш центр
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Современное оборудование и комфортные условия для обучения плаванию
          </p>
        </div>

        {/* Facilities Images */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {facilitiesData.map((facility, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{facility.title}</h3>
                  <p className="text-blue-100 text-sm">{facility.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Довольных детей</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">3</div>
              <div className="text-gray-600">Опытных тренера</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">5</div>
              <div className="text-gray-600">Лет работы</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">100%</div>
              <div className="text-gray-600">Безопасность</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;