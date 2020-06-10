function solve(input) {
    const products = new Map();

    input.map(product => {
        const info = product.split(' | ');

        if (!products.has(info[1])) {
            products.set(info[1], new Map());
        }

        products.get(info[1]).set(info[0], Number(info[2]));
    });

    for (let [product, info] of products) {
        let minPrice = Number.MAX_SAFE_INTEGER;
        let town = '';

        for (const [townName, price] of info) {
            if (price < minPrice) {
                minPrice = price;
                town = townName;
            }
        }

        console.log(`${product} -> ${minPrice} (${town})`);
    }
}