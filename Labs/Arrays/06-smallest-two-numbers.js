function solve([...args]) {
    return args
        .sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ');
}