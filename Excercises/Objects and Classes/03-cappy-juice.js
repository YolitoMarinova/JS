function solve(input) {

    let juices = new Map();
    let bootles = new Map();

    input.forEach(j => {
        const info = j.split(' =>');

        const juicyName = info[0];
        const quantity = Number(info[1]);

        if (!juices.has(juicyName)) { juices.set(juicyName, 0); }

        juices.set(juicyName, (juices.get(juicyName) + quantity));


        if (juices.get(juicyName) >= 1000) {
            if (!bootles.has(juicyName) > 0) { bootles.set(juicyName, 0); }

            bootles.set(juicyName,bootles.get(juicyName) + Math.floor(juices.get(juicyName) / 1000));
            juices.set(juicyName, (juices.get(juicyName) % 1000));
        }
    });

    for (const [name, count] of bootles) {
        console.log(`${name} => ${count}`);
    }

}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549',
]);