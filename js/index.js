const modalMapElem = document.querySelector(".modal-map");
const miniMapElem = document.querySelector(".main-map");
const mapCloseBtn = document.querySelector(".modal-map .modal-close-button");

const modalFbackElem = document.querySelector(".modal-feedback");
const writeUsElem = document.querySelector(".write-us");
const fBackCloseBtn = document.querySelector(".modal-feedback .modal-close-button");
const popupFBack = document.querySelector(".modal-feedback");
const login = popupFBack.querySelector("[name=login]");
const form = popupFBack.querySelector("form");
const mail = popupFBack.querySelector("[name=e-mail]");
const comment = popupFBack.querySelector("[name=comment]");

const modalCartElem = document.querySelector(".modal-cart");
const topElem = document.querySelector(".main-products-top");
const btnBuyElem = document.querySelector(".button-buy");
const cartCloseBtn = document.querySelector(".modal-cart .modal-close-button");
const contShopBtn = document.querySelector(".continue-shopping");
const modalMakeAnOrder = document.querySelector(".modal-cart .make-an-order");

const slider = document.querySelector('.slider-wrapper');
const sliderCtrlPrev = slider.querySelector('.slider-control-prev');
const sliderCtrlNext = slider.querySelector('.slider-control-next');
const sliderBottomCtrlPrev = slider.querySelector('.slider-controls>button:first-child');
const sliderBottomCtrlNext = slider.querySelector('.slider-controls>button:nth-child(2)');

let lastFocusedElement;

let slideChange = setInterval(changeSlide, 4000);

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

miniMapElem.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log("Клик по ссылке открывает модальное окно с полноразмерной интерактивной картой");
    modalMapElem.classList.add("modal-show");
});

mapCloseBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMapElem.classList.remove("modal-show");
});

writeUsElem.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log("Клик по кнопке открывает модальное окно с формой обратной связи");
    modalFbackElem.classList.add("modal-show");
    modalFbackElem.classList.add("modal-bounce");
    setTimeout(()=> modalFbackElem.classList.remove("modal-bounce"), 600);

    if (storage) {
        login.value = storage;
        comment.focus();
    } else {
        login.focus();
    }  
});

form.addEventListener("submit", function(evt) {
    if (!login.value || !mail.value || !comment.value) {
        evt.preventDefault();
        modalFbackElem.classList.add("modal-error");
        setTimeout(()=> modalFbackElem.classList.remove("modal-error"), 600);
    } else {
        if (isStorageSupport) {
          localStorage.setItem("login", login.value);
        }
    }
});

fBackCloseBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalFbackElem.classList.remove("modal-show");
    modalFbackElem.classList.remove("modal-error");
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalFbackElem.classList.contains("modal-show")) {
        evt.preventDefault();
        modalFbackElem.classList.remove("modal-show");
        modalFbackElem.classList.remove("modal-error");
      }

      if (modalMapElem.classList.contains("modal-show")) {
        evt.preventDefault();
        modalMapElem.classList.remove("modal-show");
      }

      if (modalCartElem.classList.contains("modal-show")) {
        hideModalCart(evt);
      }
    }
});

cartCloseBtn.addEventListener("click", hideModalCart);

function hideModalCart(e) {
    e.preventDefault();
    modalCartElem.classList.remove("modal-show");
    lastFocusedElement.focus();
}

topElem.addEventListener("click", function(evt) {
    evt.preventDefault();
    
    if (evt.target.classList.contains('button-buy')) {
        console.log("Клик по кнопке «Купить» открывает модальное окно с сообщением о добавлении товара в корзину");
        lastFocusedElement = evt.target.parentElement.parentElement.parentElement;
        modalCartElem.classList.add("modal-show");
        modalMakeAnOrder.focus();
    }

    if (evt.target.classList.contains('button-add-to-bookmarks')) {
        console.log("Клик по кнопке «В закладки» добавляет товар в закладки");
    }

});

sliderCtrlNext.addEventListener('click', changeSlide);
sliderCtrlPrev.addEventListener('click', changeSlide);
sliderBottomCtrlPrev.addEventListener('click', changeSlide);
sliderBottomCtrlNext.addEventListener('click', changeSlide);

function changeSlide() {
    slider.classList.toggle('slider-wrapper-1');
    slider.classList.toggle('slider-wrapper-2');
    clearInterval(slideChange);
    slideChange = setInterval(changeSlide, 4000);
}


