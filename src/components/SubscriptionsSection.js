import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Star, Users, Clock, Award } from "lucide-react";
import { subscriptions } from "../data/mock";

const SubscriptionsSection = ({ onPayment }) => {
  return (
    <section id="subscriptions" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Абонементы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий абонемент для вашего ребенка
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {subscriptions.map((subscription) => (
            <Card 
              key={subscription.id} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                subscription.popular 
                  ? 'border-2 border-blue-500 shadow-xl scale-105' 
                  : 'border border-gray-200 hover:border-blue-300'
              }`}
            >
              {subscription.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-2 text-sm font-semibold">
                  <Star size={16} className="inline mr-1" />
                  Популярный
                </div>
              )}
              
              <CardHeader className={`text-center ${subscription.popular ? 'pt-12' : 'pt-6'}`}>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {subscription.name}
                </CardTitle>
                <Badge variant="outline" className="mx-auto mt-2 text-blue-600 border-blue-600">
                  <Users size={14} className="mr-1" />
                  {subscription.ageGroup}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Price */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {subscription.price}
                  </div>
                  <div className="text-gray-600 text-sm">
                    <Clock size={14} className="inline mr-1" />
                    {subscription.duration} • {subscription.lessons}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {subscription.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={() => onPayment(subscription)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    subscription.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 hover:bg-black text-white hover:shadow-lg'
                  }`}
                >
                  {subscription.popular ? (
                    <>
                      <Award size={16} className="mr-2" />
                      Оплатить
                    </>
                  ) : (
                    'Оплатить'
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Что включено в каждый абонемент?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="text-blue-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900">Малые группы</h4>
                <p className="text-gray-600 text-sm">Индивидуальный подход к каждому ребенку</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Award className="text-green-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900">Сертифицированные тренеры</h4>
                <p className="text-gray-600 text-sm">Опытные инструкторы с педагогическим образованием</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Star className="text-purple-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900">Современное оборудование</h4>
                <p className="text-gray-600 text-sm">Безопасный детский бассейн и инвентарь</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionsSection;