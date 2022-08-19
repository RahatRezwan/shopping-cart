function getTextElementValue(elementId) {
    const textElement = document.getElementById(elementId);
    return parseInt(textElement.innerText);
}

function getElemet(elementId) {
    const element = document.getElementById(elementId);
    return element;
}

function quantityField(isIncrease, fieldId, priceId, price) {
    // Update quantity Field
    const itemQuantity = getElemet(fieldId);
    let newQuantity;
    if (isIncrease === true) {
        newQuantity = parseInt(itemQuantity.value) + 1;
    } else {
        newQuantity = parseInt(itemQuantity.value) - 1;
    }
    itemQuantity.value = newQuantity;

    //Set the price automatically
    const itemPrice = getElemet(priceId);
    itemPrice.innerText = price * newQuantity;
    return parseInt(itemPrice.innerText);
}

function total() {
    const firstItemPrice = getTextElementValue("phone-price");
    const secondItemPrice = getTextElementValue("case-price");

    // set Sub Total
    const subTotal = getElemet("sub-total");
    subTotal.innerText = firstItemPrice + secondItemPrice;

    // set 15% Tax
    const taxAmount = getElemet("tax-amount");
    taxAmount.innerText = (parseInt(subTotal.innerText) * 0.15).toFixed(2);

    // Set Total amount
    const totalAmount = getElemet("final-total");
    totalAmount.innerText = (
        parseFloat(subTotal.innerText) + parseFloat(taxAmount.innerText)
    ).toFixed(2);
}
