function solve(input) {
    let towns = {};

    for (let i = 0; i < input.length; i += 2) {
        const town = input[i];
        const income = Number(input[i+1]);

        if(Object.keys(towns).includes(town)){
            towns[town] += income;
        }
        else{
            towns[town] = income;
        }
    }

    console.log(JSON.stringify(towns));
}