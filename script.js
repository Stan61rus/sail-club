// Переключение темы

let themeButtonDark = document.querySelector(".theme-button-dark");
let themeButtonLight = document.querySelector(".theme-button-light");

themeButtonDark.onclick = function () {
  document.body.classList.add("dark");
  themeButtonDark.classList.add("active");
  themeButtonLight.classList.remove("active");
};

themeButtonLight.onclick = function () {
  document.body.classList.remove("dark");
  themeButtonDark.classList.remove("active");
  themeButtonLight.classList.add("active");
};

// Переключение шрифта

let fontButtonSansSerif = document.querySelector(".font-button-sans-serif");
let fontButtonSerif = document.querySelector(".font-button-serif");

fontButtonSerif.onclick = function () {
  document.body.classList.add("serif");
  fontButtonSerif.classList.add("active");
  fontButtonSansSerif.classList.remove("active");
};

fontButtonSansSerif.onclick = function () {
  document.body.classList.remove("serif");
  fontButtonSerif.classList.remove("active");
  fontButtonSansSerif.classList.add("active");
};

//  Разворачивание текстового блока

let articles = document.querySelectorAll(".blog-article.short");

for (const article of articles) {
  let button = article.querySelector(".more");

  button.onclick = function () {
    article.classList.remove("short");
  };
}

// Переключатель раскладки карточек

let cardViewButtonGrid = document.querySelector(".card-view-button-grid");
let cardViewButtonList = document.querySelector(".card-view-button-list");
let rentCardsList = document.querySelector(".rent .cards");

cardViewButtonGrid.onclick = function () {
  rentCardsList.classList.remove("list");

  cardViewButtonList.classList.remove("active");
  cardViewButtonGrid.classList.add("active");
};

cardViewButtonList.onclick = function () {
  rentCardsList.classList.add("list");

  cardViewButtonList.classList.add("active");
  cardViewButtonGrid.classList.remove("active");
};

// Переключение галереи изображений

let activePhoto = document.querySelector(".active-photo");
let previews = document.querySelectorAll(".preview-list a");

for (const preview of previews) {
  preview.onclick = function (e) {
    e.preventDefault();

    let activeItem = document.querySelector(".active-item");
    activeItem.classList.remove("active-item");

    activePhoto.src = preview.href;
    preview.classList.add("active-item");
  };
}

// activePhoto.src = "img/gallery-photo-2.jpg";
