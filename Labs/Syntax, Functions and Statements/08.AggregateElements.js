function solve(args) {
    aggregate(args, 0, (a, b) => a + b);
    aggregate(args, 0, (a, b) => a + 1 / b);
    aggregate(args, '', (a, b) => a + b);

    function aggregate(array, initalValue, func) {
        let result = initalValue;

        for (let i = 0; i < array.length; i++) {
            result = func(result, array[i]);
        }
        
        console.log(result);
    }
}