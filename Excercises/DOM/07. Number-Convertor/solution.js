function solve() {

    const binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    const hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal';

    let selectMenu = document.getElementById('selectMenuTo');
    selectMenu.appendChild(binaryOption);
    selectMenu.appendChild(hexadecimalOption);

    const convertor = {
        'binary': num => num.toString(2),
        'hexadecimal': num => num.toString(16).toUpperCase()
    }

    document.querySelector('#container > button').addEventListener('click', convert => {
        let resultInput = document.getElementById('result');
        let inputNum = Number(document.getElementById('input').value);
        let option = selectMenu.value;

        resultInput.value = convertor[option](inputNum);
    });

}