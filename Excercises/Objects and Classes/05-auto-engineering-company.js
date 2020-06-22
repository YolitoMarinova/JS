function solve(input) {
    let brands = new Map();

    input.forEach(item => {
        let currCar = item.split(' | ');

        let brand = currCar[0];
        let model = currCar[1];
        let price = Number(currCar[2]);

        if (!brands.has(brand)) {
            brands.set(brand, new Map());
        }

        if (brands.get(brand).has(model)) {
            price += brands.get(brand).get(model);
        }
        brands.get(brand).set(model, price);

    });

    for (const [brand, cars] of brands) {
        console.log(brand);

        for (const [model, price] of cars) {
            console.log(`###${model} -> ${price}`);
        }
    }
}