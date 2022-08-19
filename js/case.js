//Decrease Button
document.getElementById("case-minus").addEventListener("click", function () {
    quantityField(false, "case-quantity", "case-price", 59);
    //subTotal
    total();
});

//Increase Button
document.getElementById("case-plus").addEventListener("click", function () {
    quantityField(true, "case-quantity", "case-price", 59);
    //subTotal
    total();
});
