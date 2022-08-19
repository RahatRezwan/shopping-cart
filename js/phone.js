//Decrease Button
document.getElementById("phone-minus").addEventListener("click", function () {
    const totalPhonePrice = quantityField(false, "phone-quantity", "phone-price", 1240);
    //subTotal
    total();
});

//Increase Button
document.getElementById("phone-plus").addEventListener("click", function () {
    const totalPhonePrice = quantityField(true, "phone-quantity", "phone-price", 1240);
    //subTotal
    total();
});
