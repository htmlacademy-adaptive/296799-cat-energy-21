"use strict";

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var menuToggleButton = document.querySelector(".header__menu-toggle-button");
var popup = document.querySelector(".popup");

// Функции

// открытие-закрытие модального окна
var togglePopup = function () {
  popup.classList.toggle("popup--closed");
};

// переключение вида кнопки открытия-закрытия меню
var toggleOpenCloseButton = function () {
  menuToggleButton.classList.toggle("header__menu-toggle-button--burger");
  menuToggleButton.classList.toggle("header__menu-toggle-button--cross");
};

// объединение этих двух действий
var toggleMenu = function () {
  togglePopup();
  toggleOpenCloseButton();
};

// Хендлеры

var onClickToggler = function (evt) {
  evt.preventDefault();
  toggleMenu();
};

var onEnterOpener = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    evt.preventDefault();
    window.removeEventListener("keydown", onEnterOpener);
    toggleMenu();
  }
};

var onEscCloser = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.preventDefault();
    window.removeEventListener("keydown", onEscCloser);
    popup.classList.add("popup--closed");
    menuToggleButton.classList.remove("header__menu-toggle-button--cross");
    menuToggleButton.classList.add("header__menu-toggle-button--burger");
  }
}

// Обработчики событий

// обрабатываем открытие-закрытие меню по Enter
menuToggleButton.addEventListener("keydown", onEnterOpener);
// обрабатываем открытие-закрытие меню по клику
menuToggleButton.addEventListener("click", onClickToggler);
// обрабатываем закрытие меню окна по Esc
document.addEventListener("keydown", onEscCloser);
