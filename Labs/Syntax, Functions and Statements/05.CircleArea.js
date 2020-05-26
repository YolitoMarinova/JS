function findCircleArea(arg) {
    let argType = typeof (arg);
    let result;

    if (argType != 'number') {
        result = `We can not calculate the circle area, because we receive a ${argType}.`;
        console.log(result);
        return;
    }

    result = Math.pow(arg,2)*Math.PI;
    console.log(result.toFixed(2));
}