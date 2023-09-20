// Скрываем контент до загрузки страницы
document.getElementById("content").style.display = "none";

// Задержка в 5 секунд перед открытием страницы
setTimeout(function() {
  // Скрываем прелоудер
  document.getElementById("preloader").style.display = "none";
  // Отображаем контент
  document.getElementById("content").style.display = "block";
}, 5000);