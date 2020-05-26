function solve(number) {
    const defaultNumber = 5;

    if (number != NaN) {
        printSquareOfStars(number);
    }
    else {
        printSquareOfStars(defaultNumber);
    }

    function printSquareOfStars(number) {
        for (let i = 1; i <= number; i++) {
            console.log('* '.repeat(number));
        }
    }
}