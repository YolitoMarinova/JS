function solve(input) {
    return input.sort((a, b) => {
        return a.length - b.length === 0 ? sortByAlphVal(a.toUpperCase(), b.toUpperCase()) : a.length - b.length;

        function sortByAlphVal(a, b) {
            return a.localeCompare(b)
        };
    })
        .join('\n');
}