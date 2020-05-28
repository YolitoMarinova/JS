function solve([...args]) {
    let products = {};

    for (let i = 0; i < args.length; i += 2) {
        let productName = args[i]
        let productCalories = Number(args[i + 1])

        products[productName] = productCalories;
    }

    console.log(products);
}