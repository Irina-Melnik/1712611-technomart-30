const modalCartElem = document.querySelector(".modal-cart");
const catalogElem = document.querySelector(".catalog");
const btnBuyElem = document.querySelector(".button-buy");
const cartCloseBtn = document.querySelector(".modal-cart .modal-close-button");
const contShopBtn = document.querySelector(".continue-shopping")

catalogElem.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log("Клик по кнопке «Купить» открывает модальное окно с сообщением о добавлении товара в корзину");
    
    if (evt.target.classList.contains('button-buy')) {
        modalCartElem.classList.add("modal-show");
    }

    cartCloseBtn.addEventListener("click", function(evt) {
        evt.preventDefault();
        modalCartElem.classList.remove("modal-show");
    });


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

