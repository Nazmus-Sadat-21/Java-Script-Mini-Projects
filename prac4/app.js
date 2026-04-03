const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const quantityInput = document.getElementById('quantity');
const priceDisplay = document.getElementById('price');
const couponBox = document.getElementById('cupon');
const messageDisplay = document.getElementById('mssg');

let quantity = 0;
const pricePerItem = 1000;
function updatePrice() {
    const totalPrice = quantity * pricePerItem;
    priceDisplay.textContent = `$${totalPrice}`;
    if (totalPrice >= 2000) {
        couponBox.style.display = 'flex';
        messageDisplay.textContent = 'Congratulations! You are eligible for a gift coupon!';
    } else {
        couponBox.style.display = 'none';
        messageDisplay.textContent = '';
    }
}

minus.addEventListener('click', () => {
    if (quantity > 0) {
        quantity--;
        quantityInput.value = quantity;
        updatePrice();
    }
});

plus.addEventListener('click', () => {
    quantity++;
    quantityInput.value = quantity;
    updatePrice();
});

quantityInput.addEventListener('input', () => {
    const value = parseInt(quantityInput.value);
    if (!isNaN(value) && value >= 0) {
        quantity = value;
        updatePrice();
    } else {
        quantityInput.value = quantity;
    }
});


