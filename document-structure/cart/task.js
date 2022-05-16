'use strict';

let minuses = document.getElementsByClassName('product__quantity-control_dec');
let pluses = document.getElementsByClassName('product__quantity-control_inc');
let basketAdd = document.getElementsByClassName('product__add');
let basket = document.getElementsByClassName('cart__products').item(0);

function add(event) {
    let plus = event.target;
    plus.previousElementSibling.textContent++;
}

function deduct(event) {
    let dec = event.target;
    if (dec.nextElementSibling.textContent <= 1) {
        dec.nextElementSibling.textContent = 1;
    } else {
        dec.nextElementSibling.textContent--;
    }
}

function addToBasket(event) {
    let addition = event.target;
    let productToBasket = addition.closest('.product');

    let id = productToBasket.dataset.id;
    let productInBasket = document.createElement('div');

    productInBasket.setAttribute('class', 'cart__product');
    productInBasket.dataset.id = id;
    
    let productImage = document.createElement('img');
    productImage.setAttribute('class', 'cart__product-image');
    let link = productToBasket.querySelector('.product__image').src;
    productImage.setAttribute('src', link);
    
    let amount = document.createElement('div');
    let number = productToBasket.querySelector('.product__quantity-value').textContent;
    amount.setAttribute('class', 'cart__product-count');
    amount.textContent = number;

    productInBasket.insertAdjacentElement('afterbegin', productImage);
    productInBasket.insertAdjacentElement('beforeend', amount);

    for (let item of basket.children) {
        if (item.dataset.id === id) {
            let productAmount = item.querySelector('.cart__product-count').textContent;
            let productTotal = Number(productAmount) + Number(number);
            item.querySelector('.cart__product-count').textContent = productTotal;
        
            return false;
        }
    }
    basket.appendChild(productInBasket);
}

for (let i = 0; i < pluses.length; i++) {
    pluses.item(i).addEventListener('click', add);
    minuses.item(i).addEventListener('click', deduct);
    basketAdd.item(i).addEventListener('click', addToBasket);
}