"use strict";

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var menuToggleButton = document.querySelector(".header__menu-toggle-button");
var popup = document.querySelector(".popup");

// открытие модального окна
var showPopup = function() {
  popup.classList.remove("popup--closed");
  popup.classList.add("popup--showed");
  // toggleOpenCloseButton();
  menuToggleButton.classList.remove("header__menu-toggle-button--burger");
  menuToggleButton.classList.add("header__menu-toggle-button--cross");
};
// закрытие модального окна
var closePopup = function() {
  // popup.classList.toggle("popup--closed");
  popup.classList.remove("popup--showed");
  popup.classList.add("popup--closed");
  menuToggleButton.classList.add("header__menu-toggle-button--burger");
  menuToggleButton.classList.remove("header__menu-toggle-button--cross");
  // toggleOpenCloseButton();
};

// переключение вида кнопки открытия-закрытия меню
// var toggleOpenCloseButton = function() {
//   menuToggleButton.classList.toggle("header__menu-toggle-button--burger");
//   menuToggleButton.classList.toggle("header__menu-toggle-button--cross");
// };

// Хендлеры
var onClickOpener = function(evt) {
  evt.preventDefault();
  window.removeEventListener("click", onClickOpener);
  showPopup();
};

var onEnterOpener = function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    evt.preventDefault();
    window.removeEventListener("keydown", onEnterOpener);
    showPopup();
  }
};

var onClickCloser = function(evt) {
  evt.preventDefault();
  window.removeEventListener("click", onClickCloser);
  closePopup();
}

var onEscCloser = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.preventDefault();
    window.removeEventListener("keydown", onEscCloser);
    closePopup();
  }
}

// Обработчики событий

// обрабатываем открытие меню по Enter
menuToggleButton.addEventListener("keydown", onEnterOpener);
// обрабатываем открытие меню по клику
menuToggleButton.addEventListener("click", onClickOpener);
// обрабатываем закрытие меню по клику
menuToggleButton.addEventListener("click", onClickCloser);
// обрабатываем закрытие меню окна по Esc
document.addEventListener("keydown", onEscCloser);
