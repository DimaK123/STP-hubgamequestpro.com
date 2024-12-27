// Найти все слайдеры
const sliders = document.querySelectorAll('.photo__slider');

// Массив для хранения экземпляров Swiper
const swipers = [];

// Инициализация всех слайдеров
sliders.forEach((slider) => {
  const isReverse = slider.classList.contains('photo__slider--reverse'); // Проверяем модификатор направления
  const swiper = new Swiper(slider, {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    autoplay: false, // Отключаем автоплей на этапе инициализации
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Настройка параметров автоплея с учетом направления
  swiper.params.autoplay = {
    delay: 3000,
    disableOnInteraction: false,
    reverseDirection: isReverse, // Учитываем направление движения
  };

  // Добавляем экземпляр Swiper в массив
  swipers.push(swiper);
});

// Синхронный запуск автоплея всех слайдеров
setTimeout(() => {
  swipers.forEach((swiper) => {
    swiper.autoplay.start();
  });
}, 100); // Небольшая задержка для синхронного запуска