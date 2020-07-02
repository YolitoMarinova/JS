function solve(sales) {
    let result = [];
    let cities = {};

    sales.forEach(sale => {
        [townName, productName, prInfo] = sale.split(' -> ');

        let [prAmount, prPricePerUnit] = prInfo.split(' : ');
        let totalProfitFromProduct = prAmount * prPricePerUnit;

        if (!cities[townName]) { cities[townName] = {}; }

        cities[townName][productName] = totalProfitFromProduct;
    });

    for (const city in cities) {
        result.push(`Town - ${city}`);

        for (const product in cities[city]) {
            result.push(`$$$${product} : ${cities[city][product]}`);
        }
    }

    return result.join('\n');
}