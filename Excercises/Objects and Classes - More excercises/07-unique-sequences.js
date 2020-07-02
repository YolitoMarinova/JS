function solve(input) {
    let results = [];

    input.forEach(x => {
        let isExist = false;
        x = JSON.parse(x).sort((a, b) => b - a);

        results.forEach(y => {
            if (y.join() === x.join()) {
                isExist = true;
            }
        });

        if (!isExist) {
            results.push(x);
        }
    });

    results.sort((a, b) => a.length - b.length).forEach(x => console.log(`[${x.join(', ')}]`));
}