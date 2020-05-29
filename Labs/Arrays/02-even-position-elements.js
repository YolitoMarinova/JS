function solve([...args]){
    const numbersOnEvenPosition = new Array();

    for (let i = 0; i < args.length; i+=2) {
        numbersOnEvenPosition.push(args[i]);        
    }

    return numbersOnEvenPosition.join(' ');
}