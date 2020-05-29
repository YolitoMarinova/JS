function solve(input) {
    let maxNum = Number.MIN_SAFE_INTEGER;

    input.forEach(x => {
        x.forEach(y => {
            y > maxNum ? maxNum = y : maxNum = maxNum;
        })
    });

    console.log(maxNum);
}