
function increaseQuantity(id) {
    var quantityInput = document.getElementById(id);
    var currentQuantity = parseInt(quantityInput.value, 10);
    quantityInput.value = currentQuantity + 1;
}

function decreaseQuantity(id) {
    var quantityInput = document.getElementById(id);
    var currentQuantity = parseInt(quantityInput.value, 10);
     if (currentQuantity > 0) {
        quantityInput.value = currentQuantity - 1;
    }
}





















function increaseQuantity(id) {
    var quantityInput = document.getElementById(id);
    var currentQuantity = parseInt(quantityInput.value, 10);
    quantityInput.value = currentQuantity + 1;
}

function decreaseQuantity(id) {
    var quantityInput = document.getElementById(id);
    var currentQuantity = parseInt(quantityInput.value, 10);
     if (currentQuantity > 0) {
        quantityInput.value = currentQuantity - 1;
    }
}
