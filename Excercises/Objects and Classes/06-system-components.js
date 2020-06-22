function solve(input) {
    let systems = {};

    input.forEach(system => {
        const [name, component, subcomponent] = system.split(' | ');

        if (!systems.hasOwnProperty(name)) {
            systems[name] = {};
        }

        if (!systems[name].hasOwnProperty(component)) {
            systems[name][component] = [];
        }

        systems[name][component].push(subcomponent);
    });

    Object.entries(systems).sort((a, b) => {
        return Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0])
    }).forEach(([name, components]) => {
        console.log(name);
        Object.entries(components)
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(([compName, subComps]) => {
            console.log(`|||${compName}`);
            subComps.forEach(sc => {
                console.log(`||||||${sc}`);
            })
        })
        
    });
}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);