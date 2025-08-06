import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Phone, Clock, Instagram, Mail, Navigation } from "lucide-react";
import { contactInfo } from "../data/mock";

const ContactSection = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize 2GIS map
    const script = document.createElement('script');
    script.src = 'https://mapgl.2gis.com/api/js/v1?key=43f2e69b-d76c-4a96-ae35-a5434860146c';
    script.onload = () => {
      if (window.mapgl && mapRef.current) {
        const map = new window.mapgl.Map(mapRef.current, {
          center: [76.945, 43.236], // Almaty coordinates
          zoom: 15,
          key: '43f2e69b-d76c-4a96-ae35-a5434860146c'
        });

        // Add marker
        new window.mapgl.Marker(map, {
          coordinates: [76.945, 43.236],
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Контакты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами для записи на занятия или получения консультации
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Информация для связи
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Адрес</h4>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Телефон</h4>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="text-gray-600 hover:text-green-600 transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram className="text-pink-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Instagram</h4>
                      <a 
                        href="https://www.instagram.com/unibaby_uniflex"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-pink-600 transition-colors"
                      >
                        {contactInfo.instagram}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Часы работы</h4>
                      <div className="text-gray-600 space-y-1">
                        <div>Пн-Пт: {contactInfo.workingHours.weekdays}</div>
                        <div>Сб-Вс: {contactInfo.workingHours.weekend}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => window.open(`tel:${contactInfo.phone}`, '_self')}
                    >
                      <Phone size={16} className="mr-2" />
                      Позвонить
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.open(contactInfo.mapUrl, '_blank')}
                    >
                      <Navigation size={16} className="mr-2" />
                      Маршрут
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Как нас найти
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div 
                  ref={mapRef}
                  className="w-full h-96 bg-gray-200"
                  style={{ minHeight: '384px' }}
                >
                  {/* Fallback if map doesn't load */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
                    <div className="text-center">
                      <MapPin size={48} className="text-blue-600 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">Загрузка карты...</p>
                      <Button 
                        onClick={() => window.open(contactInfo.mapUrl, '_blank')}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Открыть в 2ГИС
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="text-center p-6 border border-blue-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Phone className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Записаться на занятие</h3>
              <p className="text-gray-600 text-sm">Позвоните нам для записи</p>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open(`tel:${contactInfo.phone}`, '_self')}
              >
                {contactInfo.phone}
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border border-green-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Instagram className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Следите за нами</h3>
              <p className="text-gray-600 text-sm">Новости и фото в Instagram</p>
              <Button 
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                onClick={() => window.open('https://www.instagram.com/unibaby_uniflex', '_blank')}
              >
                @unibaby_uniflex
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border border-purple-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Mail className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Напишите нам</h3>
              <p className="text-gray-600 text-sm">Вопросы и предложения</p>
              <Button 
                variant="outline"
                className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                onClick={() => window.open(`mailto:${contactInfo.email}`, '_self')}
              >
                {contactInfo.email}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;