function solve(input) {
    let isMagixMatrix = true;
    let magicNumber = sum(input[0]);

    for (let i = 0; i < input.length; i++) {

        isMagic(sum(input[i]));

        let colSum = 0;

        for (let j = 0; j < input.length; j++) {
            colSum += input[j][i];
        }

        isMagic(colSum);
    }

    function sum(arr) {
        return arr.reduce((a, b) => a + b);
    }

    function isMagic(number) {
        if (number !== magicNumber) {
            isMagixMatrix = false;
        }
    }

    return isMagixMatrix;
}

console.log(solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));