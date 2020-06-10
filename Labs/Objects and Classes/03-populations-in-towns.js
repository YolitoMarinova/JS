function solve(input) {
    let towns = {};

    for (const town of input) {
        let info = town.split(" <-> ");

        const townName = info[0];
        const population = Number(info[1]);

        if (Object.keys(towns).includes(townName)) {
            towns[townName] += population;
        }
        else {
            towns[townName] = population;
        }
    }

   for (let key of Object.keys(towns)) {
       console.log(`${key} : ${towns[key]}`);
   }
}