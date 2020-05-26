function solve(text) {
    const regex = /\w+/gi;
    let matches;
    let result = new Array();

    matches = text.match(regex);

    matches.forEach(element => {
       result.push(element.toUpperCase());
    });

    console.log(result.join(', '));
}