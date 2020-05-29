function solve(input) {
    return input.reduce((acc, currRow, rowIndex) => {
        const currentCount = currRow.reduce((acc, currItem, itemIndex) => {
            if (currItem === currRow[itemIndex + 1]) { acc = acc + 1; }
            if (currItem === (input[rowIndex + 1] || [])[itemIndex]) {acc = acc + 1; }
            return acc;
        }, 0);
        return acc + currentCount;
    }, 0);
}