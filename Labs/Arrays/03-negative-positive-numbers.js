function solve([...args]) {
    const sortedArray = new Array();

    args.forEach(x => {
        x < 0 ? sortedArray.unshift(x) : sortedArray.push(x);
    });

    return sortedArray;
}