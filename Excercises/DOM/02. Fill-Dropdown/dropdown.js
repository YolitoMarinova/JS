function addItem() {
    const text = document.getElementById("newItemText");
    const value = document.getElementById("newItemValue");

    let optionElement = document.createElement("option");
    optionElement.text = text.value;
    optionElement.value = value.value;

    document.getElementById("menu").appendChild(optionElement);

    text.value = '';
    value.value = '';
}