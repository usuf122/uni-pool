// Mock data for детский бассейн
export const trainers = [
  {
    id: 1,
    name: "Анна Петрова",
    specialization: "Детское плавание (3-6 лет)",
    experience: "8 лет опыта",
    image: "https://images.pexels.com/photos/346780/pexels-photo-346780.jpeg",
    description: "Мастер спорта по плаванию. Специализируется на обучении малышей основам плавания в игровой форме.",
    certifications: ["Мастер спорта", "Детский тренер", "Первая помощь"]
  },
  {
    id: 2,
    name: "Михаил Волков",
    specialization: "Спортивное плавание (7-12 лет)",
    experience: "6 лет опыта",
    image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMGluc3RydWN0b3J8ZW58MHx8fHwxNzU0NDg4Njg4fDA&ixlib=rb-4.1.0&q=85",
    description: "Кандидат в мастера спорта. Готовит детей к соревнованиям и развивает спортивные навыки.",
    certifications: ["КМС", "Спортивный тренер", "Судья по плаванию"]
  },
  {
    id: 3,
    name: "Елена Сидорова",
    specialization: "Аквааэробика для детей",
    experience: "5 лет опыта",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxzd2ltbWluZyUyMGluc3RydWN0b3J8ZW58MHx8fHwxNzU0NDg4Njg4fDA&ixlib=rb-4.1.0&q=85",
    description: "Инструктор по аквааэробике. Проводит веселые и энергичные занятия для укрепления здоровья детей.",
    certifications: ["Аквааэробика", "Фитнес-тренер", "Детская реабилитация"]
  }
];

export const subscriptions = [
  {
    id: 1,
    name: "Малышок",
    ageGroup: "3-5 лет",
    price: "25,000 ₸",
    duration: "1 месяц",
    lessons: "8 занятий",
    features: [
      "Индивидуальный подход",
      "Игровая форма обучения",
      "Группы до 4 детей",
      "Базовые навыки плавания"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Дельфинчик",
    ageGroup: "6-8 лет",
    price: "30,000 ₸",
    duration: "1 месяц",
    lessons: "8 занятий",
    features: [
      "Техника плавания",
      "Группы до 6 детей",
      "Дыхательные упражнения",
      "Координация движений"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Чемпион",
    ageGroup: "9-12 лет",
    price: "35,000 ₸",
    duration: "1 месяц",
    lessons: "8 занятий",
    features: [
      "Спортивная техника",
      "Подготовка к соревнованиям",
      "Выносливость",
      "Различные стили плавания"
    ],
    popular: false
  },
  {
    id: 4,
    name: "Акваfit",
    ageGroup: "5-10 лет",
    price: "20,000 ₸",
    duration: "1 месяц",
    lessons: "8 занятий",
    features: [
      "Аквааэробика",
      "Укрепление мышц",
      "Веселые упражнения",
      "Групповые занятия"
    ],
    popular: false
  }
];

export const heroImages = [
  "https://images.unsplash.com/photo-1574744918163-6cef6f4a31b0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN3aW1taW5nfGVufDB8fHx8MTc1NDQ4ODY1MXww&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1592484806287-7bc9c8af5405?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxjaGlsZHJlbiUyMHN3aW1taW5nfGVufDB8fHx8MTc1NDQ4ODY1MXww&ixlib=rb-4.1.0&q=85",
  "https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg"
];

export const scheduleData = {
  "Понедельник": [
    { time: "09:00", group: "Малышок (3-5 лет)", trainer: "Анна Петрова" },
    { time: "10:00", group: "Дельфинчик (6-8 лет)", trainer: "Михаил Волков" },
    { time: "16:00", group: "Чемпион (9-12 лет)", trainer: "Михаил Волков" },
    { time: "17:00", group: "Акваfit (5-10 лет)", trainer: "Елена Сидорова" }
  ],
  "Вторник": [
    { time: "09:30", group: "Малышок (3-5 лет)", trainer: "Анна Петрова" },
    { time: "15:30", group: "Дельфинчик (6-8 лет)", trainer: "Михаил Волков" },
    { time: "16:30", group: "Акваfit (5-10 лет)", trainer: "Елена Сидорова" }
  ],
  "Среда": [
    { time: "09:00", group: "Малышок (3-5 лет)", trainer: "Анна Петрова" },
    { time: "10:00", group: "Дельфинчик (6-8 лет)", trainer: "Михаил Волков" },
    { time: "16:00", group: "Чемпион (9-12 лет)", trainer: "Михаил Волков" },
    { time: "17:00", group: "Акваfit (5-10 лет)", trainer: "Елена Сидорова" }
  ],
  "Четверг": [
    { time: "09:30", group: "Малышок (3-5 лет)", trainer: "Анна Петрова" },
    { time: "15:30", group: "Дельфинчик (6-8 лет)", trainer: "Михаил Волков" },
    { time: "16:30", group: "Чемпион (9-12 лет)", trainer: "Михаил Волков" }
  ],
  "Пятница": [
    { time: "09:00", group: "Малышок (3-5 лет)", trainer: "Анна Петрова" },
    { time: "16:00", group: "Дельфинчик (6-8 лет)", trainer: "Михаил Волков" },
    { time: "17:00", group: "Акваfit (5-10 лет)", trainer: "Елена Сидорова" }
  ],
  "Суббота": [
    { time: "10:00", group: "Семейное плавание", trainer: "Анна Петрова" },
    { time: "11:00", group: "Открытое плавание", trainer: "Михаил Волков" },
    { time: "12:00", group: "Акваfit (5-10 лет)", trainer: "Елена Сидорова" }
  ],
  "Воскресенье": [
    { time: "10:00", group: "Семейное плавание", trainer: "Елена Сидорова" },
    { time: "11:00", group: "Открытое плавание", trainer: "Анна Петрова" }
  ]
};

export const facilitiesData = [
  {
    title: "Детский бассейн",
    description: "Специально оборудованный бассейн глубиной 0.8-1.2м для безопасного обучения детей",
    image: "https://images.unsplash.com/photo-1617182726501-1f5f7b05a68f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwb29sJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzU0NDg4NzI1fDA&ixlib=rb-4.1.0&q=85"
  },
  {
    title: "Раздевалки",
    description: "Просторные раздевалки с индивидуальными шкафчиками и душевыми",
    image: "https://images.unsplash.com/photo-1527534079274-21dc9147f3d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBwb29sJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzU0NDg4NzI1fDA&ixlib=rb-4.1.0&q=85"
  },
  {
    title: "Зона отдыха",
    description: "Комфортная зона ожидания для родителей с видом на бассейн",
    image: "https://images.unsplash.com/photo-1708999150541-663150c8e5f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBwb29sJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzU0NDg4NzI1fDA&ixlib=rb-4.1.0&q=85"
  }
];

export const contactInfo = {
  address: "г. Алматы, ул. Примерная, 123",
  phone: "+7 (727) 123-45-67",
  email: "info@unibaby.kz",
  instagram: "@unibaby_uniflex",
  mapUrl: "https://go.2gis.com/GwNDy",
  workingHours: {
    weekdays: "09:00 - 21:00",
    weekend: "10:00 - 19:00"
  }
};