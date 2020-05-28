function calculateTotalPrice(product, weightInGrams, pricePerKilogram) {
    let weightInKilograms = weightInGrams / 1000;
    let totalPrice;

    totalPrice = pricePerKilogram * weightInKilograms;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${product}.`);
}