function solve([...args]) {
    const firstElemenet = Number(args[0]);
    const lastElemenet = Number(args[args.length - 1]);
    const sum = firstElemenet + lastElemenet;

    return sum;
}