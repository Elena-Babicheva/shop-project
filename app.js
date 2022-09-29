/* Счетчик продуктов в header при нажатии на кнопку add-btn (купить)
 увеличивает значение в блоке с корзиной.

Переменная addToCartBtns полученая методом querySelectorAll
будет равна Node list т.е массиву, чтобы обратиться к элементу
через addEventListener, перебираем Node list с помощью forEach.
Регистрируем событие addEventListener при нажатии "click" 
и добавляем к контенту счетчика "+1" при нажатии. 
Т.е тексту переменной  productsCount задаем новое числовое значение
равное текст +productsCount+1. *Плюс перед +productsCount указывает
на числовой формат содержимого.
*/

let productsCount = document.getElementById("product-counts");
console.log(productsCount); //ищем элемент счетчик по id

let addToCartBtns = document.querySelectorAll(".add-btn");
console.log(addToCartBtns); //ищем все кнопки по классу .add-btn

//перебираем масив по элементам и присваиваем нов.значение тексту блока счетчик по нажатии
addToCartBtns.forEach((item) => {
  item.addEventListener("click", function () {
    productsCount.textContent = +productsCount.textContent + 1;
  });
});

/* Кнопка лайк при нажатии на кнопку ее стиль меняется при 
повторном нажатии возвращается в первоначальное состояние.
1. создала в style.сss класс like-hover, и записала туда стили;
2. нашла все кнопки с классом .like
3. перебрала .like Node list циклом forEach
4. зарегистрировала событие при нажатии на likeBtn изменить
класс элемента на like-hover
5. использовала метод toggle, чтобы классы чередовались: 1ое нажатие
новый класс, предыдущее старый класс*/

let likeBtn = document.querySelectorAll(".like");
console.log(likeBtn); //ищем все like

likeBtn.forEach((elem) => {
  elem.addEventListener("click", function () {
    this.classList.toggle("like-hover");
  });
});

/* модальное окно при нажатии на кнопки .add-btn*/
let modal = document.querySelector(".modal");
console.log(modal);
let moreDetailsBtns = document.querySelectorAll(".details-btn");
console.log(moreDetailsBtns);

let closeBtn = document.querySelector(".btn-close");
function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}
moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", openModal);
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  //e.preventDefault;
  if (e.target === modal) {
    closeModal();
  }
});
//Модальное окно на 50% экрана

let scrollHeight = document.documentElement.clientHeight;
let skroll = window.pageYOffset;
// console.log(skroll, scrollHeight);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > scrollHeight / 2 ||
    document.documentElement.scrollTop > scrollHeight / 2
  ) {
    modal.classList.add("show");
    modal.classList.remove("hide");
  }
}

// slider
$(".slider").slick({
  dots: true,
  // autoplay: true,
});
