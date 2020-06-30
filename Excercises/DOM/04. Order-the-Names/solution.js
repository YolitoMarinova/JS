function solve() {
    document.querySelector("button").addEventListener("click", addName);
    const list = {};

    const ol = document.querySelector("ol").querySelectorAll("li");
    [...ol].forEach(e => {
        if (e.textContent.trim().length === 0) {
            return;
        }

        const letter = e.textContent[0].toLocaleUpperCase();
        list[letter] = e.textContent;
    });


    function addName() {
        const input = document.querySelector("input");
        const name = input.value;
        const firstLetter = name[0].toLocaleUpperCase();

        if(list.hasOwnProperty(firstLetter) === false){
            list[firstLetter] = firstLetter + name.substr(1);
        }else {
            list[firstLetter] = list[firstLetter] + ', ' + firstLetter + name.substr(1);
        }

        const index = firstLetter.charCodeAt(0) - 65;
        ol[index].textContent = list[firstLetter];

        input.value = '';
    }
}