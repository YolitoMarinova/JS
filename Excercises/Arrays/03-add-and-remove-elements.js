function solve(commands) {
    let initialNumber = 1;
    let result = new Array();

    commands.forEach(command => {
        command === 'add' ? result.push(initialNumber) : result.pop();
        initialNumber++;
    });

    result.length === 0 ? console.log('Empty') : console.log(result.join('\n'));
}