function solve(input) {
    let catalogue = new Map();

    let currLetter = '';

    input.sort().forEach(element => {

        if (element.charAt(0) !== currLetter) {
            currLetter = element.charAt(0);
        }
        const info = element.split(' :');

        if (!catalogue.has(currLetter)) { catalogue.set(currLetter, new Map()); }

        catalogue.get(currLetter).set(info[0],info[1]);
    }); 

    for (const [letter, products] of catalogue) {
        console.log(letter);

        for (const [product, price] of products) {
            console.log(`  ${product}:${price}`);
        }
    }
}