function solve(input) {
    let rotationCount = Number(input.pop() % input.length);

    for (let i = 1; i <= rotationCount; i++) {
        input.unshift(input.pop());
    }

    console.log(input.join(' '));
}