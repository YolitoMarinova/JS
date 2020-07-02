function solve(jsonInput) {
    let people = JSON.parse(jsonInput);

    let result = [];
    result.push('<table>');
    result.push(`\t<tr><th>name</th><th>score</th></tr>`);

    for (const person of people) {
        person.name = person.name.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
            
        result.push(`\t<tr><td>${person.name}</td><td>${person.score}</td></tr>`);
    }

    result.push('</table>');

    return result.join('\n');
}

console.log(solve(['[{"name":"Pesho & Kiro","score":479}, {"name":"Gosho, Maria & Viki", "price":205}]']));
