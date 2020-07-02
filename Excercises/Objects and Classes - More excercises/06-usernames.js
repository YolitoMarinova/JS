function solve(input) {
    let result = new Set();

    input.forEach(un => {
        result.add(un);
    });

    return [...result]
        .sort((a, b) => a.length - b.length === 0 ? a.localeCompare(b) : a.length - b.length)
        .join('\n');
}