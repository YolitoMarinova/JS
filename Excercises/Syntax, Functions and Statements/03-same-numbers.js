function solve(number) {
    const numberLikeString = number.toString();
    let isNumbersSame = true;
    let sum = Number(numberLikeString[0]);

    for (let i = 1; i < numberLikeString.length; i++) {
        if (numberLikeString[i] != numberLikeString[i - 1]) {
            isNumbersSame = false;
        }

        sum += Number(numberLikeString[i]);
    }

    console.log(isNumbersSame);
    console.log(sum);
}