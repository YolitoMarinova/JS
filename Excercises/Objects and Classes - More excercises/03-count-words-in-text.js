function solve([input]) {
    let results = {};

    const rgx = /\W/;

    input.split(rgx).map(w => {
        if (!w) { return; }

        results.hasOwnProperty(w) ? results[w] += 1 : results[w] = 1;
    });

    return JSON.stringify(results);
}