function solve([x1, y1, x2, y2]) {

    distance(x1, y1, 0, 0);
    distance(x2, y2, 0, 0);
    distance(x1, y1, x2, y2);

    function distance(x1, y1, x2, y2) {
        let distX = x1 - x2;
        let distY = y1 - y2;

        let dist = Math.sqrt(distX ** 2 + distY ** 2);

        if (Number.isInteger(dist)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }
        else
        {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}