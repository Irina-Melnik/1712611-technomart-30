const modalCartElem = document.querySelector(".modal-cart");
const topElem = document.querySelector(".catalog");
const catalogElem = document.querySelector(".catalog");
const btnBuyElem = document.querySelector(".button-buy");
const cartCloseBtn = document.querySelector(".modal-cart .modal-close-button");
const contShopBtn = document.querySelector(".continue-shopping");
const modalMakeAnOrder = document.querySelector(".modal-cart .make-an-order");

let lastFocusedElement;

cartCloseBtn.addEventListener("click", hideModalCart);

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalCartElem.classList.contains("modal-show")) {
        hideModalCart(evt);
      }
    }
});

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
        modalCartElem.classList.add("modal-bounce");
        modalMakeAnOrder.focus();
    }

    if (evt.target.classList.contains('button-add-to-bookmarks')) {
        console.log("Клик по кнопке «В закладки» добавляет товар в закладки");
    }

});



// catalogElem.addEventListener("click", function(evt) {
//     evt.preventDefault();
//     console.log('Клик по каталогу!');
// });

// btnBuyElem.addEventListener("click", function(evt) {
//     evt.preventDefault();
//     evt.stopPropagation();
//     console.log('Клик по кнопке!');
// });

