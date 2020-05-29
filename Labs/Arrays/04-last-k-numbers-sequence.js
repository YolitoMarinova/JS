function solve(n, k) {

    const firstElement = 1;
    let result = [firstElement];
    let currentNumber;

    for (let i = 1; i < n; i++) {
        currentNumber = 0;

        i - k < 0 ? sum(0, i) : sum(i - k, i);

        result.push(currentNumber);
    }

    function sum(startIndex, endIndex) {
        result.slice(startIndex, endIndex).forEach(x => { currentNumber += x; });
    }

    return result.join(' ');
}