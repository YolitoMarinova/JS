function solve(input) {
    let employees = input.map(element => JSON.parse(element));

    let result = '<table>';

    employees.forEach(currEmpl => {
        result += `\n\t<tr>\n\t\t<td>${currEmpl.name}</td>\n\t\t<td>${currEmpl.position}</td>\n\t\t<td>${currEmpl.salary}</td>\n\t</tr>`;
    }, result);

   return result + '\n</table>';
}