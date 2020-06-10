function solve(input) {

const rgx = /\s*\|\s*/;

    let result = [];

for (const row of input.slice(1)) {
    let data = row.split(rgx);

    let obj = {
        Town : data[1],
        Latitude : fixedNumber(data[2],2),
        Longitude : fixedNumber(data[3],2),
    };

    result.push(obj);
}

function fixedNumber(num, digits){
    return Number(Number(num).toFixed(digits))
}

    console.log(JSON.stringify(result));
}