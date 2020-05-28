function solve([speed, area]) {
    let limit;
    let speedOverTheLimit;

    switch (area) {
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20; break;
    }

    speedOverTheLimit = Number(speed) - limit;

    if (speedOverTheLimit > 0) {
        if (speedOverTheLimit <= 20) {
            console.log('speeding');
        }
        else if (speedOverTheLimit <= 40) {
            console.log('excessive speeding');
        }
        else {
            console.log('reckless driving');
        }
    }
}