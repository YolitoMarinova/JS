function solve([...args]) {
    return args.filter((num, index) => index % 2 !== 0)
    .map(x => x*2)
    .reverse()
    .join(' ');
}