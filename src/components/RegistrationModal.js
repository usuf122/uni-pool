import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { useToast } from "../hooks/use-toast";
import { X, CreditCard, User, Baby, Phone, Calendar, DollarSign } from "lucide-react";

const RegistrationModal = ({ isOpen, onClose, subscription }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    parentName: '',
    parentPhone: '',
    childName: '',
    childAge: '',
    childGender: '',
    medicalInfo: '',
    emergencyContact: '',
    paymentMethod: 'kaspi'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Введите имя родителя';
    }
    
    if (!formData.parentPhone.trim()) {
      newErrors.parentPhone = 'Введите номер телефона';
    } else if (!/^[+]?[0-9\s-()]{10,}$/.test(formData.parentPhone)) {
      newErrors.parentPhone = 'Введите корректный номер телефона';
    }
    
    if (!formData.childName.trim()) {
      newErrors.childName = 'Введите имя ребенка';
    }
    
    if (!formData.childAge) {
      newErrors.childAge = 'Выберите возраст ребенка';
    }
    
    if (!formData.childGender) {
      newErrors.childGender = 'Выберите пол ребенка';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock registration success
      const registrationData = {
        ...formData,
        subscription: subscription,
        registrationDate: new Date().toISOString(),
        paymentStatus: 'pending'
      };

      console.log('Registration data:', registrationData);

      // Show success message
      toast({
        title: "Регистрация успешна!",
        description: `Спасибо за выбор абонемента "${subscription?.name}". Мы свяжемся с вами в ближайшее время для подтверждения записи.`,
      });

      // Simulate Kaspi payment redirect
      if (formData.paymentMethod === 'kaspi') {
        toast({
          title: "Переход к оплате",
          description: "Перенаправляем в Kaspi Pay для оплаты...",
        });
        
        // In real app, redirect to Kaspi Pay
        setTimeout(() => {
          window.open('https://kaspi.kz', '_blank');
        }, 1000);
      }

      // Reset form and close modal
      setFormData({
        parentName: '',
        parentPhone: '',
        childName: '',
        childAge: '',
        childGender: '',
        medicalInfo: '',
        emergencyContact: '',
        paymentMethod: 'kaspi'
      });
      onClose();
      
    } catch (error) {
      toast({
        title: "Ошибка регистрации",
        description: "Произошла ошибка при отправке данных. Попробуйте снова.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!subscription) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <User size={24} className="text-blue-600" />
            Регистрация на курс
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </DialogHeader>

        {/* Subscription Info */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{subscription.name}</h3>
              <p className="text-gray-600">{subscription.ageGroup}</p>
            </div>
            <Badge className="bg-blue-600 text-white text-lg px-3 py-1">
              {subscription.price}
            </Badge>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            {subscription.duration} • {subscription.lessons}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Parent Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <User size={20} className="text-blue-600" />
              Информация о родителе
            </h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="parentName">Имя и фамилия родителя *</Label>
                <Input
                  id="parentName"
                  value={formData.parentName}
                  onChange={(e) => handleInputChange('parentName', e.target.value)}
                  placeholder="Введите ваше имя и фамилию"
                  className={errors.parentName ? 'border-red-500' : ''}
                />
                {errors.parentName && (
                  <p className="text-red-500 text-sm mt-1">{errors.parentName}</p>
                )}
              </div>

              <div>
                <Label htmlFor="parentPhone">Номер телефона *</Label>
                <Input
                  id="parentPhone"
                  value={formData.parentPhone}
                  onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                  placeholder="+7 (xxx) xxx-xx-xx"
                  className={errors.parentPhone ? 'border-red-500' : ''}
                />
                {errors.parentPhone && (
                  <p className="text-red-500 text-sm mt-1">{errors.parentPhone}</p>
                )}
              </div>
            </div>
          </div>

          {/* Child Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Baby size={20} className="text-green-600" />
              Информация о ребенке
            </h4>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="childName">Имя ребенка *</Label>
                <Input
                  id="childName"
                  value={formData.childName}
                  onChange={(e) => handleInputChange('childName', e.target.value)}
                  placeholder="Введите имя ребенка"
                  className={errors.childName ? 'border-red-500' : ''}
                />
                {errors.childName && (
                  <p className="text-red-500 text-sm mt-1">{errors.childName}</p>
                )}
              </div>

              <div>
                <Label htmlFor="childAge">Возраст *</Label>
                <Select value={formData.childAge} onValueChange={(value) => handleInputChange('childAge', value)}>
                  <SelectTrigger className={errors.childAge ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Выберите возраст" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(10)].map((_, i) => (
                      <SelectItem key={i + 3} value={`${i + 3}`}>
                        {i + 3} лет
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.childAge && (
                  <p className="text-red-500 text-sm mt-1">{errors.childAge}</p>
                )}
              </div>

              <div>
                <Label htmlFor="childGender">Пол *</Label>
                <Select value={formData.childGender} onValueChange={(value) => handleInputChange('childGender', value)}>
                  <SelectTrigger className={errors.childGender ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Выберите пол" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Мальчик</SelectItem>
                    <SelectItem value="female">Девочка</SelectItem>
                  </SelectContent>
                </Select>
                {errors.childGender && (
                  <p className="text-red-500 text-sm mt-1">{errors.childGender}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="medicalInfo">Медицинская информация</Label>
              <Input
                id="medicalInfo"
                value={formData.medicalInfo}
                onChange={(e) => handleInputChange('medicalInfo', e.target.value)}
                placeholder="Аллергии, особенности здоровья (необязательно)"
              />
            </div>

            <div>
              <Label htmlFor="emergencyContact">Экстренный контакт</Label>
              <Input
                id="emergencyContact"
                value={formData.emergencyContact}
                onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                placeholder="Номер для экстренной связи (необязательно)"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <CreditCard size={20} className="text-purple-600" />
              Способ оплаты
            </h4>
            
            <div className="grid gap-3">
              <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="kaspi"
                  checked={formData.paymentMethod === 'kaspi'}
                  onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <div className="flex items-center gap-2">
                  <DollarSign size={20} className="text-green-600" />
                  <span className="font-medium">Kaspi Pay</span>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Рекомендуется
                  </Badge>
                </div>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Отмена
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Регистрация...
                </div>
              ) : (
                <>
                  <CreditCard size={16} className="mr-2" />
                  Оплатить {subscription.price}
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;