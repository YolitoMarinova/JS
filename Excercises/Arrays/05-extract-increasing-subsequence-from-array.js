function solve(input) {
    return input
        .reduce((acc, curr) => {
            let maxNum = Math.max(...acc);

            curr >= maxNum ? acc.push(curr) : 'pass';

            return acc;
        }, [])
        .join('\n');
}