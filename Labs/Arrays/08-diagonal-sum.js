function solve(input){
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    let firstIndex = 0;
    let secondIndex = input[0].length - 1;

    input.forEach(x => {
        firstDiagonalSum += x[firstIndex++];
        secondDiagonalSum += x[secondIndex--];
    });

    console.log(`${firstDiagonalSum} ${secondDiagonalSum}`);
}